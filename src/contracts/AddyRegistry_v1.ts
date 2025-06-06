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
        name: 'addyId',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'description',
        type: 'string',
      },
    ],
    name: 'NewAddyRegistered',
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
        name: 'prevAddy',
        type: 'address',
      },
      {
        indexed: false,
        name: 'addyId',
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
    ],
    name: 'AddyIdUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'prevAddy',
        type: 'address',
      },
      {
        indexed: false,
        name: 'addyId',
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
    ],
    name: 'AddyIdDisabled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'governor',
        type: 'address',
      },
    ],
    name: 'AddyRegistryGovernorSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'isActivated',
        type: 'bool',
      },
    ],
    name: 'AddyRegistryActivated',
    type: 'event',
  },
  {
    inputs: [
      {
        name: '_addy',
        type: 'address',
      },
    ],
    name: 'isValidNewAddy',
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
        name: '_addy',
        type: 'address',
      },
      {
        name: '_description',
        type: 'string',
      },
    ],
    name: 'registerNewAddy',
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
        name: '_addyId',
        type: 'uint256',
      },
      {
        name: '_newAddy',
        type: 'address',
      },
    ],
    name: 'isValidAddyUpdate',
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
        name: '_addyId',
        type: 'uint256',
      },
      {
        name: '_newAddy',
        type: 'address',
      },
    ],
    name: 'updateAddy',
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
        name: '_addyId',
        type: 'uint256',
      },
    ],
    name: 'isValidAddyDisable',
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
        name: '_addyId',
        type: 'uint256',
      },
    ],
    name: 'disableAddy',
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
        name: '_addy',
        type: 'address',
      },
    ],
    name: 'isValidAddy',
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
        name: '_addyId',
        type: 'uint256',
      },
    ],
    name: 'isValidAddyId',
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
        name: '_addy',
        type: 'address',
      },
    ],
    name: 'getAddyId',
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
        name: '_addyId',
        type: 'uint256',
      },
    ],
    name: 'getAddy',
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
        name: '_addyId',
        type: 'uint256',
      },
    ],
    name: 'getAddyInfo',
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
        name: '_addyId',
        type: 'uint256',
      },
    ],
    name: 'getAddyDescription',
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
    name: 'getNumAddys',
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
    name: 'getLastAddy',
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
    name: 'getLastAddyId',
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
        name: '_newGovernor',
        type: 'address',
      },
    ],
    name: 'isValidGovernor',
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
    name: 'setGovernor',
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
        name: 'arg0',
        type: 'uint256',
      },
    ],
    name: 'addyInfo',
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
    name: 'addyToId',
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
    name: 'numAddys',
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
    name: 'governor',
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
        name: '_governor',
        type: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
] as const

export const deployAddress: Address | undefined = '0x49B08551e452cA99da7dE9B3a60E39e5f10C13CD'

export type Contract = {
  calls: {
    isValidNewAddy: (addy: `0x${string}`) => Promise<boolean>
    isValidAddyUpdate: (addyId: bigint, newAddy: `0x${string}`) => Promise<boolean>
    isValidAddyDisable: (addyId: bigint) => Promise<boolean>
    isValidAddy: (addy: `0x${string}`) => Promise<boolean>
    isValidAddyId: (addyId: bigint) => Promise<boolean>
    getAddyId: (addy: `0x${string}`) => Promise<bigint>
    getAddy: (addyId: bigint) => Promise<`0x${string}`>
    getAddyInfo: (
      addyId: bigint,
    ) => Promise<{ addr: `0x${string}`; version: bigint; lastModified: bigint; description: string }>
    getAddyDescription: (addyId: bigint) => Promise<string>
    getNumAddys: () => Promise<bigint>
    getLastAddy: () => Promise<`0x${string}`>
    getLastAddyId: () => Promise<bigint>
    isValidGovernor: (newGovernor: `0x${string}`) => Promise<boolean>
    addyInfo: (
      arg0: bigint,
    ) => Promise<{ addr: `0x${string}`; version: bigint; lastModified: bigint; description: string }>
    addyToId: (arg0: `0x${string}`) => Promise<bigint>
    numAddys: () => Promise<bigint>
    governor: () => Promise<`0x${string}`>
  }
  mutations: {
    registerNewAddy: (addy: `0x${string}`, description: string) => Promise<bigint>
    updateAddy: (addyId: bigint, newAddy: `0x${string}`) => Promise<boolean>
    disableAddy: (addyId: bigint) => Promise<boolean>
    setGovernor: (newGovernor: `0x${string}`) => Promise<boolean>
  }
  events: {
    NewAddyRegistered: (addr: `0x${string}`, addyId: bigint, description: string) => Promise<void>
    AddyIdUpdated: (
      newAddr: `0x${string}`,
      prevAddy: `0x${string}`,
      addyId: bigint,
      version: bigint,
      description: string,
    ) => Promise<void>
    AddyIdDisabled: (prevAddy: `0x${string}`, addyId: bigint, version: bigint, description: string) => Promise<void>
    AddyRegistryGovernorSet: (governor: `0x${string}`) => Promise<void>
    AddyRegistryActivated: (isActivated: boolean) => Promise<void>
  }
}

