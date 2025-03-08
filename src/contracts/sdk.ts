/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
/* @ts-nocheck */

import { PublicClient, WalletClient } from 'viem'

import * as AddyRegistry from './AddyRegistry.js'
import * as AgentFactory from './AgentFactory.js'
import * as AgentTemplate from './AgentTemplate.js'
import * as ChainlinkFeeds from './ChainlinkFeeds.js'
import * as LegoAaveV3 from './LegoAaveV3.js'
import * as LegoAeroClassic from './LegoAeroClassic.js'
import * as LegoAeroSlipstream from './LegoAeroSlipstream.js'
import * as LegoCompoundV3 from './LegoCompoundV3.js'
import * as LegoCurve from './LegoCurve.js'
import * as LegoEuler from './LegoEuler.js'
import * as LegoFluid from './LegoFluid.js'
import * as LegoHelper from './LegoHelper.js'
import * as LegoMoonwell from './LegoMoonwell.js'
import * as LegoMorpho from './LegoMorpho.js'
import * as LegoRegistry from './LegoRegistry.js'
import * as LegoSky from './LegoSky.js'
import * as LegoUniswapV2 from './LegoUniswapV2.js'
import * as LegoUniswapV3 from './LegoUniswapV3.js'
import * as OracleRegistry from './OracleRegistry.js'
import * as PriceSheets from './PriceSheets.js'
import * as PythFeeds from './PythFeeds.js'
import * as StorkFeeds from './StorkFeeds.js'
import * as WalletConfig from './WalletConfig.js'
import * as WalletFunds from './WalletFunds.js'

export type SDK = {
  AddyRegistry: AddyRegistry.SDK
  AgentFactory: AgentFactory.SDK
  ChainlinkFeeds: ChainlinkFeeds.SDK
  LegoAaveV3: LegoAaveV3.SDK
  LegoAeroClassic: LegoAeroClassic.SDK
  LegoAeroSlipstream: LegoAeroSlipstream.SDK
  LegoCompoundV3: LegoCompoundV3.SDK
  LegoCurve: LegoCurve.SDK
  LegoEuler: LegoEuler.SDK
  LegoFluid: LegoFluid.SDK
  LegoHelper: LegoHelper.SDK
  LegoMoonwell: LegoMoonwell.SDK
  LegoMorpho: LegoMorpho.SDK
  LegoRegistry: LegoRegistry.SDK
  LegoSky: LegoSky.SDK
  LegoUniswapV2: LegoUniswapV2.SDK
  LegoUniswapV3: LegoUniswapV3.SDK
  OracleRegistry: OracleRegistry.SDK
  PriceSheets: PriceSheets.SDK
  PythFeeds: PythFeeds.SDK
  StorkFeeds: StorkFeeds.SDK
  Agent: (address: `0x${string}`) => AgentTemplate.SDK
  WalletConfig: (address: `0x${string}`) => WalletConfig.SDK
  WalletFunds: (address: `0x${string}`) => WalletFunds.SDK
}

export default function createSdk(publicClient?: PublicClient, walletClient?: WalletClient): SDK {
  return {
    AddyRegistry: AddyRegistry.toSdk(publicClient, walletClient),
    AgentFactory: AgentFactory.toSdk(publicClient, walletClient),
    ChainlinkFeeds: ChainlinkFeeds.toSdk(publicClient, walletClient),
    LegoAaveV3: LegoAaveV3.toSdk(publicClient, walletClient),
    LegoAeroClassic: LegoAeroClassic.toSdk(publicClient, walletClient),
    LegoAeroSlipstream: LegoAeroSlipstream.toSdk(publicClient, walletClient),
    LegoCompoundV3: LegoCompoundV3.toSdk(publicClient, walletClient),
    LegoCurve: LegoCurve.toSdk(publicClient, walletClient),
    LegoEuler: LegoEuler.toSdk(publicClient, walletClient),
    LegoFluid: LegoFluid.toSdk(publicClient, walletClient),
    LegoHelper: LegoHelper.toSdk(publicClient, walletClient),
    LegoMoonwell: LegoMoonwell.toSdk(publicClient, walletClient),
    LegoMorpho: LegoMorpho.toSdk(publicClient, walletClient),
    LegoRegistry: LegoRegistry.toSdk(publicClient, walletClient),
    LegoSky: LegoSky.toSdk(publicClient, walletClient),
    LegoUniswapV2: LegoUniswapV2.toSdk(publicClient, walletClient),
    LegoUniswapV3: LegoUniswapV3.toSdk(publicClient, walletClient),
    OracleRegistry: OracleRegistry.toSdk(publicClient, walletClient),
    PriceSheets: PriceSheets.toSdk(publicClient, walletClient),
    PythFeeds: PythFeeds.toSdk(publicClient, walletClient),
    StorkFeeds: StorkFeeds.toSdk(publicClient, walletClient),
    Agent: (address: `0x${string}`) => AgentTemplate.toSdk(address, publicClient, walletClient),
    WalletConfig: (address: `0x${string}`) => WalletConfig.toSdk(address, publicClient, walletClient),
    WalletFunds: (address: `0x${string}`) => WalletFunds.toSdk(address, publicClient, walletClient),
  }
}
