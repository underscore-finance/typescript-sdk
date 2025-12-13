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
    UserWalletV1: {
      isTemplate: true,
      address: '0x880E453Ec494FB17bffba537BeaB4Cc6CD1B7C12',
    },
    UserWalletConfigV1: {
      isTemplate: true,
      address: '0x0E7064202c4F906Adc4D9F6D3C92470b62F624F1',
    },
    AgentWrapperV1: {
      address: '0x9d3F593380875860cC18F5736373ae4B084Ba2F9',
    },
    SignatureHelperV1: {
      ...Manifest.contracts.SignatureHelper,
      address: '0x7a938DEd840172e89ef3B90039959E51C1dC6893',
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