export type Calls = keyof Contract['calls']
export type Request<M extends Calls> = {
  contractName: 'AddyRegistry_v1'
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
    contractName: 'AddyRegistry_v1' as const,
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
  isValidNewAddy: (...args: ExtractArgs<Contract['calls']['isValidNewAddy']>) => getRequest('isValidNewAddy', args),
  isValidAddyUpdate: (...args: ExtractArgs<Contract['calls']['isValidAddyUpdate']>) =>
    getRequest('isValidAddyUpdate', args),
  isValidAddyDisable: (...args: ExtractArgs<Contract['calls']['isValidAddyDisable']>) =>
    getRequest('isValidAddyDisable', args),
  isValidAddy: (...args: ExtractArgs<Contract['calls']['isValidAddy']>) => getRequest('isValidAddy', args),
  isValidAddyId: (...args: ExtractArgs<Contract['calls']['isValidAddyId']>) => getRequest('isValidAddyId', args),
  getAddyId: (...args: ExtractArgs<Contract['calls']['getAddyId']>) => getRequest('getAddyId', args),
  getAddy: (...args: ExtractArgs<Contract['calls']['getAddy']>) => getRequest('getAddy', args),
  getAddyInfo: (...args: ExtractArgs<Contract['calls']['getAddyInfo']>) => getRequest('getAddyInfo', args),
  getAddyDescription: (...args: ExtractArgs<Contract['calls']['getAddyDescription']>) =>
    getRequest('getAddyDescription', args),
  getNumAddys: (...args: ExtractArgs<Contract['calls']['getNumAddys']>) => getRequest('getNumAddys', args),
  getLastAddy: (...args: ExtractArgs<Contract['calls']['getLastAddy']>) => getRequest('getLastAddy', args),
  getLastAddyId: (...args: ExtractArgs<Contract['calls']['getLastAddyId']>) => getRequest('getLastAddyId', args),
  isValidGovernor: (...args: ExtractArgs<Contract['calls']['isValidGovernor']>) => getRequest('isValidGovernor', args),
  addyInfo: (...args: ExtractArgs<Contract['calls']['addyInfo']>) => getRequest('addyInfo', args),
  addyToId: (...args: ExtractArgs<Contract['calls']['addyToId']>) => getRequest('addyToId', args),
  numAddys: (...args: ExtractArgs<Contract['calls']['numAddys']>) => getRequest('numAddys', args),
  governor: (...args: ExtractArgs<Contract['calls']['governor']>) => getRequest('governor', args),
}

export type Mutations = keyof Contract['mutations']
function getMutation<M extends Mutations>(functionName: M) {
  return {
    contractName: 'AddyRegistry_v1' as const,
    functionName,
    deployAddress,
    argsType: undefined as ExtractArgs<Contract['mutations'][M]> | undefined,
    getAbi: () => abi,
  }
}

