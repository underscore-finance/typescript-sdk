import { AddressResolverFunction } from '@dappql/async'
import { Address, PublicClient } from 'viem'

import { LegoTools } from './contracts/index.js'

type DeepMutable<T> = {
  -readonly [P in keyof T]: T[P] extends object ? DeepMutable<T[P]> : T[P]
}

export async function getSwapInstructionsAmountOut(
  publicClient: PublicClient,
  payload: {
    tokenIn: Address
    tokenOut: Address
    amountIn: bigint
    slippage: bigint
    includeLegoIds?: bigint[]
  },
  addressResolver?: AddressResolverFunction,
) {
  const { tokenIn, tokenOut, amountIn, slippage, includeLegoIds } = payload

  const instructions = await publicClient.simulateContract({
    address: addressResolver ? addressResolver('LegoTools') : LegoTools.deployAddress!,
    abi: LegoTools.abi,
    functionName: 'getRoutesAndSwapInstructionsAmountOut',
    args: [tokenIn, tokenOut, amountIn, slippage, includeLegoIds ?? []],
  })

  return instructions.result as DeepMutable<typeof instructions.result>
}

export async function getSwapInstructionsAmountIn(
  publicClient: PublicClient,
  payload: {
    tokenIn: Address
    tokenOut: Address
    amountOut: bigint
    amountInAvailable: bigint
    slippage: bigint
    includeLegoIds?: bigint[]
  },
  addressResolver?: AddressResolverFunction,
) {
  const { tokenIn, tokenOut, amountOut, amountInAvailable, slippage, includeLegoIds } = payload

  const instructions = await publicClient.simulateContract({
    address: addressResolver ? addressResolver('LegoTools') : LegoTools.deployAddress!,
    abi: LegoTools.abi,
    functionName: 'getRoutesAndSwapInstructionsAmountIn',
    args: [tokenIn, tokenOut, amountOut, amountInAvailable, slippage, includeLegoIds ?? []],
  })

  return instructions.result as DeepMutable<typeof instructions.result>
}
