import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const Manifest = require('../underscore-protocol/migration_history/base-mainnet/v1.1/current-manifest.json')

// These manifest-only entries are not part of the generated SDK surface.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { LevgVaultHelper, '40Acres': FortyAcres, Yo, Tokemak, ...rest } = Manifest.contracts

const PROTOCOL_ABI_ALIASES = {
  ERC20: 'Erc20Token',
  FortyAcres: '40Acres',
}

function protocolAbiPath(name) {
  return `../underscore-protocol/scripts/abis/${name}.json`
}

function protocolAbi(name) {
  return require(protocolAbiPath(name))
}

function protocolAbiNameFor(contractName) {
  const protocolName = PROTOCOL_ABI_ALIASES[contractName] ?? contractName
  try {
    require.resolve(protocolAbiPath(protocolName))
    return protocolName
  } catch {
    return undefined
  }
}

function withProtocolAbi(contractName, baseContract = {}, protocolName = protocolAbiNameFor(contractName)) {
  if (!protocolName) return baseContract
  return {
    ...baseContract,
    abi: protocolAbi(protocolName),
  }
}

function withCurrentProtocolAbis(contracts) {
  return Object.fromEntries(
    Object.entries(contracts).map(([contractName, contract]) => [
      contractName,
      withProtocolAbi(contractName, contract),
    ]),
  )
}

function protocolTemplate(name) {
  return {
    isTemplate: true,
    abi: protocolAbi(name),
  }
}

export default {
  name: 'Underscore Finance',
  description: 'Underscore Finance',
  targetPath: './src/contracts',
  chainId: 8453,
  isModule: true,
  isSdk: true,
  package: {
    source: './src',
    protocol: {
      name: 'Underscore Finance',
      description: 'SDK for interacting with Underscore Finance smart contracts',
      website: 'https://underscore.finance',
      repo: 'https://github.com/underscore-finance/typescript-sdk',
    },
  },
  contracts: {
    ...withCurrentProtocolAbis(rest),
    Addys: protocolTemplate('Addys'),
    AgentSenderSpecialAdmin: protocolTemplate('AgentSenderSpecialAdmin'),
    DefaultsLocal: protocolTemplate('DefaultsLocal'),
    EarnVaultWallet: protocolTemplate('EarnVaultWallet'),
    Erc20Token: protocolTemplate('Erc20Token'),
    FortyAcres: withProtocolAbi('FortyAcres', FortyAcres),
    LevgVaultWallet: protocolTemplate('LevgVaultWallet'),
    LocalGov: protocolTemplate('LocalGov'),
    Ownership: protocolTemplate('Ownership'),
    UndyToken: protocolTemplate('UndyToken'),
    VaultErc20Token: protocolTemplate('VaultErc20Token'),

    // Keep the historical SDK export name while sourcing the current protocol ABI.
    ERC20: protocolTemplate('Erc20Token'),

    UserWallet: withProtocolAbi('UserWallet', {
      isTemplate: true,
      address: Manifest.contracts.UserWallet.address,
    }),
    UserWalletConfig: withProtocolAbi('UserWalletConfig', {
      isTemplate: true,
      address: Manifest.contracts.UserWalletConfig.address,
    }),
    ChequeBook: withProtocolAbi('ChequeBook', Manifest.contracts.ChequeBook),

    UserWalletV1: {
      isTemplate: true,
      address: '0x880E453Ec494FB17bffba537BeaB4Cc6CD1B7C12',
    },
    UserWalletConfigV1: {
      isTemplate: true,
      address: '0x0E7064202c4F906Adc4D9F6D3C92470b62F624F1',
    },
    AgentWrapperV1: {
      isTemplate: true,
      address: '0x9d3F593380875860cC18F5736373ae4B084Ba2F9',
    },
    AgentWrapperV2: {
      isTemplate: true,
      address: '0x761fCDFfF8B187901eA11415237632A3F7E0203B',
    },
    AgentWrapper: withProtocolAbi('AgentWrapper', {
      isTemplate: true,
      ...Manifest.contracts.AgentWrapper,
    }),
    SignatureHelperV1: {
      address: '0x7a938DEd840172e89ef3B90039959E51C1dC6893',
      isTemplate: true,
      ...Manifest.contracts.SignatureHelper,
    },
    UserWalletSignatureHelper: withProtocolAbi('UserWalletSignatureHelper', {
      isTemplate: true,
      ...Manifest.contracts.UserWalletSignatureHelper,
    }),
    AgentSenderSpecialSigHelper: withProtocolAbi('AgentSenderSpecialSigHelper', {
      isTemplate: true,
      ...Manifest.contracts.AgentSenderSpecialSigHelper,
    }),
    AgentSenderSpecial: withProtocolAbi('AgentSenderSpecial', {
      isTemplate: true,
      ...Manifest.contracts.AgentSenderSpecial,
    }),
    AgentSenderGeneric: withProtocolAbi('AgentSenderGeneric', {
      isTemplate: true,
      ...Manifest.contracts.AgentSenderGeneric,
    }),
    EarnVault: withProtocolAbi('EarnVault', {
      isTemplate: true,
      address: Manifest.contracts.UndyUsd.address,
    }),
    LevgVault: withProtocolAbi('LevgVault', {
      isTemplate: true,
      address: '0x936c3C493Dc45D0f4D2FA36C7640f3BCABd64B4B',
    }),
    LevgVaultHelper: withProtocolAbi('LevgVaultHelper', {
      ...LevgVaultHelper,
      isTemplate: true,
    }),
  },
}
