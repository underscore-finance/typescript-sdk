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
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "asset",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "vaultToken",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "assetAmountDeposited",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "usdValue",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "vaultTokenAmountReceived",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "recipient",
                "type": "address"
            }
        ],
        "name": "SkyDeposit",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "asset",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "vaultToken",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "assetAmountReceived",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "usdValue",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "vaultTokenAmountBurned",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "recipient",
                "type": "address"
            }
        ],
        "name": "SkyWithdrawal",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "asset",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "vaultToken",
                "type": "address"
            }
        ],
        "name": "AssetOpportunityAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "asset",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "vaultToken",
                "type": "address"
            }
        ],
        "name": "AssetOpportunityRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "asset",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "recipient",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "SkyFundsRecovered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "legoId",
                "type": "uint256"
            }
        ],
        "name": "SkyLegoIdSet",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "isActivated",
                "type": "bool"
            }
        ],
        "name": "SkyActivated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "addr",
                "type": "address"
            }
        ],
        "name": "LocalGovernorSet",
        "type": "event"
    },
    {
        "inputs": [
            {
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "isGovernor",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_newGovernor",
                "type": "address"
            }
        ],
        "name": "isValidLocalGovernor",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_newGovernor",
                "type": "address"
            }
        ],
        "name": "setLocalGovernor",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "localGovernor",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getRegistries",
        "outputs": [
            {
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getAccessForLego",
        "outputs": [
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_asset",
                "type": "address"
            }
        ],
        "name": "getAssetOpportunities",
        "outputs": [
            {
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAssets",
        "outputs": [
            {
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_vaultToken",
                "type": "address"
            }
        ],
        "name": "isVaultToken",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_vaultToken",
                "type": "address"
            }
        ],
        "name": "getUnderlyingAsset",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_vaultToken",
                "type": "address"
            },
            {
                "name": "_vaultTokenAmount",
                "type": "uint256"
            }
        ],
        "name": "getUnderlyingAmount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_asset",
                "type": "address"
            },
            {
                "name": "_assetAmount",
                "type": "uint256"
            },
            {
                "name": "_vaultToken",
                "type": "address"
            }
        ],
        "name": "getVaultTokenAmount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_vaultToken",
                "type": "address"
            },
            {
                "name": "_vaultTokenAmount",
                "type": "uint256"
            }
        ],
        "name": "getUsdValueOfVaultToken",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_vaultToken",
                "type": "address"
            },
            {
                "name": "_vaultTokenAmount",
                "type": "uint256"
            },
            {
                "name": "_oracleRegistry",
                "type": "address"
            }
        ],
        "name": "getUsdValueOfVaultToken",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_vaultToken",
                "type": "address"
            },
            {
                "name": "_vaultTokenAmount",
                "type": "uint256"
            }
        ],
        "name": "getUnderlyingData",
        "outputs": [
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_vaultToken",
                "type": "address"
            },
            {
                "name": "_vaultTokenAmount",
                "type": "uint256"
            },
            {
                "name": "_oracleRegistry",
                "type": "address"
            }
        ],
        "name": "getUnderlyingData",
        "outputs": [
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_vaultToken",
                "type": "address"
            }
        ],
        "name": "totalAssets",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_vaultToken",
                "type": "address"
            }
        ],
        "name": "totalBorrows",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_asset",
                "type": "address"
            },
            {
                "name": "_amount",
                "type": "uint256"
            },
            {
                "name": "_vault",
                "type": "address"
            },
            {
                "name": "_recipient",
                "type": "address"
            }
        ],
        "name": "depositTokens",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_asset",
                "type": "address"
            },
            {
                "name": "_amount",
                "type": "uint256"
            },
            {
                "name": "_vault",
                "type": "address"
            },
            {
                "name": "_recipient",
                "type": "address"
            },
            {
                "name": "_oracleRegistry",
                "type": "address"
            }
        ],
        "name": "depositTokens",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_asset",
                "type": "address"
            },
            {
                "name": "_amount",
                "type": "uint256"
            },
            {
                "name": "_vaultToken",
                "type": "address"
            },
            {
                "name": "_recipient",
                "type": "address"
            }
        ],
        "name": "withdrawTokens",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_asset",
                "type": "address"
            },
            {
                "name": "_amount",
                "type": "uint256"
            },
            {
                "name": "_vaultToken",
                "type": "address"
            },
            {
                "name": "_recipient",
                "type": "address"
            },
            {
                "name": "_oracleRegistry",
                "type": "address"
            }
        ],
        "name": "withdrawTokens",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_user",
                "type": "address"
            },
            {
                "name": "_market",
                "type": "address"
            },
            {
                "name": "_rewardToken",
                "type": "address"
            },
            {
                "name": "_rewardAmount",
                "type": "uint256"
            },
            {
                "name": "_proof",
                "type": "bytes32"
            }
        ],
        "name": "claimRewards",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "hasClaimableRewards",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_asset",
                "type": "address"
            },
            {
                "name": "_recipient",
                "type": "address"
            }
        ],
        "name": "recoverFunds",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_legoId",
                "type": "uint256"
            }
        ],
        "name": "setLegoId",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_shouldActivate",
                "type": "bool"
            }
        ],
        "name": "activate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "usdc",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "usds",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "susds",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "SKY_PSM",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "legoId",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isActivated",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ADDY_REGISTRY",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_skyPsm",
                "type": "address"
            },
            {
                "name": "_addyRegistry",
                "type": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
] as const

