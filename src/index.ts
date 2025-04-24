import { Address, createPublicClient, http, PublicClient, WalletClient } from 'viem'
import { base } from 'viem/chains'

import * as LegoHelper from './contracts/LegoHelper.js'
import createSdk, { SDK } from './contracts/sdk.js'

export * from './contracts/index.js'

type DeepMutable<T> = {
  -readonly [P in keyof T]: T[P] extends object ? DeepMutable<T[P]> : T[P]
}

interface UnderscoreConfig {
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

  async getSwapInstructionsAmountOut(payload: {
    tokenIn: Address
    tokenOut: Address
    amountIn: bigint
    slippage: bigint
    includeLegoIds?: bigint[]
  }) {
    const { tokenIn, tokenOut, amountIn, slippage, includeLegoIds } = payload

    const instructions = await this.publicClient.simulateContract({
      address: LegoHelper.deployAddress!,
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
      address: LegoHelper.deployAddress!,
      abi: LegoHelper.abi,
      functionName: 'getRoutesAndSwapInstructionsAmountIn',
      args: [tokenIn, tokenOut, amountOut, amountInAvailable, slippage, includeLegoIds ?? []],
    })

    return instructions.result as DeepMutable<typeof instructions.result>
  }

  get Factory() {
    return this.contracts.AgentFactory
  }

  get OracleRegistry() {
    return this.contracts.OracleRegistry
  }

  get LegoRegistry() {
    return this.contracts.LegoRegistry
  }

  get LegoHelper() {
    return this.contracts.LegoHelper
  }

  get PriceSheets() {
    return this.contracts.PriceSheets
  }

  get Agent() {
    return { at: (address: Address) => this.contracts.Agent(address) }
  }

  get UserWallet() {
    return { at: (address: Address) => this.contracts.UserWallet(address) }
  }

  get UserWalletConfig() {
    return { at: (address: Address) => this.contracts.UserWalletConfig(address) }
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
}

export default Underscore
