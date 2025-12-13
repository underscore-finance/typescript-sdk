import { GetItemCallFunction, iteratorQuery, query, RequestCollection } from '@dappql/async'
import { Address, createPublicClient, http, PublicClient, WalletClient } from 'viem'
import { base } from 'viem/chains'

import * as CONTRACTS from './contracts/index.js'
import createSdk, { SDK } from './contracts/sdk.js'
import { getSwapInstructionsAmountIn, getSwapInstructionsAmountOut } from './getSwapInstructions.js'
export * from './contracts/index.js'

export type Contracts = SDK
export type ContractsNames = keyof typeof CONTRACTS

export const DEPARTMENT_IDS = {
  LEDGER: 1n,
  MISSION_CONTROL: 2n,
  LEGO_BOOK: 3n,
  SWITCHBOARD: 4n,
  HATCHERY: 5n,
  LOOT_DISTRIBUTOR: 6n,
  APPRAISER: 7n,
  WALLET_BACKPACK: 8n,
  BILLING: 9n,
  VAULT_REGISTRY: 10n,
}

export const LEGOS_IDS = {
  RIPE: 1n,
  AAVE_V3: 2n,
  COMPOUND_V3: 3n,
  EULER: 4n,
  FLUID: 5n,
  MOONWELL: 6n,
  MORPHO: 7n,
  AERO_CLASSIC: 8n,
  AERO_SLIPSTREAM: 9n,
  CURVE: 10n,
  UNISWAP_V2: 11n,
  UNISWAP_V3: 12n,
  UNDERSCORE: 13n,
  FORTY_ACRES: 14n,
  WASABI: 15n,
  AVANTIS: 16n,
  SKY_PSM: 17n,
  EXTRA_FI: 18n,
}

export type UnderscoreConfig = {
  rpcUrl?: string
  publicClient?: PublicClient
  walletClient?: WalletClient
}

class Underscore {
  public publicClient: PublicClient
  public walletClient: WalletClient | undefined
  public contracts: SDK
  public addresses: Partial<Record<ContractsNames, `0x${string}`>>
  constructor(config?: UnderscoreConfig) {
    this.publicClient =
      config?.publicClient ||
      (createPublicClient({
        chain: base,
        transport: http(config?.rpcUrl),
      }) as PublicClient)
    this.addresses = {}
    this.walletClient = config?.walletClient
    this.contracts = createSdk(this.publicClient, this.walletClient, this.addressResolver)
  }

