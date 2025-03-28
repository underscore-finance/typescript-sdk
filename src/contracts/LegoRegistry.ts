/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
/* @ts-nocheck */

import { singleQuery, mutate } from '@dappql/async'
import { PublicClient, WalletClient } from 'viem'

type ExtractArgs<T> = T extends (...args: infer P) => any ? P : never
type Address = `0x${string}`

export const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'addr',
        type: 'address',
      },
      {
        indexed: false,
        name: 'legoId',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'description',
        type: 'string',
      },
      {
        indexed: false,
        name: 'legoType',
        type: 'uint256',
      },
    ],
    name: 'NewLegoRegistered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'newAddr',
        type: 'address',
      },
      {
        indexed: true,
        name: 'prevAddr',
        type: 'address',
      },
      {
        indexed: false,
        name: 'legoId',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'version',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'description',
        type: 'string',
      },
      {
        indexed: false,
        name: 'legoType',
        type: 'uint256',
      },
    ],
    name: 'LegoAddrUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'prevAddr',
        type: 'address',
      },
      {
        indexed: false,
        name: 'legoId',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'version',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'description',
        type: 'string',
      },
      {
        indexed: false,
        name: 'legoType',
        type: 'uint256',
      },
    ],
    name: 'LegoAddrDisabled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'helperAddr',
        type: 'address',
      },
    ],
    name: 'LegoHelperSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'LocalGovernorSet',
    type: 'event',
  },
  {
    inputs: [
      {
        name: '_address',
        type: 'address',
      },
    ],
    name: 'isGovernor',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_newGovernor',
        type: 'address',
      },
    ],
    name: 'isValidLocalGovernor',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_newGovernor',
        type: 'address',
      },
    ],
    name: 'setLocalGovernor',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'localGovernor',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_addr',
        type: 'address',
      },
    ],
    name: 'isValidNewLegoAddr',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_addr',
        type: 'address',
      },
      {
        name: '_description',
        type: 'string',
      },
      {
        name: '_legoType',
        type: 'uint256',
      },
    ],
    name: 'registerNewLego',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_legoId',
        type: 'uint256',
      },
      {
        name: '_newAddr',
        type: 'address',
      },
    ],
    name: 'isValidLegoUpdate',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_legoId',
        type: 'uint256',
      },
      {
        name: '_newAddr',
        type: 'address',
      },
    ],
    name: 'updateLegoAddr',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_legoId',
        type: 'uint256',
      },
    ],
    name: 'isValidLegoDisable',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_legoId',
        type: 'uint256',
      },
    ],
    name: 'disableLegoAddr',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_addr',
        type: 'address',
      },
    ],
    name: 'isValidLegoAddr',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_legoId',
        type: 'uint256',
      },
    ],
    name: 'isValidLegoId',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_addr',
        type: 'address',
      },
    ],
    name: 'getLegoId',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_legoId',
        type: 'uint256',
      },
    ],
    name: 'getLegoAddr',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_legoId',
        type: 'uint256',
      },
    ],
    name: 'getLegoInfo',
    outputs: [
      {
        components: [
          {
            name: 'addr',
            type: 'address',
          },
          {
            name: 'version',
            type: 'uint256',
          },
          {
            name: 'lastModified',
            type: 'uint256',
          },
          {
            name: 'description',
            type: 'string',
          },
          {
            name: 'legoType',
            type: 'uint256',
          },
        ],
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_legoId',
        type: 'uint256',
      },
    ],
    name: 'getLegoDescription',
    outputs: [
      {
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getNumLegos',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLastLegoAddr',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLastLegoId',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_vaultToken',
        type: 'address',
      },
    ],
    name: 'getUnderlyingAsset',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_user',
        type: 'address',
      },
      {
        name: '_asset',
        type: 'address',
      },
    ],
    name: 'getUnderlyingForUser',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_helperAddr',
        type: 'address',
      },
    ],
    name: 'isValidLegoHelper',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_helperAddr',
        type: 'address',
      },
    ],
    name: 'setLegoHelper',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'legoHelper',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'arg0',
        type: 'uint256',
      },
    ],
    name: 'legoInfo',
    outputs: [
      {
        components: [
          {
            name: 'addr',
            type: 'address',
          },
          {
            name: 'version',
            type: 'uint256',
          },
          {
            name: 'lastModified',
            type: 'uint256',
          },
          {
            name: 'description',
            type: 'string',
          },
          {
            name: 'legoType',
            type: 'uint256',
          },
        ],
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'arg0',
        type: 'address',
      },
    ],
    name: 'legoAddrToId',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'numLegos',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ADDY_REGISTRY',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_addyRegistry',
        type: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
] as const

