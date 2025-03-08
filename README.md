# Underscore Smart Contracts SDK

A TypeScript SDK for interacting with Underscore's AI-driven smart contracts on Base network. Underscore enables trustless AI agents to operate on your behalf in DeFi—securely, transparently, and within boundaries you define.

## Key Features

- **Non-Custodial**: Retain full control of your assets; only you can transfer or withdraw funds
- **Granular Control**: Define precise boundaries for AI agent operations
- **Rule-Based Autonomy**: Smart contracts strictly enforce your parameters
- **Minimal Trust**: Built on open-source, immutable code
- **Extensible**: Add new DeFi protocol integrations without migrating funds
- **Auditability**: Fully transparent, verifiable code

## Installation

```bash
npm install @underscore-finance/sdk viem
# or
yarn add @underscore-finance/sdk viem
```

## Quick Start

```typescript
import Underscore from '@underscore-finance/sdk'
import { createWalletClient, custom } from 'viem'
import { base } from 'viem/chains'

// Initialize SDK = Read mode only
const underscore = new Underscore()

// For AI agent operations, initialize with a wallet client
const underscore = new Underscore({
  walletClient: createWalletClient({
    chain: base,
    transport: custom(window.ethereum),
  }),
})

// Create an AI Wallet
const createWallet = async (owner: string, aiAgent: string) => {
  return await underscore.contracts.AgentFactory.createWalletClient(
    owner, // Your wallet address
    aiAgent, // AI agent's address
  )
}

// Configure AI permissions
const configureAgent = async (agent: string, allowedAssets: string[]) => {
  for (const asset of allowedAssets) {
    await underscore.contracts.WalletConfig('0xWalletAddress').addAssetForAgent(agent, asset)
  }
}
```

## Core Components

### AI Agent System

- `AgentFactory` - Deploy and manage AI wallets
- `AgentTemplate` - Access to AI agent templates
- `WalletConfig` - Set AI agent permissions and rules
- `WalletFunds` - Manage wallet assets
- `LegoHelper` - Set of helper functions to interact with legos
- `OracleRegistry` - Registry for price feeds

### Protocol Integrations ("Legos")

Modular DeFi integrations your AI can interact with:

- `LegoAaveV3` - Aave V3 lending/borrowing
- `LegoCompoundV3` - Compound V3 operations
- `LegoUniswapV3` - Uniswap V3 swaps
- `LegoCurve` - Curve pool interactions
- And many more protocol integrations

### Price Feed Systems

Price oracles your AI can reference:

- `ChainlinkFeeds` - Chainlink oracle data
- `PythFeeds` - Pyth Network feeds
- `StorkFeeds` - Stork protocol data

## Use Cases

1. **Autonomous Yield Farming**

   - AI monitors lending rates across protocols
   - Automatically shifts funds to optimal yields
   - Operates within your risk parameters

2. **Smart Portfolio Rebalancing**

   - AI maintains your desired asset ratios
   - Executes trades based on market conditions
   - Respects your defined boundaries

3. **Risk Management**
   - AI monitors on-chain risk indicators
   - Automatically adjusts positions
   - Follows your pre-set safety rules

## Configuration

```typescript
interface UnderscoreConfig {
  rpcUrl?: string // Custom RPC URL for Base network
  publicClient?: PublicClient // Custom viem public client
  walletClient?: WalletClient // Required for transactions
}
```

## Best Practices

1. Always initialize with a wallet client for AI agent operations
2. Use custom RPC URLs in production
3. Implement comprehensive error handling
4. Set clear boundaries for AI agent actions

## Support

- GitHub Issues: Technical support and bug reports
- Discord Community: [Join our Discord](https://discord.gg/Y6PWmndNaC)
- Developer Support: [Contact our team](https://underscore.fi)

## License

Business Source License 1.1 - This SDK is provided under a commercial license. All rights reserved. Unauthorized copying, modification, distribution, or use of this software is strictly prohibited without a valid license agreement.

Built by the team at [Hightop](http://hightop.com) + [Ripe](http://ripe.finance)