export const deployAddress: Address | undefined = undefined

export type Contract = {
  calls: {
    isGovernor: (address: `0x${string}`) => Promise<boolean>
    isValidLocalGovernor: (newGovernor: `0x${string}`) => Promise<boolean>
    localGovernor: () => Promise<`0x${string}`>
    getRegistries: () => Promise<`0x${string}`[]>
    getAccessForLego: (user: `0x${string}`) => Promise<[`0x${string}`, string, bigint]>
    getAssetOpportunities: (asset: `0x${string}`) => Promise<`0x${string}`[]>
    getAssets: () => Promise<`0x${string}`[]>
    isVaultToken: (vaultToken: `0x${string}`) => Promise<boolean>
    getUnderlyingAsset: (vaultToken: `0x${string}`) => Promise<`0x${string}`>
    getUnderlyingAmount: (vaultToken: `0x${string}`, vaultTokenAmount: bigint) => Promise<bigint>
    getVaultTokenAmount: (asset: `0x${string}`, assetAmount: bigint, vaultToken: `0x${string}`) => Promise<bigint>
    getUsdValueOfVaultToken: (vaultToken: `0x${string}`, vaultTokenAmount: bigint, oracleRegistry?: `0x${string}`) => Promise<bigint>
    getUnderlyingData: (vaultToken: `0x${string}`, vaultTokenAmount: bigint, oracleRegistry?: `0x${string}`) => Promise<[`0x${string}`, bigint, bigint]>
    totalAssets: (vaultToken: `0x${string}`) => Promise<bigint>
    totalBorrows: (vaultToken: `0x${string}`) => Promise<bigint>
    hasClaimableRewards: (user: `0x${string}`) => Promise<boolean>
    usdc: () => Promise<`0x${string}`>
    usds: () => Promise<`0x${string}`>
    susds: () => Promise<`0x${string}`>
    SKY_PSM: () => Promise<`0x${string}`>
    legoId: () => Promise<bigint>
    isActivated: () => Promise<boolean>
    ADDY_REGISTRY: () => Promise<`0x${string}`>
  }
  mutations: {
    setLocalGovernor: (newGovernor: `0x${string}`) => Promise<boolean>
    depositTokens: (asset: `0x${string}`, amount: bigint, vault: `0x${string}`, recipient: `0x${string}`, oracleRegistry?: `0x${string}`) => Promise<[bigint, `0x${string}`, bigint, bigint, bigint]>
    withdrawTokens: (asset: `0x${string}`, amount: bigint, vaultToken: `0x${string}`, recipient: `0x${string}`, oracleRegistry?: `0x${string}`) => Promise<[bigint, bigint, bigint, bigint]>
    claimRewards: (user: `0x${string}`, market: `0x${string}`, rewardToken: `0x${string}`, rewardAmount: bigint, proof: `0x${string}`) => Promise<void>
    recoverFunds: (asset: `0x${string}`, recipient: `0x${string}`) => Promise<boolean>
    setLegoId: (legoId: bigint) => Promise<boolean>
    activate: (shouldActivate: boolean) => Promise<void>
  }
  events: {
    SkyDeposit: (sender: `0x${string}`, asset: `0x${string}`, vaultToken: `0x${string}`, assetAmountDeposited: bigint, usdValue: bigint, vaultTokenAmountReceived: bigint, recipient: `0x${string}`) => Promise<void>
    SkyWithdrawal: (sender: `0x${string}`, asset: `0x${string}`, vaultToken: `0x${string}`, assetAmountReceived: bigint, usdValue: bigint, vaultTokenAmountBurned: bigint, recipient: `0x${string}`) => Promise<void>
    AssetOpportunityAdded: (asset: `0x${string}`, vaultToken: `0x${string}`) => Promise<void>
    AssetOpportunityRemoved: (asset: `0x${string}`, vaultToken: `0x${string}`) => Promise<void>
    SkyFundsRecovered: (asset: `0x${string}`, recipient: `0x${string}`, amount: bigint) => Promise<void>
    SkyLegoIdSet: (legoId: bigint) => Promise<void>
    SkyActivated: (isActivated: boolean) => Promise<void>
    LocalGovernorSet: (addr: `0x${string}`) => Promise<void>
  }
}