export const deployAddress: Address | undefined = '0x590504539913411CeF7fc1b3Fa49b06FE970c759'

export type Contract = {
  calls: {
    isGovernor: (address: `0x${string}`) => Promise<boolean>
    isValidLocalGovernor: (newGovernor: `0x${string}`) => Promise<boolean>
    localGovernor: () => Promise<`0x${string}`>
    isValidNewLegoAddr: (addr: `0x${string}`) => Promise<boolean>
    isValidLegoUpdate: (legoId: bigint, newAddr: `0x${string}`) => Promise<boolean>
    isValidLegoDisable: (legoId: bigint) => Promise<boolean>
    isValidLegoAddr: (addr: `0x${string}`) => Promise<boolean>
    isValidLegoId: (legoId: bigint) => Promise<boolean>
    getLegoId: (addr: `0x${string}`) => Promise<bigint>
    getLegoAddr: (legoId: bigint) => Promise<`0x${string}`>
    getLegoInfo: (
      legoId: bigint,
    ) => Promise<{ addr: `0x${string}`; version: bigint; lastModified: bigint; description: string; legoType: bigint }>
    getLegoDescription: (legoId: bigint) => Promise<string>
    getNumLegos: () => Promise<bigint>
    getLastLegoAddr: () => Promise<`0x${string}`>
    getLastLegoId: () => Promise<bigint>
    getUnderlyingAsset: (vaultToken: `0x${string}`) => Promise<`0x${string}`>
    getUnderlyingForUser: (user: `0x${string}`, asset: `0x${string}`) => Promise<bigint>
    isValidLegoHelper: (helperAddr: `0x${string}`) => Promise<boolean>
    legoHelper: () => Promise<`0x${string}`>
    legoInfo: (
      arg0: bigint,
    ) => Promise<{ addr: `0x${string}`; version: bigint; lastModified: bigint; description: string; legoType: bigint }>
    legoAddrToId: (arg0: `0x${string}`) => Promise<bigint>
    numLegos: () => Promise<bigint>
    ADDY_REGISTRY: () => Promise<`0x${string}`>
  }
  mutations: {
    setLocalGovernor: (newGovernor: `0x${string}`) => Promise<boolean>
    registerNewLego: (addr: `0x${string}`, description: string, legoType: bigint) => Promise<bigint>
    updateLegoAddr: (legoId: bigint, newAddr: `0x${string}`) => Promise<boolean>
    disableLegoAddr: (legoId: bigint) => Promise<boolean>
    setLegoHelper: (helperAddr: `0x${string}`) => Promise<boolean>
  }
  events: {
    NewLegoRegistered: (addr: `0x${string}`, legoId: bigint, description: string, legoType: bigint) => Promise<void>
    LegoAddrUpdated: (
      newAddr: `0x${string}`,
      prevAddr: `0x${string}`,
      legoId: bigint,
      version: bigint,
      description: string,
      legoType: bigint,
    ) => Promise<void>
    LegoAddrDisabled: (
      prevAddr: `0x${string}`,
      legoId: bigint,
      version: bigint,
      description: string,
      legoType: bigint,
    ) => Promise<void>
    LegoHelperSet: (helperAddr: `0x${string}`) => Promise<void>
    LocalGovernorSet: (addr: `0x${string}`) => Promise<void>
  }
}

