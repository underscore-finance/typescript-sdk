export default {
  name: 'Underscore Finance',
  description: 'Underscore Finance',
  targetPath: './src/contracts',
  // eslint-disable-next-line no-undef
  etherscanApiKey: process.env.BASESCAN_API_KEY,
  etherscanApi: 'https://api.basescan.org',
  isModule: true,
  isSdk: true,
  contracts: {
    ERC20: {
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
    AddyRegistry: { address: '0x49B08551e452cA99da7dE9B3a60E39e5f10C13CD' },
    AgentFactory: { address: '0x7bA5A18b88fFc9bB569d5A7e311c1607a0737a25' },
    WalletFunds: { address: '0x6A5263B0645c7dFd2788eF46f95f210E947e0743' },
    WalletConfig: { address: '0x45D1a9429Fd603c13Cdab685dc2540f4F57Df464' },
    AgentTemplate: { address: '0x70418b3AAa1044eC8bFF6a461B4E43460bb5699E' },
    LegoRegistry: { address: '0x590504539913411CeF7fc1b3Fa49b06FE970c759' },
    OracleRegistry: { address: '0xc56add9377Bc3a39f1B928Abc7440E43B6b10e1f' },
    PriceSheets: { address: '0x59918c90eD44a3D7a72375f60C0148Ae18001ADC' },
    LegoHelper: { address: '0xd313d00cC5E2129799B90Ad538334BB19e17dfEd' },
    ChainlinkFeeds: { address: '0x6035ff5936563132caD931a3a2F328477372fb82' },
    PythFeeds: { address: '0xB8090783aBF7B6336121FAfd6c4aCa3C4516792D' },
    StorkFeeds: { address: '0x389e7d981A74cd957bf56d83cCB85e6fc9e9d9bD' },
    LegoAaveV3: { address: '0x904CCd911533259C1d6B4C50d87DE8130ABeb55D' },
    LegoCompoundV3: { address: '0x8546b0ad0C399930847ce725921DBE0F7c106aD9' },
    LegoEuler: { address: '0x38400f38E1e7E5d0c49C10a43c37a32977b62339' },
    LegoFluid: { address: '0xfC78950624d322D30D11aF8363BEB3BdA559FaB9' },
    LegoMoonwell: { address: '0xCAacba1b91F4004CCba7d3Ffea0CaAd7E588EEe4' },
    LegoMorpho: { address: '0x055104Bc79447c94655aABA432D60e0f2ab44cb3' },
    LegoSky: { address: '0x43bd7a38464179d56402341d03bF030BF3140D41' },
    LegoAeroClassic: { address: '0xdE426b4f9f6C6ed8D254b6363089597d9eb102A3' },
    LegoAeroSlipstream: { address: '0xD6A7aDdB5bCF306e9D5C0d431103C5641576bB90' },
    LegoCurve: { address: '0xEA11B89c506a1B4b2D214643d4019BBc64B92958' },
    LegoUniswapV2: { address: '0xFA56408A68ba9bF5Df0F1CF4187B7260fDf38fC4' },
    LegoUniswapV3: { address: '0x83C1864F112A9CD8b9e93c4a166F4d885244Eef3' },
  },
}
