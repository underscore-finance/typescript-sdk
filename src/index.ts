import { createPublicClient, http, PublicClient, WalletClient } from 'viem'
import { base } from 'viem/chains'

import createSdk, { SDK } from './contracts/sdk.js'

export * from './contracts/index.js'

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
}

export default Underscore