export const mutation: {
  [K in Mutations]: {
    contractName: 'AddyRegistry_v1'
    deployAddress: Address | undefined
    getAbi: () => typeof abi
    functionName: K
    argsType: ExtractArgs<Contract['mutations'][K]> | undefined
  }
} = {
  registerNewAddy: getMutation('registerNewAddy'),
  updateAddy: getMutation('updateAddy'),
  disableAddy: getMutation('disableAddy'),
  setGovernor: getMutation('setGovernor'),
}

export type SDK = {
  deployAddress: Address | undefined
  abi: typeof abi
  isValidNewAddy: (...args: ExtractArgs<Contract['calls']['isValidNewAddy']>) => Promise<CallReturn<'isValidNewAddy'>>
  isValidAddyUpdate: (
    ...args: ExtractArgs<Contract['calls']['isValidAddyUpdate']>
  ) => Promise<CallReturn<'isValidAddyUpdate'>>
  isValidAddyDisable: (
    ...args: ExtractArgs<Contract['calls']['isValidAddyDisable']>
  ) => Promise<CallReturn<'isValidAddyDisable'>>
  isValidAddy: (...args: ExtractArgs<Contract['calls']['isValidAddy']>) => Promise<CallReturn<'isValidAddy'>>
  isValidAddyId: (...args: ExtractArgs<Contract['calls']['isValidAddyId']>) => Promise<CallReturn<'isValidAddyId'>>
  getAddyId: (...args: ExtractArgs<Contract['calls']['getAddyId']>) => Promise<CallReturn<'getAddyId'>>
  getAddy: (...args: ExtractArgs<Contract['calls']['getAddy']>) => Promise<CallReturn<'getAddy'>>
  getAddyInfo: (...args: ExtractArgs<Contract['calls']['getAddyInfo']>) => Promise<CallReturn<'getAddyInfo'>>
  getAddyDescription: (
    ...args: ExtractArgs<Contract['calls']['getAddyDescription']>
  ) => Promise<CallReturn<'getAddyDescription'>>
  getNumAddys: (...args: ExtractArgs<Contract['calls']['getNumAddys']>) => Promise<CallReturn<'getNumAddys'>>
  getLastAddy: (...args: ExtractArgs<Contract['calls']['getLastAddy']>) => Promise<CallReturn<'getLastAddy'>>
  getLastAddyId: (...args: ExtractArgs<Contract['calls']['getLastAddyId']>) => Promise<CallReturn<'getLastAddyId'>>
  isValidGovernor: (
    ...args: ExtractArgs<Contract['calls']['isValidGovernor']>
  ) => Promise<CallReturn<'isValidGovernor'>>
  addyInfo: (...args: ExtractArgs<Contract['calls']['addyInfo']>) => Promise<CallReturn<'addyInfo'>>
  addyToId: (...args: ExtractArgs<Contract['calls']['addyToId']>) => Promise<CallReturn<'addyToId'>>
  numAddys: (...args: ExtractArgs<Contract['calls']['numAddys']>) => Promise<CallReturn<'numAddys'>>
  governor: (...args: ExtractArgs<Contract['calls']['governor']>) => Promise<CallReturn<'governor'>>
  registerNewAddy: (...args: ExtractArgs<Contract['mutations']['registerNewAddy']>) => Promise<Address>
  updateAddy: (...args: ExtractArgs<Contract['mutations']['updateAddy']>) => Promise<Address>
  disableAddy: (...args: ExtractArgs<Contract['mutations']['disableAddy']>) => Promise<Address>
  setGovernor: (...args: ExtractArgs<Contract['mutations']['setGovernor']>) => Promise<Address>
}

