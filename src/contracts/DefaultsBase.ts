/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
/* @ts-nocheck */

import { singleQuery } from '@dappql/async'
import { PublicClient, WalletClient } from 'viem'

type ExtractArgs<T> = T extends (...args: infer P) => any ? P : never
type Address = `0x${string}`

export const abi = [
  {
    stateMutability: 'view',
    type: 'function',
    name: 'userWalletConfig',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'tuple',
        components: [
          {
            name: 'walletTemplate',
            type: 'address',
          },
          {
            name: 'configTemplate',
            type: 'address',
          },
          {
            name: 'trialAsset',
            type: 'address',
          },
          {
            name: 'trialAmount',
            type: 'uint256',
          },
          {
            name: 'numUserWalletsAllowed',
            type: 'uint256',
          },
          {
            name: 'enforceCreatorWhitelist',
            type: 'bool',
          },
          {
            name: 'minKeyActionTimeLock',
            type: 'uint256',
          },
          {
            name: 'maxKeyActionTimeLock',
            type: 'uint256',
          },
          {
            name: 'defaultStaleBlocks',
            type: 'uint256',
          },
          {
            name: 'depositRewardsAsset',
            type: 'address',
          },
          {
            name: 'txFees',
            type: 'tuple',
            components: [
              {
                name: 'swapFee',
                type: 'uint256',
              },
              {
                name: 'stableSwapFee',
                type: 'uint256',
              },
              {
                name: 'rewardsFee',
                type: 'uint256',
              },
            ],
          },
          {
            name: 'ambassadorRevShare',
            type: 'tuple',
            components: [
              {
                name: 'swapRatio',
                type: 'uint256',
              },
              {
                name: 'rewardsRatio',
                type: 'uint256',
              },
              {
                name: 'yieldRatio',
                type: 'uint256',
              },
            ],
          },
          {
            name: 'defaultYieldMaxIncrease',
            type: 'uint256',
          },
          {
            name: 'defaultYieldPerformanceFee',
            type: 'uint256',
          },
          {
            name: 'defaultYieldAmbassadorBonusRatio',
            type: 'uint256',
          },
          {
            name: 'defaultYieldBonusRatio',
            type: 'uint256',
          },
          {
            name: 'defaultYieldAltBonusAsset',
            type: 'address',
          },
          {
            name: 'lootClaimCoolOffPeriod',
            type: 'uint256',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'agentConfig',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'tuple',
        components: [
          {
            name: 'agentTemplate',
            type: 'address',
          },
          {
            name: 'numAgentsAllowed',
            type: 'uint256',
          },
          {
            name: 'enforceCreatorWhitelist',
            type: 'bool',
          },
          {
            name: 'startingAgent',
            type: 'address',
          },
          {
            name: 'startingAgentActivationLength',
            type: 'uint256',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'managerConfig',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'tuple',
        components: [
          {
            name: 'managerPeriod',
            type: 'uint256',
          },
          {
            name: 'managerActivationLength',
            type: 'uint256',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'payeeConfig',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'tuple',
        components: [
          {
            name: 'payeePeriod',
            type: 'uint256',
          },
          {
            name: 'payeeActivationLength',
            type: 'uint256',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'chequeConfig',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'tuple',
        components: [
          {
            name: 'maxNumActiveCheques',
            type: 'uint256',
          },
          {
            name: 'instantUsdThreshold',
            type: 'uint256',
          },
          {
            name: 'periodLength',
            type: 'uint256',
          },
          {
            name: 'expensiveDelayBlocks',
            type: 'uint256',
          },
          {
            name: 'defaultExpiryBlocks',
            type: 'uint256',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      {
        name: '_walletTemplate',
        type: 'address',
      },
      {
        name: '_configTemplate',
        type: 'address',
      },
      {
        name: '_agentTemplate',
        type: 'address',
      },
      {
        name: '_startingAgent',
        type: 'address',
      },
      {
        name: '_trialAsset',
        type: 'address',
      },
      {
        name: '_trialAmount',
        type: 'uint256',
      },
      {
        name: '_rewardsAsset',
        type: 'address',
      },
    ],
    outputs: [],
  },
] as const

export const deployAddress: Address | undefined = '0x33DF7433cAa93277F06561b8A3ceE1Fa324FbDe6'

export type Contract = {
  calls: {
    userWalletConfig: () => Promise<{
      walletTemplate: `0x${string}`
      configTemplate: `0x${string}`
      trialAsset: `0x${string}`
      trialAmount: bigint
      numUserWalletsAllowed: bigint
      enforceCreatorWhitelist: boolean
      minKeyActionTimeLock: bigint
      maxKeyActionTimeLock: bigint
      defaultStaleBlocks: bigint
      depositRewardsAsset: `0x${string}`
      txFees: { swapFee: bigint; stableSwapFee: bigint; rewardsFee: bigint }
      ambassadorRevShare: { swapRatio: bigint; rewardsRatio: bigint; yieldRatio: bigint }
      defaultYieldMaxIncrease: bigint
      defaultYieldPerformanceFee: bigint
      defaultYieldAmbassadorBonusRatio: bigint
      defaultYieldBonusRatio: bigint
      defaultYieldAltBonusAsset: `0x${string}`
      lootClaimCoolOffPeriod: bigint
    }>
    agentConfig: () => Promise<{
      agentTemplate: `0x${string}`
      numAgentsAllowed: bigint
      enforceCreatorWhitelist: boolean
      startingAgent: `0x${string}`
      startingAgentActivationLength: bigint
    }>
    managerConfig: () => Promise<{ managerPeriod: bigint; managerActivationLength: bigint }>
    payeeConfig: () => Promise<{ payeePeriod: bigint; payeeActivationLength: bigint }>
    chequeConfig: () => Promise<{
      maxNumActiveCheques: bigint
      instantUsdThreshold: bigint
      periodLength: bigint
      expensiveDelayBlocks: bigint
      defaultExpiryBlocks: bigint
    }>
  }
  mutations: {}
  events: {}
}

export type Calls = keyof Contract['calls']
export type Request<M extends Calls> = {
  contractName: 'DefaultsBase'
  method: M
  args: ExtractArgs<Contract['calls'][M]>
  address: Address | undefined
  deployAddress: Address | undefined
  defaultValue: Awaited<ReturnType<Contract['calls'][M]>> | undefined
  getAbi: () => typeof abi
  with: (options: { contractAddress?: Address; defaultValue?: Awaited<ReturnType<Contract['calls'][M]>> }) => Request<M>
  defaultTo: (defaultValue: Awaited<ReturnType<Contract['calls'][M]>>) => Request<M>
  at: (address: Address) => Request<M>
}
export type CallReturn<M extends Calls> = NonNullable<Request<M>['defaultValue']>

function getRequest<M extends Calls>(
  method: M,
  args: ExtractArgs<Contract['calls'][M]>,
  contractAddressOrOptions?:
    | Address
    | {
        contractAddress?: Address
        defaultValue?: Awaited<ReturnType<Contract['calls'][M]>>
      },
): Request<M> {
  const address =
    typeof contractAddressOrOptions === 'string' ? contractAddressOrOptions : contractAddressOrOptions?.contractAddress
  const defaultValue = typeof contractAddressOrOptions === 'string' ? undefined : contractAddressOrOptions?.defaultValue

  const call = {
    contractName: 'DefaultsBase' as const,
    method,
    args,
    address,
    deployAddress,
    defaultValue,
    getAbi: () => abi,
    with: (options: { contractAddress?: Address; defaultValue?: Awaited<ReturnType<Contract['calls'][M]>> }) => {
      call.address = options.contractAddress
      call.defaultValue = options.defaultValue
      return call as Request<M>
    },
    defaultTo: (defaultValue: Awaited<ReturnType<Contract['calls'][M]>>) => {
      call.defaultValue = defaultValue
      return call as Request<M>
    },
    at: (address: Address) => {
      call.address = address
      return call as Request<M>
    },
  } as Request<M>

  return call
}

type CallType = {
  [K in Calls]: (...args: ExtractArgs<Contract['calls'][K]>) => ReturnType<typeof getRequest<K>>
}

export const call: CallType = {
  userWalletConfig: (...args: ExtractArgs<Contract['calls']['userWalletConfig']>) =>
    getRequest('userWalletConfig', args),
  agentConfig: (...args: ExtractArgs<Contract['calls']['agentConfig']>) => getRequest('agentConfig', args),
  managerConfig: (...args: ExtractArgs<Contract['calls']['managerConfig']>) => getRequest('managerConfig', args),
  payeeConfig: (...args: ExtractArgs<Contract['calls']['payeeConfig']>) => getRequest('payeeConfig', args),
  chequeConfig: (...args: ExtractArgs<Contract['calls']['chequeConfig']>) => getRequest('chequeConfig', args),
}

export type SDK = {
  deployAddress: Address | undefined
  abi: typeof abi
  userWalletConfig: (
    ...args: ExtractArgs<Contract['calls']['userWalletConfig']>
  ) => Promise<CallReturn<'userWalletConfig'>>
  agentConfig: (...args: ExtractArgs<Contract['calls']['agentConfig']>) => Promise<CallReturn<'agentConfig'>>
  managerConfig: (...args: ExtractArgs<Contract['calls']['managerConfig']>) => Promise<CallReturn<'managerConfig'>>
  payeeConfig: (...args: ExtractArgs<Contract['calls']['payeeConfig']>) => Promise<CallReturn<'payeeConfig'>>
  chequeConfig: (...args: ExtractArgs<Contract['calls']['chequeConfig']>) => Promise<CallReturn<'chequeConfig'>>
}

export function toSdk(publicClient?: PublicClient, walletClient?: WalletClient): SDK {
  return {
    deployAddress,
    abi,
    // Queries
    userWalletConfig: (...args: ExtractArgs<Contract['calls']['userWalletConfig']>) =>
      singleQuery(publicClient!, call.userWalletConfig(...args)) as Promise<CallReturn<'userWalletConfig'>>,
    agentConfig: (...args: ExtractArgs<Contract['calls']['agentConfig']>) =>
      singleQuery(publicClient!, call.agentConfig(...args)) as Promise<CallReturn<'agentConfig'>>,
    managerConfig: (...args: ExtractArgs<Contract['calls']['managerConfig']>) =>
      singleQuery(publicClient!, call.managerConfig(...args)) as Promise<CallReturn<'managerConfig'>>,
    payeeConfig: (...args: ExtractArgs<Contract['calls']['payeeConfig']>) =>
      singleQuery(publicClient!, call.payeeConfig(...args)) as Promise<CallReturn<'payeeConfig'>>,
    chequeConfig: (...args: ExtractArgs<Contract['calls']['chequeConfig']>) =>
      singleQuery(publicClient!, call.chequeConfig(...args)) as Promise<CallReturn<'chequeConfig'>>,

    // Mutations
  }
}