export type Calls = keyof Contract['calls']
export type Request<M extends Calls> = {
  contractName: 'LegoRegistry'
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
    contractName: 'LegoRegistry' as const,
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
  isGovernor: (...args: ExtractArgs<Contract['calls']['isGovernor']>) => getRequest('isGovernor', args),
  isValidLocalGovernor: (...args: ExtractArgs<Contract['calls']['isValidLocalGovernor']>) =>
    getRequest('isValidLocalGovernor', args),
  localGovernor: (...args: ExtractArgs<Contract['calls']['localGovernor']>) => getRequest('localGovernor', args),
  isValidNewLegoAddr: (...args: ExtractArgs<Contract['calls']['isValidNewLegoAddr']>) =>
    getRequest('isValidNewLegoAddr', args),
  isValidLegoUpdate: (...args: ExtractArgs<Contract['calls']['isValidLegoUpdate']>) =>
    getRequest('isValidLegoUpdate', args),
  isValidLegoDisable: (...args: ExtractArgs<Contract['calls']['isValidLegoDisable']>) =>
    getRequest('isValidLegoDisable', args),
  isValidLegoAddr: (...args: ExtractArgs<Contract['calls']['isValidLegoAddr']>) => getRequest('isValidLegoAddr', args),
  isValidLegoId: (...args: ExtractArgs<Contract['calls']['isValidLegoId']>) => getRequest('isValidLegoId', args),
  getLegoId: (...args: ExtractArgs<Contract['calls']['getLegoId']>) => getRequest('getLegoId', args),
  getLegoAddr: (...args: ExtractArgs<Contract['calls']['getLegoAddr']>) => getRequest('getLegoAddr', args),
  getLegoInfo: (...args: ExtractArgs<Contract['calls']['getLegoInfo']>) => getRequest('getLegoInfo', args),
  getLegoDescription: (...args: ExtractArgs<Contract['calls']['getLegoDescription']>) =>
    getRequest('getLegoDescription', args),
  getNumLegos: (...args: ExtractArgs<Contract['calls']['getNumLegos']>) => getRequest('getNumLegos', args),
  getLastLegoAddr: (...args: ExtractArgs<Contract['calls']['getLastLegoAddr']>) => getRequest('getLastLegoAddr', args),
  getLastLegoId: (...args: ExtractArgs<Contract['calls']['getLastLegoId']>) => getRequest('getLastLegoId', args),
  getUnderlyingAsset: (...args: ExtractArgs<Contract['calls']['getUnderlyingAsset']>) =>
    getRequest('getUnderlyingAsset', args),
  getUnderlyingForUser: (...args: ExtractArgs<Contract['calls']['getUnderlyingForUser']>) =>
    getRequest('getUnderlyingForUser', args),
  isValidLegoHelper: (...args: ExtractArgs<Contract['calls']['isValidLegoHelper']>) =>
    getRequest('isValidLegoHelper', args),
  legoHelper: (...args: ExtractArgs<Contract['calls']['legoHelper']>) => getRequest('legoHelper', args),
  legoInfo: (...args: ExtractArgs<Contract['calls']['legoInfo']>) => getRequest('legoInfo', args),
  legoAddrToId: (...args: ExtractArgs<Contract['calls']['legoAddrToId']>) => getRequest('legoAddrToId', args),
  numLegos: (...args: ExtractArgs<Contract['calls']['numLegos']>) => getRequest('numLegos', args),
  ADDY_REGISTRY: (...args: ExtractArgs<Contract['calls']['ADDY_REGISTRY']>) => getRequest('ADDY_REGISTRY', args),
}

export type Mutations = keyof Contract['mutations']
function getMutation<M extends Mutations>(functionName: M) {
  return {
    contractName: 'LegoRegistry' as const,
    functionName,
    deployAddress,
    argsType: undefined as ExtractArgs<Contract['mutations'][M]> | undefined,
    getAbi: () => abi,
  }
}