export function toSdk(publicClient?: PublicClient, walletClient?: WalletClient): SDK {
  return {
    deployAddress,
    abi,
    // Queries
    isValidNewAddy: (...args: ExtractArgs<Contract['calls']['isValidNewAddy']>) =>
      singleQuery(publicClient!, call.isValidNewAddy(...args)) as Promise<CallReturn<'isValidNewAddy'>>,
    isValidAddyUpdate: (...args: ExtractArgs<Contract['calls']['isValidAddyUpdate']>) =>
      singleQuery(publicClient!, call.isValidAddyUpdate(...args)) as Promise<CallReturn<'isValidAddyUpdate'>>,
    isValidAddyDisable: (...args: ExtractArgs<Contract['calls']['isValidAddyDisable']>) =>
      singleQuery(publicClient!, call.isValidAddyDisable(...args)) as Promise<CallReturn<'isValidAddyDisable'>>,
    isValidAddy: (...args: ExtractArgs<Contract['calls']['isValidAddy']>) =>
      singleQuery(publicClient!, call.isValidAddy(...args)) as Promise<CallReturn<'isValidAddy'>>,
    isValidAddyId: (...args: ExtractArgs<Contract['calls']['isValidAddyId']>) =>
      singleQuery(publicClient!, call.isValidAddyId(...args)) as Promise<CallReturn<'isValidAddyId'>>,
    getAddyId: (...args: ExtractArgs<Contract['calls']['getAddyId']>) =>
      singleQuery(publicClient!, call.getAddyId(...args)) as Promise<CallReturn<'getAddyId'>>,
    getAddy: (...args: ExtractArgs<Contract['calls']['getAddy']>) =>
      singleQuery(publicClient!, call.getAddy(...args)) as Promise<CallReturn<'getAddy'>>,
    getAddyInfo: (...args: ExtractArgs<Contract['calls']['getAddyInfo']>) =>
      singleQuery(publicClient!, call.getAddyInfo(...args)) as Promise<CallReturn<'getAddyInfo'>>,
    getAddyDescription: (...args: ExtractArgs<Contract['calls']['getAddyDescription']>) =>
      singleQuery(publicClient!, call.getAddyDescription(...args)) as Promise<CallReturn<'getAddyDescription'>>,
    getNumAddys: (...args: ExtractArgs<Contract['calls']['getNumAddys']>) =>
      singleQuery(publicClient!, call.getNumAddys(...args)) as Promise<CallReturn<'getNumAddys'>>,
    getLastAddy: (...args: ExtractArgs<Contract['calls']['getLastAddy']>) =>
      singleQuery(publicClient!, call.getLastAddy(...args)) as Promise<CallReturn<'getLastAddy'>>,
    getLastAddyId: (...args: ExtractArgs<Contract['calls']['getLastAddyId']>) =>
      singleQuery(publicClient!, call.getLastAddyId(...args)) as Promise<CallReturn<'getLastAddyId'>>,
    isValidGovernor: (...args: ExtractArgs<Contract['calls']['isValidGovernor']>) =>
      singleQuery(publicClient!, call.isValidGovernor(...args)) as Promise<CallReturn<'isValidGovernor'>>,
    addyInfo: (...args: ExtractArgs<Contract['calls']['addyInfo']>) =>
      singleQuery(publicClient!, call.addyInfo(...args)) as Promise<CallReturn<'addyInfo'>>,
    addyToId: (...args: ExtractArgs<Contract['calls']['addyToId']>) =>
      singleQuery(publicClient!, call.addyToId(...args)) as Promise<CallReturn<'addyToId'>>,
    numAddys: (...args: ExtractArgs<Contract['calls']['numAddys']>) =>
      singleQuery(publicClient!, call.numAddys(...args)) as Promise<CallReturn<'numAddys'>>,
    governor: (...args: ExtractArgs<Contract['calls']['governor']>) =>
      singleQuery(publicClient!, call.governor(...args)) as Promise<CallReturn<'governor'>>,

    // Mutations
    registerNewAddy: (...args: ExtractArgs<Contract['mutations']['registerNewAddy']>) =>
      mutate(walletClient!, mutation.registerNewAddy)(...args),
    updateAddy: (...args: ExtractArgs<Contract['mutations']['updateAddy']>) =>
      mutate(walletClient!, mutation.updateAddy)(...args),
    disableAddy: (...args: ExtractArgs<Contract['mutations']['disableAddy']>) =>
      mutate(walletClient!, mutation.disableAddy)(...args),
    setGovernor: (...args: ExtractArgs<Contract['mutations']['setGovernor']>) =>
      mutate(walletClient!, mutation.setGovernor)(...args),
  }
}
