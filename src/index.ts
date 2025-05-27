import { GetItemCallFunction, iteratorQuery, query, RequestCollection } from '@dappql/async'
import { Address, createPublicClient, http, PublicClient, WalletClient } from 'viem'
import { base, baseSepolia } from 'viem/chains'

import * as CONTRACTS from './contracts/index.js'
import * as LegoHelper from './contracts/LegoHelper.js'
import createSdk, { SDK } from './contracts/sdk.js'

export * from './contracts/index.js'

const TESTNET_ADDRESSES = {
  AddyRegistry: '0xa89a59E14333187829528C50eBAaE6EC12Bae95d',
  AgentFactory: '0x50d08c554b0F7F4784B7108103e586eccb522b8E',
  UserWalletTemplate: '0x5081a0ff1F3518aE7D3c6E5106CC820EB5d472a5',
  UserWalletConfigTemplate: '0xC12152418FDF2daE2A45C3D07AdFf9f6f1249BbA',
  AgentTemplate: '0xfd1255e086b0E045EfBFa9E3e99aE9A450BDc486',
  LegoRegistry: '0xf6a8bE55c84b94Fe071575EF52F095A23c282eea',
  OracleRegistry: '0x2c794b3864480fAfF791cD46400E061f818cE42f',
  PriceSheets: '0x155d0ECd672D7a1050d34eC0a1006d67823C3123',
  LegoHelper: '0x98dD9D8591D826E285052f23F450c8d702f07a18',
} as const

type DeepMutable<T> = {
  -readonly [P in keyof T]: T[P] extends object ? DeepMutable<T[P]> : T[P]
}

interface UnderscoreConfig {
  rpcUrl?: string
  publicClient?: PublicClient
  walletClient?: WalletClient
  isTestnet?: boolean
}

class Underscore {
  public publicClient: PublicClient
  public walletClient: WalletClient | undefined
  public contracts: SDK
  public isTestnet: boolean

  constructor(config?: UnderscoreConfig) {
    this.publicClient =
      config?.publicClient ||
      (createPublicClient({
        chain: config?.isTestnet ? baseSepolia : base,
        transport: http(config?.rpcUrl),
      }) as PublicClient)

    this.walletClient = config?.walletClient
    this.contracts = createSdk(this.publicClient, this.walletClient)
    this.isTestnet = config?.isTestnet ?? false
  }

  setWalletClient(walletClient: WalletClient) {
    this.walletClient = walletClient
    this.contracts = createSdk(this.publicClient, this.walletClient)
  }

  setPublicClient(publicClient: PublicClient) {
    this.publicClient = publicClient
    this.contracts = createSdk(this.publicClient, this.walletClient)
  }

  async getSwapInstructionsAmountOut(payload: {
    tokenIn: Address
    tokenOut: Address
    amountIn: bigint
    slippage: bigint
    includeLegoIds?: bigint[]
  }) {
    const { tokenIn, tokenOut, amountIn, slippage, includeLegoIds } = payload

    const instructions = await this.publicClient.simulateContract({
      address: this.LegoHelper.deployAddress!,
      abi: LegoHelper.abi,
      functionName: 'getRoutesAndSwapInstructionsAmountOut',
      args: [tokenIn, tokenOut, amountIn, slippage, includeLegoIds ?? []],
    })

    return instructions.result as DeepMutable<typeof instructions.result>
  }

  async getSwapInstructionsAmountIn(payload: {
    tokenIn: Address
    tokenOut: Address
    amountOut: bigint
    amountInAvailable: bigint
    slippage: bigint
    includeLegoIds?: bigint[]
  }) {
    const { tokenIn, tokenOut, amountOut, amountInAvailable, slippage, includeLegoIds } = payload

    const instructions = await this.publicClient.simulateContract({
      address: this.LegoHelper.deployAddress!,
      abi: LegoHelper.abi,
      functionName: 'getRoutesAndSwapInstructionsAmountIn',
      args: [tokenIn, tokenOut, amountOut, amountInAvailable, slippage, includeLegoIds ?? []],
    })

    return instructions.result as DeepMutable<typeof instructions.result>
  }

  get AddyRegistry() {
    const deployAddress = this.isTestnet ? TESTNET_ADDRESSES.AddyRegistry : CONTRACTS.AddyRegistry.deployAddress!
    return {
      ...this.contracts.AddyRegistry(deployAddress),
      deployAddress,
    }
  }

  /**
   * @deprecated Use `Registry` instead. This version is for legacy compatibility.
   */
  get AddyRegistry_v1() {
    return this.contracts.AddyRegistry_v1
  }