  async loadAddresses() {
    const departments = await this.multicall((contracts) => {
      return {
        Ledger: contracts.UndyHq.call.getAddr(DEPARTMENT_IDS.LEDGER),
        MissionControl: contracts.UndyHq.call.getAddr(DEPARTMENT_IDS.MISSION_CONTROL),
        LegoBook: contracts.UndyHq.call.getAddr(DEPARTMENT_IDS.LEGO_BOOK),
        Switchboard: contracts.UndyHq.call.getAddr(DEPARTMENT_IDS.SWITCHBOARD),
        Hatchery: contracts.UndyHq.call.getAddr(DEPARTMENT_IDS.HATCHERY),
        LootDistributor: contracts.UndyHq.call.getAddr(DEPARTMENT_IDS.LOOT_DISTRIBUTOR),
        Appraiser: contracts.UndyHq.call.getAddr(DEPARTMENT_IDS.APPRAISER),
        WalletBackpack: contracts.UndyHq.call.getAddr(DEPARTMENT_IDS.WALLET_BACKPACK),
        Billing: contracts.UndyHq.call.getAddr(DEPARTMENT_IDS.BILLING),
        VaultRegistry: contracts.UndyHq.call.getAddr(DEPARTMENT_IDS.VAULT_REGISTRY),
      }
    })
    const children = await this.multicall((contracts) => {
      return {
        RipeLego: contracts.LegoBook.call.getAddr(LEGOS_IDS.RIPE).at(departments.LegoBook),
        AaveV3: contracts.LegoBook.call.getAddr(LEGOS_IDS.AAVE_V3).at(departments.LegoBook),
        CompoundV3: contracts.LegoBook.call.getAddr(LEGOS_IDS.COMPOUND_V3).at(departments.LegoBook),
        Euler: contracts.LegoBook.call.getAddr(LEGOS_IDS.EULER).at(departments.LegoBook),
        Fluid: contracts.LegoBook.call.getAddr(LEGOS_IDS.FLUID).at(departments.LegoBook),
        Moonwell: contracts.LegoBook.call.getAddr(LEGOS_IDS.MOONWELL).at(departments.LegoBook),
        Morpho: contracts.LegoBook.call.getAddr(LEGOS_IDS.MORPHO).at(departments.LegoBook),
        AeroClassic: contracts.LegoBook.call.getAddr(LEGOS_IDS.AERO_CLASSIC).at(departments.LegoBook),
        AeroSlipstream: contracts.LegoBook.call.getAddr(LEGOS_IDS.AERO_SLIPSTREAM).at(departments.LegoBook),
        Curve: contracts.LegoBook.call.getAddr(LEGOS_IDS.CURVE).at(departments.LegoBook),
        UniswapV2: contracts.LegoBook.call.getAddr(LEGOS_IDS.UNISWAP_V2).at(departments.LegoBook),
        UniswapV3: contracts.LegoBook.call.getAddr(LEGOS_IDS.UNISWAP_V3).at(departments.LegoBook),
        UnderscoreLego: contracts.LegoBook.call.getAddr(LEGOS_IDS.UNDERSCORE).at(departments.LegoBook),
        FortyAcres: contracts.LegoBook.call.getAddr(LEGOS_IDS.FORTY_ACRES).at(departments.LegoBook),
        Wasabi: contracts.LegoBook.call.getAddr(LEGOS_IDS.WASABI).at(departments.LegoBook),
        Avantis: contracts.LegoBook.call.getAddr(LEGOS_IDS.AVANTIS).at(departments.LegoBook),
        SkyPsm: contracts.LegoBook.call.getAddr(LEGOS_IDS.SKY_PSM).at(departments.LegoBook),
        ExtraFi: contracts.LegoBook.call.getAddr(LEGOS_IDS.EXTRA_FI).at(departments.LegoBook),

        SwitchboardAlpha: contracts.Switchboard.call.getAddr(1n).at(departments.Switchboard),
        SwitchboardBravo: contracts.Switchboard.call.getAddr(2n).at(departments.Switchboard),
        SwitchboardCharlie: contracts.Switchboard.call.getAddr(3n).at(departments.Switchboard),
      }
    })

    this.addresses = {
      ...departments,
      ...children,
    }
  }

  addressResolver(name: string) {
    return this.addresses[name as ContractsNames]!
  }

  setWalletClient(walletClient: WalletClient) {
    this.walletClient = walletClient
    this.contracts = createSdk(this.publicClient, this.walletClient)
  }

  setPublicClient(publicClient: PublicClient) {
    this.publicClient = publicClient
    this.contracts = createSdk(this.publicClient, this.walletClient)
  }

  async multicall<T extends RequestCollection>(
    cb: (contracts: typeof CONTRACTS) => T,
    options: { blockNumber?: bigint } = {},
  ) {
    const request = cb(CONTRACTS)
    return query(this.publicClient, request, options, this.addressResolver)
  }

  async iterate<T>(
    cb: (contracts: typeof CONTRACTS) => {
      total: bigint
      getItem: GetItemCallFunction<T>
    },
    options: {
      blockNumber?: bigint
      firstIndex?: bigint
    } = {},
  ) {
    const { total, getItem } = cb(CONTRACTS)
    return iteratorQuery(this.publicClient, total, getItem, options, this.addressResolver)
  }

  async getSwapInstructionsAmountOut(payload: {
    tokenIn: Address
    tokenOut: Address
    amountIn: bigint
    slippage: bigint
    includeLegoIds?: bigint[]
  }) {
    return getSwapInstructionsAmountOut(this.publicClient, payload, this.addressResolver)
  }

  async getSwapInstructionsAmountIn(payload: {
    tokenIn: Address
    tokenOut: Address
    amountOut: bigint
    amountInAvailable: bigint
    slippage: bigint
    includeLegoIds?: bigint[]
  }) {
    return getSwapInstructionsAmountIn(this.publicClient, payload)
  }

  DEPARTMENT_IDS = DEPARTMENT_IDS

  LEGOS_IDS = LEGOS_IDS
}

export default Underscore
