import { Address, PublicClient, WalletClient } from 'viem'

import createSdk, { SDK } from './contracts/sdk.js'
import { getSwapInstructionsAmountIn, getSwapInstructionsAmountOut } from './getSwapInstructions.js'

export * from './contracts/index.js'

export type ContractsCollection = {
  core: {
    UndyHq: SDK['UndyHq']
    UserWallet: SDK['UserWallet']
    UserWalletConfig: SDK['UserWalletConfig']
    Agent: SDK['Agent']
    Ledger: SDK['Ledger']
    MissionControl: SDK['MissionControl']
    Hatchery: SDK['Hatchery']
  }
  Legos: {
    LegoBook: SDK['LegoBook']
    LegoTools: SDK['LegoTools']
    yield: {
      AaveV3: SDK['AaveV3']
      CompoundV3: SDK['CompoundV3']
      Euler: SDK['Euler']
      Fluid: SDK['Fluid']
      Moonwell: SDK['Moonwell']
      Morpho: SDK['Morpho']
    }
    credit: {
      Ripe: SDK['RipeLego']
    }
    dex: {
      AeroClassic: SDK['AeroClassic']
      AeroSlipstream: SDK['AeroSlipstream']
      Curve: SDK['Curve']
      UniswapV2: SDK['UniswapV2']
      UniswapV3: SDK['UniswapV3']
    }
  }
  admin: {
    Switchboard: SDK['Switchboard']
    SwitchboardAlpha: SDK['SwitchboardAlpha']
    SwitchboardBravo: SDK['SwitchboardBravo']
  }
  other: {
    LootDistributor: SDK['LootDistributor']
    Appraiser: SDK['Appraiser']
    WalletBackpack: SDK['WalletBackpack']
    Kernel: SDK['Kernel']
    HighCommand: SDK['HighCommand']
    Paymaster: SDK['Paymaster']
    ChequeBook: SDK['ChequeBook']
    Migrator: SDK['Migrator']
    Sentinel: SDK['Sentinel']
    Billing: SDK['Billing']
    DefaultsBase: SDK['DefaultsBase']
  }
  helpers: {
    ERC20: SDK['ERC20']
    getSwapInstructionsAmountOut: (payload: {
      tokenIn: Address
      tokenOut: Address
      amountIn: bigint
      slippage: bigint
      includeLegoIds?: bigint[]
    }) => ReturnType<typeof getSwapInstructionsAmountOut>
    getSwapInstructionsAmountIn: (payload: {
      tokenIn: Address
      tokenOut: Address
      amountOut: bigint
      amountInAvailable: bigint
      slippage: bigint
      includeLegoIds?: bigint[]
    }) => ReturnType<typeof getSwapInstructionsAmountIn>
    SignatureHelper: SDK['SignatureHelper']
  }
}

export default function getContracts(publicClient: PublicClient, walletClient?: WalletClient): ContractsCollection {
  const contracts = createSdk(publicClient, walletClient)

  return {
    core: {
      UndyHq: contracts.UndyHq,
      UserWallet: contracts.UserWallet,
      UserWalletConfig: contracts.UserWalletConfig,
      Agent: contracts.Agent,
      Ledger: contracts.Ledger,
      MissionControl: contracts.MissionControl,
      Hatchery: contracts.Hatchery,
    },
    Legos: {
      LegoBook: contracts.LegoBook,
      LegoTools: contracts.LegoTools,
      yield: {
        AaveV3: contracts.AaveV3,
        CompoundV3: contracts.CompoundV3,
        Euler: contracts.Euler,
        Fluid: contracts.Fluid,
        Moonwell: contracts.Moonwell,
        Morpho: contracts.Morpho,
      },
      credit: {
        Ripe: contracts.RipeLego,
      },
      dex: {
        AeroClassic: contracts.AeroClassic,
        AeroSlipstream: contracts.AeroSlipstream,
        Curve: contracts.Curve,
        UniswapV2: contracts.UniswapV2,
        UniswapV3: contracts.UniswapV3,
      },
    },
    admin: {
      Switchboard: contracts.Switchboard,
      SwitchboardAlpha: contracts.SwitchboardAlpha,
      SwitchboardBravo: contracts.SwitchboardBravo,
    },
    other: {
      LootDistributor: contracts.LootDistributor,
      Appraiser: contracts.Appraiser,
      WalletBackpack: contracts.WalletBackpack,
      Kernel: contracts.Kernel,
      HighCommand: contracts.HighCommand,
      Paymaster: contracts.Paymaster,
      ChequeBook: contracts.ChequeBook,
      Migrator: contracts.Migrator,
      Sentinel: contracts.Sentinel,
      Billing: contracts.Billing,
      DefaultsBase: contracts.DefaultsBase,
    },
    helpers: {
      ERC20: contracts.ERC20,
      getSwapInstructionsAmountOut: (payload: {
        tokenIn: Address
        tokenOut: Address
        amountIn: bigint
        slippage: bigint
        includeLegoIds?: bigint[]
      }) => getSwapInstructionsAmountOut(publicClient, payload),
      getSwapInstructionsAmountIn: (payload: {
        tokenIn: Address
        tokenOut: Address
        amountOut: bigint
        amountInAvailable: bigint
        slippage: bigint
        includeLegoIds?: bigint[]
      }) => getSwapInstructionsAmountIn(publicClient, payload),
      SignatureHelper: contracts.SignatureHelper,
    },
  }
}