  /**
   * @deprecated Use `Registry` instead. This version is for legacy compatibility.
   */
  get AddyRegistry_v2() {
    return this.contracts.AddyRegistry_v2
  }

  get AgentFactory() {
    const deployAddress = this.isTestnet ? TESTNET_ADDRESSES.AgentFactory : CONTRACTS.AgentFactory.deployAddress!
    return {
      ...this.contracts.AgentFactory(deployAddress),
      deployAddress,
    }
  }

  /**
   * @deprecated Use `Factory` instead. This version is for legacy compatibility.
   */
  get AgentFactory_v2() {
    return this.contracts.AgentFactory_v2
  }

  /**
   * @deprecated Use `Factory` instead. This version is for legacy compatibility.
   */
  get AgentFactory_v1() {
    return this.contracts.AgentFactory_v1
  }

  get OracleRegistry() {
    const deployAddress = this.isTestnet ? TESTNET_ADDRESSES.OracleRegistry : CONTRACTS.OracleRegistry.deployAddress!
    return {
      ...this.contracts.OracleRegistry(deployAddress),
      deployAddress,
    }
  }

  get LegoRegistry() {
    const deployAddress = this.isTestnet ? TESTNET_ADDRESSES.LegoRegistry : CONTRACTS.LegoRegistry.deployAddress!
    return {
      ...this.contracts.LegoRegistry(deployAddress),
      deployAddress,
    }
  }

  get LegoHelper() {
    const deployAddress = this.isTestnet ? TESTNET_ADDRESSES.LegoHelper : LegoHelper.deployAddress!
    return {
      ...this.contracts.LegoHelper(deployAddress),
      deployAddress,
    }
  }

  get PriceSheets() {
    const deployAddress = this.isTestnet ? TESTNET_ADDRESSES.PriceSheets : CONTRACTS.PriceSheets.deployAddress!
    return {
      ...this.contracts.PriceSheets(deployAddress),
      deployAddress,
    }
  }

  get Agent() {
    return { at: (address: Address) => this.contracts.Agent(address) }
  }

  /**
   * @deprecated Use `Agent` instead. This version is for legacy compatibility.
   */
  get Agent_v1() {
    return { at: (address: Address) => this.contracts.Agent_v1(address) }
  }

  /**
   * @deprecated Use `Agent` instead. This version is for legacy compatibility.
   */
  get Agent_v2() {
    return { at: (address: Address) => this.contracts.Agent_v2(address) }
  }

  get UserWallet() {
    return { at: (address: Address) => this.contracts.UserWallet(address) }
  }

  /**
   * @deprecated Use `UserWallet` instead. This version is for legacy compatibility.
   */
  get UserWallet_v1() {
    return { at: (address: Address) => this.contracts.UserWallet_v1(address) }
  }

  /**
   * @deprecated Use `UserWallet` instead. This version is for legacy compatibility.
   */
  get UserWallet_v2() {
    return { at: (address: Address) => this.contracts.UserWallet_v2(address) }
  }

  get UserWalletConfig() {
    return { at: (address: Address) => this.contracts.UserWalletConfig(address) }
  }

  /**
   * @deprecated Use `UserWalletConfig` instead. This version is for legacy compatibility.
   */
  get UserWalletConfig_v1() {
    return { at: (address: Address) => this.contracts.UserWalletConfig_v1(address) }
  }

  /**
   * @deprecated Use `UserWalletConfig` instead. This version is for legacy compatibility.
   */
  get UserWalletConfig_v2() {
    return { at: (address: Address) => this.contracts.UserWalletConfig_v2(address) }
  }

  get ERC20() {
    return { at: (address: Address) => this.contracts.ERC20(address) }
  }

  get LegoCommon() {
    return { at: (address: Address) => this.contracts.LegoCommon(address) }
  }

  get LegoCredit() {
    return { at: (address: Address) => this.contracts.LegoCredit(address) }
  }

  get LegoDex() {
    return { at: (address: Address) => this.contracts.LegoDex(address) }
  }

  get LegoYield() {
    return { at: (address: Address) => this.contracts.LegoYield(address) }
  }

  get OracleParser() {
    return { at: (address: Address) => this.contracts.OracleParser(address) }
  }

  get addressResolver() {
    return (contractName: string) => {
      if (this.isTestnet) {
        const address = TESTNET_ADDRESSES[contractName as keyof typeof TESTNET_ADDRESSES]
        if (!address) {
          throw new Error(`Address for ${contractName} not found`)
        }
        return address!
      }
      return CONTRACTS[contractName as keyof typeof CONTRACTS].deployAddress! as `0x${string}`
    }
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
}

export default Underscore
