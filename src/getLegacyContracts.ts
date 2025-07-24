import { Address } from 'viem'

import { SDK } from './contracts/sdk.js'
import { legacyGetSwapInstructionsAmountIn, legacyGetSwapInstructionsAmountOut } from './getSwapInstructions.js'

export * from './contracts/index.js'

export type LegacyContractsCollection = {
  v0_1: {
    AddyRegistry: SDK['v0_1_AddyRegistry']
    AgentFactory: SDK['v0_1_AgentFactory']
    UserWallet: SDK['v0_1_UserWallet']
    UserWalletConfig: SDK['v0_1_UserWalletConfig']
    Agent: SDK['v0_1_Agent']
  }
  v0_2: {
    AddyRegistry: SDK['v0_2_AddyRegistry']
    AgentFactory: SDK['v0_2_AgentFactory']
    UserWallet: SDK['v0_2_UserWallet']
    UserWalletConfig: SDK['v0_2_UserWalletConfig']
    Agent: SDK['v0_2_Agent']
  }
  v0_3: {
    AddyRegistry: SDK['v0_3_AddyRegistry']
    AgentFactory: SDK['v0_3_AgentFactory']
    UserWallet: SDK['v0_3_UserWallet']
    UserWalletConfig: SDK['v0_3_UserWalletConfig']
    Agent: SDK['v0_3_Agent']
    LegoRegistry: SDK['v0_3_LegoRegistry']
    OracleRegistry: SDK['v0_3_OracleRegistry']
    PriceSheets: SDK['v0_3_PriceSheets']
    LegoHelper: SDK['v0_3_LegoHelper']
    ChainlinkFeeds: SDK['v0_3_ChainlinkFeeds']
    PythFeeds: SDK['v0_3_PythFeeds']
    StorkFeeds: SDK['v0_3_StorkFeeds']
    LegoAaveV3: SDK['v0_3_LegoAaveV3']
    LegoCompoundV3: SDK['v0_3_LegoCompoundV3']
    LegoEuler: SDK['v0_3_LegoEuler']
    LegoFluid: SDK['v0_3_LegoFluid']
    LegoMoonwell: SDK['v0_3_LegoMoonwell']
    LegoMorpho: SDK['v0_3_LegoMorpho']
    LegoSky: SDK['v0_3_LegoSky']
    LegoAeroClassic: SDK['v0_3_LegoAeroClassic']
    LegoAeroSlipstream: SDK['v0_3_LegoAeroSlipstream']
    LegoCurve: SDK['v0_3_LegoCurve']
    LegoUniswapV3: SDK['v0_3_LegoUniswapV3']
    LegoCredit: SDK['v0_3_LegoCredit']
    LegoYield: SDK['v0_3_LegoYield']
    LegoCommon: SDK['v0_3_LegoCommon']
    LegoDex: SDK['v0_3_LegoDex']
    OracleParser: SDK['v0_3_OracleParser']
  }
  helpers: {
    getSwapInstructionsAmountOut: (payload: {
      tokenIn: Address
      tokenOut: Address
      amountIn: bigint
      slippage: bigint
      includeLegoIds?: bigint[]
    }) => ReturnType<typeof legacyGetSwapInstructionsAmountOut>
    getSwapInstructionsAmountIn: (payload: {
      tokenIn: Address
      tokenOut: Address
      amountOut: bigint
      amountInAvailable: bigint
      slippage: bigint
      includeLegoIds?: bigint[]
    }) => ReturnType<typeof legacyGetSwapInstructionsAmountIn>
  }
}

export default function getLegacyContracts(sdk: SDK): LegacyContractsCollection {
  const contracts = sdk

  return {
    v0_1: {
      AddyRegistry: contracts.v0_1_AddyRegistry,
      AgentFactory: contracts.v0_1_AgentFactory,
      UserWallet: contracts.v0_1_UserWallet,
      UserWalletConfig: contracts.v0_1_UserWalletConfig,
      Agent: contracts.v0_1_Agent,
    },
    v0_2: {
      AddyRegistry: contracts.v0_2_AddyRegistry,
      AgentFactory: contracts.v0_2_AgentFactory,
      UserWallet: contracts.v0_2_UserWallet,
      UserWalletConfig: contracts.v0_2_UserWalletConfig,
      Agent: contracts.v0_2_Agent,
    },
    v0_3: {
      AddyRegistry: contracts.v0_3_AddyRegistry,
      AgentFactory: contracts.v0_3_AgentFactory,
      UserWallet: contracts.v0_3_UserWallet,
      UserWalletConfig: contracts.v0_3_UserWalletConfig,
      Agent: contracts.v0_3_Agent,
      LegoRegistry: contracts.v0_3_LegoRegistry,
      OracleRegistry: contracts.v0_3_OracleRegistry,
      PriceSheets: contracts.v0_3_PriceSheets,
      LegoHelper: contracts.v0_3_LegoHelper,
      ChainlinkFeeds: contracts.v0_3_ChainlinkFeeds,
      PythFeeds: contracts.v0_3_PythFeeds,
      StorkFeeds: contracts.v0_3_StorkFeeds,
      LegoAaveV3: contracts.v0_3_LegoAaveV3,
      LegoCompoundV3: contracts.v0_3_LegoCompoundV3,
      LegoEuler: contracts.v0_3_LegoEuler,
      LegoFluid: contracts.v0_3_LegoFluid,
      LegoMoonwell: contracts.v0_3_LegoMoonwell,
      LegoMorpho: contracts.v0_3_LegoMorpho,
      LegoSky: contracts.v0_3_LegoSky,
      LegoAeroClassic: contracts.v0_3_LegoAeroClassic,
      LegoAeroSlipstream: contracts.v0_3_LegoAeroSlipstream,
      LegoCurve: contracts.v0_3_LegoCurve,
      LegoUniswapV3: contracts.v0_3_LegoUniswapV3,
      LegoCredit: contracts.v0_3_LegoCredit,
      LegoYield: contracts.v0_3_LegoYield,
      LegoCommon: contracts.v0_3_LegoCommon,
      LegoDex: contracts.v0_3_LegoDex,
      OracleParser: contracts.v0_3_OracleParser,
    },
    helpers: {
      getSwapInstructionsAmountOut: (payload: {
        tokenIn: Address
        tokenOut: Address
        amountIn: bigint
        slippage: bigint
        includeLegoIds?: bigint[]
      }) => legacyGetSwapInstructionsAmountOut(sdk.publicClient!, sdk.walletClient!.account!.address!, payload),
      getSwapInstructionsAmountIn: (payload: {
        tokenIn: Address
        tokenOut: Address
        amountOut: bigint
        amountInAvailable: bigint
        slippage: bigint
        includeLegoIds?: bigint[]
      }) => legacyGetSwapInstructionsAmountIn(sdk.publicClient!, sdk.walletClient!.account!.address!, payload),
    },
  }
}