export const mutation: {
  [K in Mutations]: {
    contractName: 'LegoRegistry'
    deployAddress: Address | undefined
    getAbi: () => typeof abi
    functionName: K
    argsType: ExtractArgs<Contract['mutations'][K]> | undefined
  }
} = {
  setLocalGovernor: getMutation('setLocalGovernor'),
  registerNewLego: getMutation('registerNewLego'),
  updateLegoAddr: getMutation('updateLegoAddr'),
  disableLegoAddr: getMutation('disableLegoAddr'),
  setLegoHelper: getMutation('setLegoHelper'),
}

export type SDK = {
  isGovernor: (...args: ExtractArgs<Contract['calls']['isGovernor']>) => Promise<CallReturn<'isGovernor'>>
  isValidLocalGovernor: (
    ...args: ExtractArgs<Contract['calls']['isValidLocalGovernor']>
  ) => Promise<CallReturn<'isValidLocalGovernor'>>
  localGovernor: (...args: ExtractArgs<Contract['calls']['localGovernor']>) => Promise<CallReturn<'localGovernor'>>
  isValidNewLegoAddr: (
    ...args: ExtractArgs<Contract['calls']['isValidNewLegoAddr']>
  ) => Promise<CallReturn<'isValidNewLegoAddr'>>
  isValidLegoUpdate: (
    ...args: ExtractArgs<Contract['calls']['isValidLegoUpdate']>
  ) => Promise<CallReturn<'isValidLegoUpdate'>>
  isValidLegoDisable: (
    ...args: ExtractArgs<Contract['calls']['isValidLegoDisable']>
  ) => Promise<CallReturn<'isValidLegoDisable'>>
  isValidLegoAddr: (
    ...args: ExtractArgs<Contract['calls']['isValidLegoAddr']>
  ) => Promise<CallReturn<'isValidLegoAddr'>>
  isValidLegoId: (...args: ExtractArgs<Contract['calls']['isValidLegoId']>) => Promise<CallReturn<'isValidLegoId'>>
  getLegoId: (...args: ExtractArgs<Contract['calls']['getLegoId']>) => Promise<CallReturn<'getLegoId'>>
  getLegoAddr: (...args: ExtractArgs<Contract['calls']['getLegoAddr']>) => Promise<CallReturn<'getLegoAddr'>>
  getLegoInfo: (...args: ExtractArgs<Contract['calls']['getLegoInfo']>) => Promise<CallReturn<'getLegoInfo'>>
  getLegoDescription: (
    ...args: ExtractArgs<Contract['calls']['getLegoDescription']>
  ) => Promise<CallReturn<'getLegoDescription'>>
  getNumLegos: (...args: ExtractArgs<Contract['calls']['getNumLegos']>) => Promise<CallReturn<'getNumLegos'>>
  getLastLegoAddr: (
    ...args: ExtractArgs<Contract['calls']['getLastLegoAddr']>
  ) => Promise<CallReturn<'getLastLegoAddr'>>
  getLastLegoId: (...args: ExtractArgs<Contract['calls']['getLastLegoId']>) => Promise<CallReturn<'getLastLegoId'>>
  getUnderlyingAsset: (
    ...args: ExtractArgs<Contract['calls']['getUnderlyingAsset']>
  ) => Promise<CallReturn<'getUnderlyingAsset'>>
  getUnderlyingForUser: (
    ...args: ExtractArgs<Contract['calls']['getUnderlyingForUser']>
  ) => Promise<CallReturn<'getUnderlyingForUser'>>
  isValidLegoHelper: (
    ...args: ExtractArgs<Contract['calls']['isValidLegoHelper']>
  ) => Promise<CallReturn<'isValidLegoHelper'>>
  legoHelper: (...args: ExtractArgs<Contract['calls']['legoHelper']>) => Promise<CallReturn<'legoHelper'>>
  legoInfo: (...args: ExtractArgs<Contract['calls']['legoInfo']>) => Promise<CallReturn<'legoInfo'>>
  legoAddrToId: (...args: ExtractArgs<Contract['calls']['legoAddrToId']>) => Promise<CallReturn<'legoAddrToId'>>
  numLegos: (...args: ExtractArgs<Contract['calls']['numLegos']>) => Promise<CallReturn<'numLegos'>>
  ADDY_REGISTRY: (...args: ExtractArgs<Contract['calls']['ADDY_REGISTRY']>) => Promise<CallReturn<'ADDY_REGISTRY'>>
  setLocalGovernor: (...args: ExtractArgs<Contract['mutations']['setLocalGovernor']>) => Promise<Address>
  registerNewLego: (...args: ExtractArgs<Contract['mutations']['registerNewLego']>) => Promise<Address>
  updateLegoAddr: (...args: ExtractArgs<Contract['mutations']['updateLegoAddr']>) => Promise<Address>
  disableLegoAddr: (...args: ExtractArgs<Contract['mutations']['disableLegoAddr']>) => Promise<Address>
  setLegoHelper: (...args: ExtractArgs<Contract['mutations']['setLegoHelper']>) => Promise<Address>
}

