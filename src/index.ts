import { GetItemCallFunction, iteratorQuery, query, RequestCollection } from '@dappql/async'
import { Address, createPublicClient, http, PublicClient, WalletClient } from 'viem'
import { base } from 'viem/chains'

import * as CONTRACTS from './contracts/index.js'
import createSdk, { SDK } from './contracts/sdk.js'
import { getSwapInstructionsAmountIn, getSwapInstructionsAmountOut } from './getSwapInstructions.js'
export * from './contracts/index.js'

export type Contracts = SDK
export type ContractsNames = keyof typeof CONTRACTS

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

  async multicall<T extends RequestCollection>(cb: (contracts: SDK) => T, options: { blockNumber?: bigint } = {}) {
    const request = cb(this.contracts)
    return query(this.publicClient, request, options)
  }

  async iterate<T>(
    cb: (contracts: SDK) => {
      total: bigint
      getItem: GetItemCallFunction<T>
    },
    options: {
      blockNumber?: bigint
      firstIndex?: bigint
    } = {},
  ) {
    const { total, getItem } = cb(this.contracts)
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
}

export default Underscore
