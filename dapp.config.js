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
    AddyRegistry: '0x49B08551e452cA99da7dE9B3a60E39e5f10C13CD',
    AgentFactory: '0x7bA5A18b88fFc9bB569d5A7e311c1607a0737a25',
    WalletFunds: '0x6A5263B0645c7dFd2788eF46f95f210E947e0743',
    WalletConfig: '0x45D1a9429Fd603c13Cdab685dc2540f4F57Df464',
    AgentTemplate: '0x70418b3AAa1044eC8bFF6a461B4E43460bb5699E',
    LegoRegistry: '0x590504539913411CeF7fc1b3Fa49b06FE970c759',
    OracleRegistry: '0xc56add9377Bc3a39f1B928Abc7440E43B6b10e1f',
    PriceSheets: '0x59918c90eD44a3D7a72375f60C0148Ae18001ADC',
    LegoHelper: '0xd313d00cC5E2129799B90Ad538334BB19e17dfEd',
    ChainlinkFeeds: '0x6035ff5936563132caD931a3a2F328477372fb82',
    PythFeeds: '0xB8090783aBF7B6336121FAfd6c4aCa3C4516792D',
    StorkFeeds: '0x389e7d981A74cd957bf56d83cCB85e6fc9e9d9bD',
    LegoAaveV3: '0x904CCd911533259C1d6B4C50d87DE8130ABeb55D',
    LegoCompoundV3: '0x8546b0ad0C399930847ce725921DBE0F7c106aD9',
    LegoEuler: '0x38400f38E1e7E5d0c49C10a43c37a32977b62339',
    LegoFluid: '0xfC78950624d322D30D11aF8363BEB3BdA559FaB9',
    LegoMoonwell: '0xCAacba1b91F4004CCba7d3Ffea0CaAd7E588EEe4',
    LegoMorpho: '0x055104Bc79447c94655aABA432D60e0f2ab44cb3',
    LegoSky: '0x43bd7a38464179d56402341d03bF030BF3140D41',
    LegoAeroClassic: '0xdE426b4f9f6C6ed8D254b6363089597d9eb102A3',
    LegoAeroSlipstream: '0xD6A7aDdB5bCF306e9D5C0d431103C5641576bB90',
    LegoCurve: '0xEA11B89c506a1B4b2D214643d4019BBc64B92958',
    LegoUniswapV2: '0xFA56408A68ba9bF5Df0F1CF4187B7260fDf38fC4',
    LegoUniswapV3: '0x83C1864F112A9CD8b9e93c4a166F4d885244Eef3',
  },
}
