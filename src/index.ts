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

  constructor(config?: UnderscoreConfig) {
    this.publicClient =
      config?.publicClient ||
      (createPublicClient({
        chain: base,
        transport: http(config?.rpcUrl),
      }) as PublicClient)

    this.walletClient = config?.walletClient
    this.contracts = createSdk(this.publicClient, this.walletClient)
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
    return query(this.publicClient, request, options)
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
    return iteratorQuery(this.publicClient, total, getItem, options)
  }

  async getSwapInstructionsAmountOut(payload: {
    tokenIn: Address
    tokenOut: Address
    amountIn: bigint
    slippage: bigint
    includeLegoIds?: bigint[]
  }) {
    return getSwapInstructionsAmountOut(this.publicClient, payload)
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
