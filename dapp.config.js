import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const Manifest = require('../underscore-protocol/migration_history/base-mainnet/v1.1/current-manifest.json')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { LevgVaultHelper, '40Acres': FortyAcres, Yo, Tokemak, ...rest } = Manifest.contracts
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
    ...rest,
    FortyAcres,
    UserWallet: {
      isTemplate: true,
      address: Manifest.contracts.UserWallet.address,
      abi: Manifest.contracts.UserWallet.abi,
    },
    UserWalletConfig: {
      isTemplate: true,
      address: Manifest.contracts.UserWalletConfig.address,
      abi: Manifest.contracts.UserWalletConfig.abi,
    },
    UserWalletConfigV1: {
      isTemplate: true,
      address: '0xbF7bAdf4c71102cA49b3f82D50348256cE6C10Fb',
    },
    UserWalletV1: {
      isTemplate: true,
      address: '0x880E453Ec494FB17bffba537BeaB4Cc6CD1B7C12',
    },
    AgentWrapperV1: {
      isTemplate: true,
      address: '0x9d3F593380875860cC18F5736373ae4B084Ba2F9',
    },
    AgentWrapperV2: {
      isTemplate: true,
      address: '0x761fCDFfF8B187901eA11415237632A3F7E0203B',
    },
    AgentWrapperV3: {
      isTemplate: true,
      address: '0x88C8fe579aE5880612447c1B493C7Dcb9aaa40DF',
    },
    AgentWrapper: {
      isTemplate: true,
      ...Manifest.contracts.AgentWrapper,
    },
    SignatureHelperV1: {
      address: '0x7a938DEd840172e89ef3B90039959E51C1dC6893',
      isTemplate: true,
      ...Manifest.contracts.SignatureHelper,
    },
    SignatureHelperV2: {
      address: '0x4586793C8a53bdcE44E8726d4eFeDAC35EdAbd4c',
      isTemplate: true,
    },
    UserWalletSignatureHelperV1: {
      address: '0xeB92CB0f7E7c8131F683CC521B572E10B88bFFe1',
      isTemplate: true,
    },
    UserWalletSignatureHelper: {
      isTemplate: true,
      ...Manifest.contracts.UserWalletSignatureHelper,
    },
    AgentSenderSpecialSigHelperV1: {
      isTemplate: true,
      address: '0xB9d44E8b964466A2bB1BE747F2e92CD03c4b6D9a',
    },
    AgentSenderSpecialSigHelper: {
      isTemplate: true,
      ...Manifest.contracts.AgentSenderSpecialSigHelper,
    },
    AgentSenderSpecialV1: {
      isTemplate: true,
      address: '0xF02Bc5c9a1A57015C09c4e1B89A273a2849874D3',
    },
    AgentSenderSpecial: {
      isTemplate: true,
      ...Manifest.contracts.AgentSenderSpecial,
    },
    AgentSenderGenericV1: {
      isTemplate: true,
      address: '0xcc36a56febb60b304735914649f3669f5102784b',
    },
    AgentSenderGeneric: {
      isTemplate: true,
      ...Manifest.contracts.AgentSenderGeneric,
    },
    ERC20: {
      isTemplate: true,
      abi: [
        {
          type: 'event',
          name: 'Transfer',
          inputs: [
            {
              name: 'sender',
              type: 'address',
              indexed: true,
            },
            {
              name: 'receiver',
              type: 'address',
              indexed: true,
            },
            {
              name: 'amount',
              type: 'uint256',
              indexed: false,
            },
          ],
          anonymous: false,
        },
        {
          type: 'event',
          name: 'Approval',
          inputs: [
            {
              name: 'owner',
              type: 'address',
              indexed: true,
            },
            {
              name: 'spender',
              type: 'address',
              indexed: true,
            },
            {
              name: 'amount',
              type: 'uint256',
              indexed: false,
            },
          ],
          anonymous: false,
        },
        {
          type: 'function',
          name: 'name',
          stateMutability: 'pure',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'string',
            },
          ],
        },
        {
          type: 'function',
          name: 'symbol',
          stateMutability: 'pure',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'string',
            },
          ],
        },
        {
          type: 'function',
          name: 'decimals',
          stateMutability: 'pure',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'uint8',
            },
          ],
        },
        {
          type: 'function',
          name: 'transfer',
          stateMutability: 'nonpayable',
          inputs: [
            {
              name: '_recipient',
              type: 'address',
            },
            {
              name: '_amount',
              type: 'uint256',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'bool',
            },
          ],
        },
        {
          type: 'function',
          name: 'transferFrom',
          stateMutability: 'nonpayable',
          inputs: [
            {
              name: '_sender',
              type: 'address',
            },
            {
              name: '_recipient',
              type: 'address',
            },
            {
              name: '_amount',
              type: 'uint256',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'bool',
            },
          ],
        },
        {
          type: 'function',
          name: 'approve',
          stateMutability: 'nonpayable',
          inputs: [
            {
              name: '_spender',
              type: 'address',
            },
            {
              name: '_amount',
              type: 'uint256',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'bool',
            },
          ],
        },
        {
          type: 'function',
          name: 'permit',
          stateMutability: 'nonpayable',
          inputs: [
            {
              name: '_owner',
              type: 'address',
            },
            {
              name: '_spender',
              type: 'address',
            },
            {
              name: '_amount',
              type: 'uint256',
            },
            {
              name: '_expiry',
              type: 'uint256',
            },
            {
              name: '_signature',
              type: 'bytes',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'bool',
            },
          ],
        },
        {
          type: 'function',
          name: 'totalSupply',
          stateMutability: 'view',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'uint256',
            },
          ],
        },
        {
          type: 'function',
          name: 'balanceOf',
          stateMutability: 'view',
          inputs: [
            {
              name: 'arg0',
              type: 'address',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'uint256',
            },
          ],
        },
        {
          type: 'function',
          name: 'allowance',
          stateMutability: 'view',
          inputs: [
            {
              name: 'arg0',
              type: 'address',
            },
            {
              name: 'arg1',
              type: 'address',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'uint256',
            },
          ],
        },
        {
          type: 'function',
          name: 'nonces',
          stateMutability: 'view',
          inputs: [
            {
              name: 'arg0',
              type: 'address',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'uint256',
            },
          ],
        },
        {
          type: 'function',
          name: 'DOMAIN_SEPARATOR',
          stateMutability: 'view',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'bytes32',
            },
          ],
        },
      ],
    },
    EarnVault: {
      isTemplate: true,
      address: Manifest.contracts.UndyUsd.address,
    },
    LevgVault: {
      isTemplate: true,
      address: '0x936c3C493Dc45D0f4D2FA36C7640f3BCABd64B4B',
    },
    LevgVaultHelper: {
      ...LevgVaultHelper,
      isTemplate: true,
    },
  },
}
