import { GetItemCallFunction, iteratorQuery, query, RequestCollection } from '@dappql/async'
import { createPublicClient, http, PublicClient, WalletClient } from 'viem'
import { base } from 'viem/chains'

import * as CONTRACTS from './contracts/index.js'
import getContracts, { ContractsCollection } from './getContracts.js'

export * from './contracts/index.js'

export type Contracts = typeof CONTRACTS
export type ContractsNames = keyof typeof CONTRACTS

interface UnderscoreConfig {
  rpcUrl?: string
  publicClient?: PublicClient
  walletClient?: WalletClient
}

class Underscore {
  public publicClient: PublicClient
  public walletClient: WalletClient | undefined
  public contracts: ContractsCollection

  constructor(config?: UnderscoreConfig) {
    this.publicClient =
      config?.publicClient ||
      (createPublicClient({
        chain: base,
        transport: http(config?.rpcUrl),
      }) as PublicClient)

    this.walletClient = config?.walletClient
    this.contracts = getContracts(this.publicClient, this.walletClient)
  }

  setWalletClient(walletClient: WalletClient) {
    this.walletClient = walletClient
    this.contracts = getContracts(this.publicClient, this.walletClient)
  }

  setPublicClient(publicClient: PublicClient) {
    this.publicClient = publicClient
    this.contracts = getContracts(this.publicClient, this.walletClient)
  }

  async multicall<T extends RequestCollection>(
    cb: (contracts: Contracts) => T,
    options: { blockNumber?: bigint } = {},
  ) {
    const request = cb(CONTRACTS)
    return query(this.publicClient, request, options)
  }

  async iterate<T>(
    cb: (contracts: Contracts) => {
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
}

export default Underscore