export function toSdk(publicClient?: PublicClient, walletClient?: WalletClient): SDK {
  return {
    // Queries
    isGovernor: (...args: ExtractArgs<Contract['calls']['isGovernor']>) =>
      singleQuery(publicClient!, call.isGovernor(...args)) as Promise<CallReturn<'isGovernor'>>,
    isValidLocalGovernor: (...args: ExtractArgs<Contract['calls']['isValidLocalGovernor']>) =>
      singleQuery(publicClient!, call.isValidLocalGovernor(...args)) as Promise<CallReturn<'isValidLocalGovernor'>>,
    localGovernor: (...args: ExtractArgs<Contract['calls']['localGovernor']>) =>
      singleQuery(publicClient!, call.localGovernor(...args)) as Promise<CallReturn<'localGovernor'>>,
    isValidNewLegoAddr: (...args: ExtractArgs<Contract['calls']['isValidNewLegoAddr']>) =>
      singleQuery(publicClient!, call.isValidNewLegoAddr(...args)) as Promise<CallReturn<'isValidNewLegoAddr'>>,
    isValidLegoUpdate: (...args: ExtractArgs<Contract['calls']['isValidLegoUpdate']>) =>
      singleQuery(publicClient!, call.isValidLegoUpdate(...args)) as Promise<CallReturn<'isValidLegoUpdate'>>,
    isValidLegoDisable: (...args: ExtractArgs<Contract['calls']['isValidLegoDisable']>) =>
      singleQuery(publicClient!, call.isValidLegoDisable(...args)) as Promise<CallReturn<'isValidLegoDisable'>>,
    isValidLegoAddr: (...args: ExtractArgs<Contract['calls']['isValidLegoAddr']>) =>
      singleQuery(publicClient!, call.isValidLegoAddr(...args)) as Promise<CallReturn<'isValidLegoAddr'>>,
    isValidLegoId: (...args: ExtractArgs<Contract['calls']['isValidLegoId']>) =>
      singleQuery(publicClient!, call.isValidLegoId(...args)) as Promise<CallReturn<'isValidLegoId'>>,
    getLegoId: (...args: ExtractArgs<Contract['calls']['getLegoId']>) =>
      singleQuery(publicClient!, call.getLegoId(...args)) as Promise<CallReturn<'getLegoId'>>,
    getLegoAddr: (...args: ExtractArgs<Contract['calls']['getLegoAddr']>) =>
      singleQuery(publicClient!, call.getLegoAddr(...args)) as Promise<CallReturn<'getLegoAddr'>>,
    getLegoInfo: (...args: ExtractArgs<Contract['calls']['getLegoInfo']>) =>
      singleQuery(publicClient!, call.getLegoInfo(...args)) as Promise<CallReturn<'getLegoInfo'>>,
    getLegoDescription: (...args: ExtractArgs<Contract['calls']['getLegoDescription']>) =>
      singleQuery(publicClient!, call.getLegoDescription(...args)) as Promise<CallReturn<'getLegoDescription'>>,
    getNumLegos: (...args: ExtractArgs<Contract['calls']['getNumLegos']>) =>
      singleQuery(publicClient!, call.getNumLegos(...args)) as Promise<CallReturn<'getNumLegos'>>,
    getLastLegoAddr: (...args: ExtractArgs<Contract['calls']['getLastLegoAddr']>) =>
      singleQuery(publicClient!, call.getLastLegoAddr(...args)) as Promise<CallReturn<'getLastLegoAddr'>>,
    getLastLegoId: (...args: ExtractArgs<Contract['calls']['getLastLegoId']>) =>
      singleQuery(publicClient!, call.getLastLegoId(...args)) as Promise<CallReturn<'getLastLegoId'>>,
    getUnderlyingAsset: (...args: ExtractArgs<Contract['calls']['getUnderlyingAsset']>) =>
      singleQuery(publicClient!, call.getUnderlyingAsset(...args)) as Promise<CallReturn<'getUnderlyingAsset'>>,
    getUnderlyingForUser: (...args: ExtractArgs<Contract['calls']['getUnderlyingForUser']>) =>
      singleQuery(publicClient!, call.getUnderlyingForUser(...args)) as Promise<CallReturn<'getUnderlyingForUser'>>,
    isValidLegoHelper: (...args: ExtractArgs<Contract['calls']['isValidLegoHelper']>) =>
      singleQuery(publicClient!, call.isValidLegoHelper(...args)) as Promise<CallReturn<'isValidLegoHelper'>>,
    legoHelper: (...args: ExtractArgs<Contract['calls']['legoHelper']>) =>
      singleQuery(publicClient!, call.legoHelper(...args)) as Promise<CallReturn<'legoHelper'>>,
    legoInfo: (...args: ExtractArgs<Contract['calls']['legoInfo']>) =>
      singleQuery(publicClient!, call.legoInfo(...args)) as Promise<CallReturn<'legoInfo'>>,
    legoAddrToId: (...args: ExtractArgs<Contract['calls']['legoAddrToId']>) =>
      singleQuery(publicClient!, call.legoAddrToId(...args)) as Promise<CallReturn<'legoAddrToId'>>,
    numLegos: (...args: ExtractArgs<Contract['calls']['numLegos']>) =>
      singleQuery(publicClient!, call.numLegos(...args)) as Promise<CallReturn<'numLegos'>>,
    ADDY_REGISTRY: (...args: ExtractArgs<Contract['calls']['ADDY_REGISTRY']>) =>
      singleQuery(publicClient!, call.ADDY_REGISTRY(...args)) as Promise<CallReturn<'ADDY_REGISTRY'>>,

    // Mutations
    setLocalGovernor: (...args: ExtractArgs<Contract['mutations']['setLocalGovernor']>) =>
      mutate(walletClient!, mutation.setLocalGovernor)(...args),
    registerNewLego: (...args: ExtractArgs<Contract['mutations']['registerNewLego']>) =>
      mutate(walletClient!, mutation.registerNewLego)(...args),
    updateLegoAddr: (...args: ExtractArgs<Contract['mutations']['updateLegoAddr']>) =>
      mutate(walletClient!, mutation.updateLegoAddr)(...args),
    disableLegoAddr: (...args: ExtractArgs<Contract['mutations']['disableLegoAddr']>) =>
      mutate(walletClient!, mutation.disableLegoAddr)(...args),
    setLegoHelper: (...args: ExtractArgs<Contract['mutations']['setLegoHelper']>) =>
      mutate(walletClient!, mutation.setLegoHelper)(...args),
  }
}