export type Calls = keyof Contract['calls']
export type Request<M extends Calls> = {
  contractName: 'LegoSky'
  method: M
  args: ExtractArgs<Contract['calls'][M]>
  address: Address | undefined
  deployAddress: Address | undefined
  defaultValue: Awaited<ReturnType<Contract['calls'][M]>> | undefined
  getAbi: () => typeof abi
  with: (options: {
    contractAddress?: Address
    defaultValue?: Awaited<ReturnType<Contract['calls'][M]>>
  }) => Request<M>
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
      contractName: 'LegoSky' as const,
      method,
      args,
      address,
      deployAddress,
      defaultValue,
      getAbi: () => abi,
      with: (options: {
        contractAddress?: Address
        defaultValue?: Awaited<ReturnType<Contract['calls'][M]>>
      }) => {
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
  [K in Calls]: (
    ...args: ExtractArgs<Contract['calls'][K]>
  ) => ReturnType<typeof getRequest<K>>
}

export const call: CallType = {
		isGovernor: (...args: ExtractArgs<Contract['calls']['isGovernor']>) => getRequest('isGovernor', args),
		isValidLocalGovernor: (...args: ExtractArgs<Contract['calls']['isValidLocalGovernor']>) => getRequest('isValidLocalGovernor', args),
		localGovernor: (...args: ExtractArgs<Contract['calls']['localGovernor']>) => getRequest('localGovernor', args),
		getRegistries: (...args: ExtractArgs<Contract['calls']['getRegistries']>) => getRequest('getRegistries', args),
		getAccessForLego: (...args: ExtractArgs<Contract['calls']['getAccessForLego']>) => getRequest('getAccessForLego', args),
		getAssetOpportunities: (...args: ExtractArgs<Contract['calls']['getAssetOpportunities']>) => getRequest('getAssetOpportunities', args),
		getAssets: (...args: ExtractArgs<Contract['calls']['getAssets']>) => getRequest('getAssets', args),
		isVaultToken: (...args: ExtractArgs<Contract['calls']['isVaultToken']>) => getRequest('isVaultToken', args),
		getUnderlyingAsset: (...args: ExtractArgs<Contract['calls']['getUnderlyingAsset']>) => getRequest('getUnderlyingAsset', args),
		getUnderlyingAmount: (...args: ExtractArgs<Contract['calls']['getUnderlyingAmount']>) => getRequest('getUnderlyingAmount', args),
		getVaultTokenAmount: (...args: ExtractArgs<Contract['calls']['getVaultTokenAmount']>) => getRequest('getVaultTokenAmount', args),
		getUsdValueOfVaultToken: (...args: ExtractArgs<Contract['calls']['getUsdValueOfVaultToken']>) => getRequest('getUsdValueOfVaultToken', args),
		getUnderlyingData: (...args: ExtractArgs<Contract['calls']['getUnderlyingData']>) => getRequest('getUnderlyingData', args),
		totalAssets: (...args: ExtractArgs<Contract['calls']['totalAssets']>) => getRequest('totalAssets', args),
		totalBorrows: (...args: ExtractArgs<Contract['calls']['totalBorrows']>) => getRequest('totalBorrows', args),
		hasClaimableRewards: (...args: ExtractArgs<Contract['calls']['hasClaimableRewards']>) => getRequest('hasClaimableRewards', args),
		usdc: (...args: ExtractArgs<Contract['calls']['usdc']>) => getRequest('usdc', args),
		usds: (...args: ExtractArgs<Contract['calls']['usds']>) => getRequest('usds', args),
		susds: (...args: ExtractArgs<Contract['calls']['susds']>) => getRequest('susds', args),
		SKY_PSM: (...args: ExtractArgs<Contract['calls']['SKY_PSM']>) => getRequest('SKY_PSM', args),
		legoId: (...args: ExtractArgs<Contract['calls']['legoId']>) => getRequest('legoId', args),
		isActivated: (...args: ExtractArgs<Contract['calls']['isActivated']>) => getRequest('isActivated', args),
		ADDY_REGISTRY: (...args: ExtractArgs<Contract['calls']['ADDY_REGISTRY']>) => getRequest('ADDY_REGISTRY', args),
}


export type Mutations = keyof Contract['mutations']
function getMutation<M extends Mutations>(functionName: M) {
  return {
    contractName: 'LegoSky' as const,
    functionName,
    deployAddress,
    argsType: undefined as ExtractArgs<Contract['mutations'][M]> | undefined,
    getAbi: () => abi,
  }
}

export const mutation:  {
  [K in Mutations]: {
    contractName: 'LegoSky'
    deployAddress: Address | undefined
    getAbi: () => typeof abi
    functionName: K
    argsType: ExtractArgs<Contract['mutations'][K]> | undefined
  }
} = {
		setLocalGovernor: getMutation('setLocalGovernor'),
		depositTokens: getMutation('depositTokens'),
		withdrawTokens: getMutation('withdrawTokens'),
		claimRewards: getMutation('claimRewards'),
		recoverFunds: getMutation('recoverFunds'),
		setLegoId: getMutation('setLegoId'),
		activate: getMutation('activate'),
}




export type SDK = {
		isGovernor: (...args: ExtractArgs<Contract['calls']['isGovernor']>) => Promise<CallReturn<'isGovernor'>>
		isValidLocalGovernor: (...args: ExtractArgs<Contract['calls']['isValidLocalGovernor']>) => Promise<CallReturn<'isValidLocalGovernor'>>
		localGovernor: (...args: ExtractArgs<Contract['calls']['localGovernor']>) => Promise<CallReturn<'localGovernor'>>
		getRegistries: (...args: ExtractArgs<Contract['calls']['getRegistries']>) => Promise<CallReturn<'getRegistries'>>
		getAccessForLego: (...args: ExtractArgs<Contract['calls']['getAccessForLego']>) => Promise<CallReturn<'getAccessForLego'>>
		getAssetOpportunities: (...args: ExtractArgs<Contract['calls']['getAssetOpportunities']>) => Promise<CallReturn<'getAssetOpportunities'>>
		getAssets: (...args: ExtractArgs<Contract['calls']['getAssets']>) => Promise<CallReturn<'getAssets'>>
		isVaultToken: (...args: ExtractArgs<Contract['calls']['isVaultToken']>) => Promise<CallReturn<'isVaultToken'>>
		getUnderlyingAsset: (...args: ExtractArgs<Contract['calls']['getUnderlyingAsset']>) => Promise<CallReturn<'getUnderlyingAsset'>>
		getUnderlyingAmount: (...args: ExtractArgs<Contract['calls']['getUnderlyingAmount']>) => Promise<CallReturn<'getUnderlyingAmount'>>
		getVaultTokenAmount: (...args: ExtractArgs<Contract['calls']['getVaultTokenAmount']>) => Promise<CallReturn<'getVaultTokenAmount'>>
		getUsdValueOfVaultToken: (...args: ExtractArgs<Contract['calls']['getUsdValueOfVaultToken']>) => Promise<CallReturn<'getUsdValueOfVaultToken'>>
		getUnderlyingData: (...args: ExtractArgs<Contract['calls']['getUnderlyingData']>) => Promise<CallReturn<'getUnderlyingData'>>
		totalAssets: (...args: ExtractArgs<Contract['calls']['totalAssets']>) => Promise<CallReturn<'totalAssets'>>
		totalBorrows: (...args: ExtractArgs<Contract['calls']['totalBorrows']>) => Promise<CallReturn<'totalBorrows'>>
		hasClaimableRewards: (...args: ExtractArgs<Contract['calls']['hasClaimableRewards']>) => Promise<CallReturn<'hasClaimableRewards'>>
		usdc: (...args: ExtractArgs<Contract['calls']['usdc']>) => Promise<CallReturn<'usdc'>>
		usds: (...args: ExtractArgs<Contract['calls']['usds']>) => Promise<CallReturn<'usds'>>
		susds: (...args: ExtractArgs<Contract['calls']['susds']>) => Promise<CallReturn<'susds'>>
		SKY_PSM: (...args: ExtractArgs<Contract['calls']['SKY_PSM']>) => Promise<CallReturn<'SKY_PSM'>>
		legoId: (...args: ExtractArgs<Contract['calls']['legoId']>) => Promise<CallReturn<'legoId'>>
		isActivated: (...args: ExtractArgs<Contract['calls']['isActivated']>) => Promise<CallReturn<'isActivated'>>
		ADDY_REGISTRY: (...args: ExtractArgs<Contract['calls']['ADDY_REGISTRY']>) => Promise<CallReturn<'ADDY_REGISTRY'>>
		setLocalGovernor: (...args: ExtractArgs<Contract['mutations']['setLocalGovernor']>) => Promise<Address>
		depositTokens: (...args: ExtractArgs<Contract['mutations']['depositTokens']>) => Promise<Address>
		withdrawTokens: (...args: ExtractArgs<Contract['mutations']['withdrawTokens']>) => Promise<Address>
		claimRewards: (...args: ExtractArgs<Contract['mutations']['claimRewards']>) => Promise<Address>
		recoverFunds: (...args: ExtractArgs<Contract['mutations']['recoverFunds']>) => Promise<Address>
		setLegoId: (...args: ExtractArgs<Contract['mutations']['setLegoId']>) => Promise<Address>
		activate: (...args: ExtractArgs<Contract['mutations']['activate']>) => Promise<Address>
}

export function toSdk(publicClient?: PublicClient, walletClient?: WalletClient): SDK {
  return {
    // Queries
		isGovernor: (...args: ExtractArgs<Contract['calls']['isGovernor']>) => singleQuery(publicClient!, call.isGovernor(...args)) as Promise<CallReturn<'isGovernor'>>,
		isValidLocalGovernor: (...args: ExtractArgs<Contract['calls']['isValidLocalGovernor']>) => singleQuery(publicClient!, call.isValidLocalGovernor(...args)) as Promise<CallReturn<'isValidLocalGovernor'>>,
		localGovernor: (...args: ExtractArgs<Contract['calls']['localGovernor']>) => singleQuery(publicClient!, call.localGovernor(...args)) as Promise<CallReturn<'localGovernor'>>,
		getRegistries: (...args: ExtractArgs<Contract['calls']['getRegistries']>) => singleQuery(publicClient!, call.getRegistries(...args)) as Promise<CallReturn<'getRegistries'>>,
		getAccessForLego: (...args: ExtractArgs<Contract['calls']['getAccessForLego']>) => singleQuery(publicClient!, call.getAccessForLego(...args)) as Promise<CallReturn<'getAccessForLego'>>,
		getAssetOpportunities: (...args: ExtractArgs<Contract['calls']['getAssetOpportunities']>) => singleQuery(publicClient!, call.getAssetOpportunities(...args)) as Promise<CallReturn<'getAssetOpportunities'>>,
		getAssets: (...args: ExtractArgs<Contract['calls']['getAssets']>) => singleQuery(publicClient!, call.getAssets(...args)) as Promise<CallReturn<'getAssets'>>,
		isVaultToken: (...args: ExtractArgs<Contract['calls']['isVaultToken']>) => singleQuery(publicClient!, call.isVaultToken(...args)) as Promise<CallReturn<'isVaultToken'>>,
		getUnderlyingAsset: (...args: ExtractArgs<Contract['calls']['getUnderlyingAsset']>) => singleQuery(publicClient!, call.getUnderlyingAsset(...args)) as Promise<CallReturn<'getUnderlyingAsset'>>,
		getUnderlyingAmount: (...args: ExtractArgs<Contract['calls']['getUnderlyingAmount']>) => singleQuery(publicClient!, call.getUnderlyingAmount(...args)) as Promise<CallReturn<'getUnderlyingAmount'>>,
		getVaultTokenAmount: (...args: ExtractArgs<Contract['calls']['getVaultTokenAmount']>) => singleQuery(publicClient!, call.getVaultTokenAmount(...args)) as Promise<CallReturn<'getVaultTokenAmount'>>,
		getUsdValueOfVaultToken: (...args: ExtractArgs<Contract['calls']['getUsdValueOfVaultToken']>) => singleQuery(publicClient!, call.getUsdValueOfVaultToken(...args)) as Promise<CallReturn<'getUsdValueOfVaultToken'>>,
		getUnderlyingData: (...args: ExtractArgs<Contract['calls']['getUnderlyingData']>) => singleQuery(publicClient!, call.getUnderlyingData(...args)) as Promise<CallReturn<'getUnderlyingData'>>,
		totalAssets: (...args: ExtractArgs<Contract['calls']['totalAssets']>) => singleQuery(publicClient!, call.totalAssets(...args)) as Promise<CallReturn<'totalAssets'>>,
		totalBorrows: (...args: ExtractArgs<Contract['calls']['totalBorrows']>) => singleQuery(publicClient!, call.totalBorrows(...args)) as Promise<CallReturn<'totalBorrows'>>,
		hasClaimableRewards: (...args: ExtractArgs<Contract['calls']['hasClaimableRewards']>) => singleQuery(publicClient!, call.hasClaimableRewards(...args)) as Promise<CallReturn<'hasClaimableRewards'>>,
		usdc: (...args: ExtractArgs<Contract['calls']['usdc']>) => singleQuery(publicClient!, call.usdc(...args)) as Promise<CallReturn<'usdc'>>,
		usds: (...args: ExtractArgs<Contract['calls']['usds']>) => singleQuery(publicClient!, call.usds(...args)) as Promise<CallReturn<'usds'>>,
		susds: (...args: ExtractArgs<Contract['calls']['susds']>) => singleQuery(publicClient!, call.susds(...args)) as Promise<CallReturn<'susds'>>,
		SKY_PSM: (...args: ExtractArgs<Contract['calls']['SKY_PSM']>) => singleQuery(publicClient!, call.SKY_PSM(...args)) as Promise<CallReturn<'SKY_PSM'>>,
		legoId: (...args: ExtractArgs<Contract['calls']['legoId']>) => singleQuery(publicClient!, call.legoId(...args)) as Promise<CallReturn<'legoId'>>,
		isActivated: (...args: ExtractArgs<Contract['calls']['isActivated']>) => singleQuery(publicClient!, call.isActivated(...args)) as Promise<CallReturn<'isActivated'>>,
		ADDY_REGISTRY: (...args: ExtractArgs<Contract['calls']['ADDY_REGISTRY']>) => singleQuery(publicClient!, call.ADDY_REGISTRY(...args)) as Promise<CallReturn<'ADDY_REGISTRY'>>,
    
    // Mutations
		setLocalGovernor: (...args: ExtractArgs<Contract['mutations']['setLocalGovernor']>) => mutate(walletClient!, mutation.setLocalGovernor)(...args),
		depositTokens: (...args: ExtractArgs<Contract['mutations']['depositTokens']>) => mutate(walletClient!, mutation.depositTokens)(...args),
		withdrawTokens: (...args: ExtractArgs<Contract['mutations']['withdrawTokens']>) => mutate(walletClient!, mutation.withdrawTokens)(...args),
		claimRewards: (...args: ExtractArgs<Contract['mutations']['claimRewards']>) => mutate(walletClient!, mutation.claimRewards)(...args),
		recoverFunds: (...args: ExtractArgs<Contract['mutations']['recoverFunds']>) => mutate(walletClient!, mutation.recoverFunds)(...args),
		setLegoId: (...args: ExtractArgs<Contract['mutations']['setLegoId']>) => mutate(walletClient!, mutation.setLegoId)(...args),
		activate: (...args: ExtractArgs<Contract['mutations']['activate']>) => mutate(walletClient!, mutation.activate)(...args),
  }
}

