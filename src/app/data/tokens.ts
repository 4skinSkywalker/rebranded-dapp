import { Token } from "../components/modals/token-selector/token";

let ETHEREUM_MAINNET: Token[] = [
  {
      "name": "Ethereum",
      "symbol": "ETH",
      "thumb": "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
      "address": "0x0000000000000000000000000000000000000000",
      "decimals": 18,
      "isBase": true
  },
  {
      "name": "Ethbox Token",
      "symbol": "ebox",
      "thumb": "https://assets.coingecko.com/coins/images/14528/thumb/ethbox.PNG",
      "address": "0x33840024177A7DacA3468912363BeD8b425015c5",
      "decimals": 18
  },
  {
      "name": "USD Tether",
      "symbol": "usdt",
      "thumb": "https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png",
      "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      "decimals": 6
  },
  {
      "name": "Uniswap",
      "symbol": "uni",
      "thumb": "https://assets.coingecko.com/coins/images/12504/thumb/uniswap-uni.png",
      "address": "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
      "decimals": 18
  },
  {
      "name": "Chainlink",
      "symbol": "link",
      "thumb": "https://assets.coingecko.com/coins/images/877/thumb/chainlink-new-logo.png",
      "address": "0x514910771AF9Ca656af840dff83E8264EcF986CA",
      "decimals": 18
  },
  {
      "name": "USD Coin",
      "symbol": "usdc",
      "thumb": "https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png",
      "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      "decimals": 6
  },
  {
      "name": "Wrapped Bitcoin",
      "symbol": "wbtc",
      "thumb": "https://assets.coingecko.com/coins/images/7598/thumb/wrapped_bitcoin_wbtc.png",
      "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      "decimals": 8
  },
  {
      "name": "Binance USD",
      "symbol": "busd",
      "thumb": "https://assets.coingecko.com/coins/images/9576/thumb/BUSD.png",
      "address": "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
      "decimals": 18
  },
  {
      "name": "OKB",
      "symbol": "okb",
      "thumb": "https://assets.coingecko.com/coins/images/4463/thumb/okb_token.png",
      "address": "0x75231F58b43240C9718Dd58B4967c5114342a86c",
      "decimals": 18
  },
  {
      "name": "Crypto.com Coin",
      "symbol": "cro",
      "thumb": "https://assets.coingecko.com/coins/images/7310/thumb/cypto.png",
      "address": "0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b",
      "decimals": 8
  },
  {
      "name": "Aave",
      "symbol": "aave",
      "thumb": "https://assets.coingecko.com/coins/images/12645/thumb/AAVE.png",
      "address": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
      "decimals": 18
  },
  {
      "name": "cUSDC",
      "symbol": "cusdc",
      "thumb": "https://assets.coingecko.com/coins/images/9442/thumb/Compound_USDC.png",
      "address": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
      "decimals": 8
  },
  {
      "name": "cETH",
      "symbol": "ceth",
      "thumb": "https://assets.coingecko.com/coins/images/10643/thumb/ceth2.JPG",
      "address": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
      "decimals": 8
  },
  {
      "name": "FTX Token",
      "symbol": "ftt",
      "thumb": "https://assets.coingecko.com/coins/images/9026/thumb/F.png",
      "address": "0x50D1c9771902476076eCFc8B2A83Ad6b9355a4c9",
      "decimals": 18
  },
  {
      "name": "Maker",
      "symbol": "mkr",
      "thumb": "https://assets.coingecko.com/coins/images/1364/thumb/Mark_Maker.png",
      "address": "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
      "decimals": 18
  },
  {
      "name": "Huobi Token",
      "symbol": "ht",
      "thumb": "https://assets.coingecko.com/coins/images/2822/thumb/huobi-token-logo.png",
      "address": "0x6f259637dcD74C767781E37Bc6133cd6A68aa161",
      "decimals": 18
  },
  {
      "name": "Dai",
      "symbol": "dai",
      "thumb": "https://assets.coingecko.com/coins/images/9956/thumb/dai-multi-collateral-mcd.png",
      "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      "decimals": 18
  },
  {
      "name": "cDAI",
      "symbol": "cdai",
      "thumb": "https://assets.coingecko.com/coins/images/9281/thumb/cDAI.png",
      "address": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
      "decimals": 8
  },
  {
      "name": "Compound",
      "symbol": "comp",
      "thumb": "https://assets.coingecko.com/coins/images/10775/thumb/COMP.png",
      "address": "0xc00e94Cb662C3520282E6f5717214004A7f26888",
      "decimals": 18
  },
  {
      "name": "Chiliz",
      "symbol": "chz",
      "thumb": "https://assets.coingecko.com/coins/images/8834/thumb/Chiliz.png",
      "address": "0x3506424F91fD33084466F402d5D97f05F8e3b4AF",
      "decimals": 18
  },
  {
      "name": "Synthetix Network Token",
      "symbol": "snx",
      "thumb": "https://assets.coingecko.com/coins/images/3406/thumb/SNX.png",
      "address": "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
      "decimals": 18
  },
  {
      "name": "Holo",
      "symbol": "hot",
      "thumb": "https://assets.coingecko.com/coins/images/3348/thumb/Holologo_Profile.png",
      "address": "0x6c6EE5e31d828De241282B9606C8e98Ea48526E2",
      "decimals": 18
  },
  {
      "name": "Celsius Network",
      "symbol": "cel",
      "thumb": "https://assets.coingecko.com/coins/images/3263/thumb/CEL_logo.png",
      "address": "0xaaAEBE6Fe48E54f431b0C390CfaF0b017d09D42d",
      "decimals": 4
  },
  {
      "name": "LEO Token",
      "symbol": "leo",
      "thumb": "https://assets.coingecko.com/coins/images/8418/thumb/leo-token.png",
      "address": "0x2AF5D2aD76741191D15Dfe7bF6aC92d4Bd912Ca3",
      "decimals": 18
  },
  {
      "name": "Enjin Coin",
      "symbol": "enj",
      "thumb": "https://assets.coingecko.com/coins/images/1102/thumb/enjin-coin-logo.png",
      "address": "0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c",
      "decimals": 18
  },
  {
      "name": "NEXO",
      "symbol": "nexo",
      "thumb": "https://assets.coingecko.com/coins/images/3695/thumb/nexo.png",
      "address": "0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206",
      "decimals": 18
  },
  {
      "name": "Polygon",
      "symbol": "matic",
      "thumb": "https://assets.coingecko.com/coins/images/4713/thumb/matic___polygon.jpg",
      "address": "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
      "decimals": 18
  },
  {
      "name": "Sushi",
      "symbol": "sushi",
      "thumb": "https://assets.coingecko.com/coins/images/12271/thumb/512x512_Logo_no_chop.png",
      "address": "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
      "decimals": 18
  },
  {
      "name": "TerraUSD",
      "symbol": "ust",
      "thumb": "https://assets.coingecko.com/coins/images/12681/thumb/UST.png",
      "address": "0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
      "decimals": 18
  },
  {
      "name": "The Graph",
      "symbol": "grt",
      "thumb": "https://assets.coingecko.com/coins/images/13397/thumb/Graph_Token.png",
      "address": "0xc944E90C64B2c07662A292be6244BDf05Cda44a7",
      "decimals": 18
  },
  {
      "name": "Amp",
      "symbol": "amp",
      "thumb": "https://assets.coingecko.com/coins/images/12409/thumb/amp-200x200.png",
      "address": "0xfF20817765cB7f73d4bde2e66e067E58D11095C2",
      "decimals": 18
  },
  {
      "name": "Fei Protocol",
      "symbol": "fei",
      "thumb": "https://assets.coingecko.com/coins/images/14570/thumb/ZqsF51Re_400x400.png",
      "address": "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
      "decimals": 18
  },
  {
      "name": "yearn.finance",
      "symbol": "yfi",
      "thumb": "https://assets.coingecko.com/coins/images/11849/thumb/yfi-192x192.png",
      "address": "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
      "decimals": 18
  },
  {
      "name": "Decentraland",
      "symbol": "mana",
      "thumb": "https://assets.coingecko.com/coins/images/878/thumb/decentraland-mana.png",
      "address": "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
      "decimals": 18
  },
  {
      "name": "Basic Attention Token",
      "symbol": "bat",
      "thumb": "https://assets.coingecko.com/coins/images/677/thumb/basic-attention-token.png",
      "address": "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
      "decimals": 18
  },
  {
      "name": "UMA",
      "symbol": "uma",
      "thumb": "https://assets.coingecko.com/coins/images/10951/thumb/UMA.png",
      "address": "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
      "decimals": 18
  },
  {
      "name": "Huobi BTC",
      "symbol": "hbtc",
      "thumb": "https://assets.coingecko.com/coins/images/12407/thumb/Unknown-5.png",
      "address": "0x0316EB71485b0Ab14103307bf65a021042c6d380",
      "decimals": 18
  },
  {
      "name": "Liquity USD",
      "symbol": "lusd",
      "thumb": "https://assets.coingecko.com/coins/images/14666/thumb/Group_3.png",
      "address": "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
      "decimals": 18
  },
  {
      "name": "Waves",
      "symbol": "waves",
      "thumb": "https://assets.coingecko.com/coins/images/425/thumb/waves.png",
      "address": "0x1cF4592ebfFd730c7dc92c1bdFFDfc3B9EfCf29a",
      "decimals": 18
  },
  {
      "name": "0x",
      "symbol": "zrx",
      "thumb": "https://assets.coingecko.com/coins/images/863/thumb/0x.png",
      "address": "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
      "decimals": 18
  },
  {
      "name": "Reserve Rights Token",
      "symbol": "rsr",
      "thumb": "https://assets.coingecko.com/coins/images/8365/thumb/Reserve_Rights.png",
      "address": "0x8762db106B2c2A0bccB3A80d1Ed41273552616E8",
      "decimals": 18
  },
  {
      "name": "Bancor Network Token",
      "symbol": "bnt",
      "thumb": "https://assets.coingecko.com/coins/images/736/thumb/bancor.png",
      "address": "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C",
      "decimals": 18
  },
  {
      "name": "Paxos Standard",
      "symbol": "pax",
      "thumb": "https://assets.coingecko.com/coins/images/6013/thumb/paxos_standard.png",
      "address": "0x8E870D67F660D95d5be530380D0eC0bd388289E1",
      "decimals": 18
  },
  {
      "name": "SwissBorg",
      "symbol": "chsb",
      "thumb": "https://assets.coingecko.com/coins/images/2117/thumb/YJUrRy7r_400x400.png",
      "address": "0xba9d4199faB4f26eFE3551D490E3821486f135Ba",
      "decimals": 8
  },
  {
      "name": "OMG Network",
      "symbol": "omg",
      "thumb": "https://assets.coingecko.com/coins/images/776/thumb/OMG_Network.jpg",
      "address": "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
      "decimals": 18
  },
  {
      "name": "Ankr",
      "symbol": "ankr",
      "thumb": "https://assets.coingecko.com/coins/images/4324/thumb/U85xTl2.png",
      "address": "0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4",
      "decimals": 18
  },
  {
      "name": "KuCoin Token",
      "symbol": "kcs",
      "thumb": "https://assets.coingecko.com/coins/images/1047/thumb/sa9z79.png",
      "address": "0xf34960d9d60be18cC1D5Afc1A6F012A723a28811",
      "decimals": 6
  },
  {
      "name": "Fantom",
      "symbol": "ftm",
      "thumb": "https://assets.coingecko.com/coins/images/4001/thumb/Fantom.png",
      "address": "0x4E15361FD6b4BB609Fa63C81A2be19d873717870",
      "decimals": 18
  },
  {
      "name": "HUSD",
      "symbol": "husd",
      "thumb": "https://assets.coingecko.com/coins/images/9567/thumb/HUSD.jpg",
      "address": "0xdF574c24545E5FfEcb9a659c229253D4111d87e1",
      "decimals": 8
  },
  {
      "name": "Bitmax Token",
      "symbol": "btmx",
      "thumb": "https://assets.coingecko.com/coins/images/5003/thumb/BTMX.jpg",
      "address": "0xcca0c9c383076649604eE31b20248BC04FdF61cA",
      "decimals": 18
  },
  {
      "name": "Pundi X [OLD]",
      "symbol": "npxs",
      "thumb": "https://assets.coingecko.com/coins/images/2170/thumb/pundi-x.png",
      "address": "0xA15C7Ebe1f07CaF6bFF097D8a589fb8AC49Ae5B3",
      "decimals": 18
  },
  {
      "name": "Curve DAO Token",
      "symbol": "crv",
      "thumb": "https://assets.coingecko.com/coins/images/12124/thumb/Curve.png",
      "address": "0xD533a949740bb3306d119CC777fa900bA034cd52",
      "decimals": 18
  },
  {
      "name": "Pundi X",
      "symbol": "pundix",
      "thumb": "https://assets.coingecko.com/coins/images/14571/thumb/vDyefsXq_400x400.jpg",
      "address": "0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38",
      "decimals": 18
  },
  {
      "name": "xSUSHI",
      "symbol": "xsushi",
      "thumb": "https://assets.coingecko.com/coins/images/13725/thumb/xsushi.png",
      "address": "0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272",
      "decimals": 18
  },
  {
      "name": "1inch",
      "symbol": "1inch",
      "thumb": "https://assets.coingecko.com/coins/images/13469/thumb/1inch-token.png",
      "address": "0x111111111117dC0aa78b770fA6A738034120C302",
      "decimals": 18
  },
  {
      "name": "REN",
      "symbol": "ren",
      "thumb": "https://assets.coingecko.com/coins/images/3139/thumb/REN.png",
      "address": "0x408e41876cCCDC0F92210600ef50372656052a38",
      "decimals": 18
  },
  {
      "name": "Livepeer",
      "symbol": "lpt",
      "thumb": "https://assets.coingecko.com/coins/images/7137/thumb/logo-circle-green.png",
      "address": "0x58b6A8A3302369DAEc383334672404Ee733aB239",
      "decimals": 18
  },
  {
      "name": "Dent",
      "symbol": "dent",
      "thumb": "https://assets.coingecko.com/coins/images/1152/thumb/gLCEA2G.png",
      "address": "0x3597bfD533a99c9aa083587B074434E61Eb0A258",
      "decimals": 8
  },
  {
      "name": "Voyager Token",
      "symbol": "vgx",
      "thumb": "https://assets.coingecko.com/coins/images/794/thumb/Voyager-vgx.png",
      "address": "0x5Af2Be193a6ABCa9c8817001F45744777Db30756",
      "decimals": 8
  },
  {
      "name": "Bounce [old]",
      "symbol": "bot",
      "thumb": "https://assets.coingecko.com/coins/images/11984/thumb/photo_2020-10-19_09.17.57.jpeg",
      "address": "0x5bEaBAEBB3146685Dd74176f68a0721F91297D37",
      "decimals": 18
  },
  {
      "name": "Loopring",
      "symbol": "lrc",
      "thumb": "https://assets.coingecko.com/coins/images/913/thumb/LRC.png",
      "address": "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
      "decimals": 18
  },
  {
      "name": "Nexus Mutual",
      "symbol": "nxm",
      "thumb": "https://assets.coingecko.com/coins/images/11810/thumb/nexus-mutual.jpg",
      "address": "0xd7c49CEE7E9188cCa6AD8FF264C1DA2e69D4Cf3B",
      "decimals": 18
  },
  {
      "name": "renBTC",
      "symbol": "renbtc",
      "thumb": "https://assets.coingecko.com/coins/images/11370/thumb/renBTC.png",
      "address": "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
      "decimals": 8
  },
  {
      "name": "Status",
      "symbol": "SNT",
      "thumb": "https://assets.coingecko.com/coins/images/779/thumb/status.png",
      "address": "0x744d70FDBE2Ba4CF95131626614a1763DF805B9E",
      "decimals": 18
  },
  {
      "name": "Balancer",
      "symbol": "bal",
      "thumb": "https://assets.coingecko.com/coins/images/11683/thumb/Balancer.png",
      "address": "0xba100000625a3754423978a60c9317c58a424e3D",
      "decimals": 18
  },
  {
      "name": "Lido Staked Ether",
      "symbol": "steth",
      "thumb": "https://assets.coingecko.com/coins/images/13442/thumb/steth_logo.png",
      "address": "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
      "decimals": 18
  },
  {
      "name": "Oxygen",
      "symbol": "oxy",
      "thumb": "https://assets.coingecko.com/coins/images/13509/thumb/8DjBZ79V_400x400.jpg",
      "address": "0x965697b4ef02F0DE01384D0d4F9F782B1670c163",
      "decimals": 6
  },
  {
      "name": "cUSDT",
      "symbol": "cusdt",
      "thumb": "https://assets.coingecko.com/coins/images/11621/thumb/cUSDT.png",
      "address": "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
      "decimals": 8
  },
  {
      "name": "Mirror Protocol",
      "symbol": "mir",
      "thumb": "https://assets.coingecko.com/coins/images/13295/thumb/mirror_logo_transparent.png",
      "address": "0x09a3EcAFa817268f77BE1283176B946C4ff2E608",
      "decimals": 18
  },
  {
      "name": "GateToken",
      "symbol": "gt",
      "thumb": "https://assets.coingecko.com/coins/images/8183/thumb/gt.png",
      "address": "0xE66747a101bFF2dBA3697199DCcE5b743b454759",
      "decimals": 18
  },
  {
      "name": "Quant",
      "symbol": "qnt",
      "thumb": "https://assets.coingecko.com/coins/images/3370/thumb/5ZOu7brX_400x400.jpg",
      "address": "0x4a220E6096B25EADb88358cb44068A3248254675",
      "decimals": 18
  },
  {
      "name": "ZKSwap",
      "symbol": "zks",
      "thumb": "https://assets.coingecko.com/coins/images/13585/thumb/hfmvDpha_400x400.jpg",
      "address": "0xe4815AE53B124e7263F08dcDBBB757d41Ed658c6",
      "decimals": 18
  },
  {
      "name": "Tribe",
      "symbol": "tribe",
      "thumb": "https://assets.coingecko.com/coins/images/14575/thumb/tribe.PNG",
      "address": "0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B",
      "decimals": 18
  },
  {
      "name": "Ocean Protocol",
      "symbol": "ocean",
      "thumb": "https://assets.coingecko.com/coins/images/3687/thumb/ocean-protocol-logo.jpg",
      "address": "0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
      "decimals": 18
  },
  {
      "name": "Kyber Network Crystal Legacy",
      "symbol": "kncl",
      "thumb": "https://assets.coingecko.com/coins/images/947/thumb/logo-kncl.png",
      "address": "0xdd974D5C2e2928deA5F71b9825b8b646686BD200",
      "decimals": 18
  },
  {
      "name": "Axie Infinity",
      "symbol": "axs",
      "thumb": "https://assets.coingecko.com/coins/images/13029/thumb/axie_infinity_logo.png",
      "address": "0xF5D669627376EBd411E34b98F19C868c8ABA5ADA",
      "decimals": 18
  },
  {
      "name": "Band Protocol",
      "symbol": "band",
      "thumb": "https://assets.coingecko.com/coins/images/9545/thumb/band-protocol.png",
      "address": "0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55",
      "decimals": 18
  },
  {
      "name": "Reef Finance",
      "symbol": "reef",
      "thumb": "https://assets.coingecko.com/coins/images/13504/thumb/Group_10572.png",
      "address": "0xFE3E6a25e6b192A42a44ecDDCd13796471735ACf",
      "decimals": 18
  },
  {
      "name": "cUNI",
      "symbol": "cuni",
      "thumb": "https://assets.coingecko.com/coins/images/12696/thumb/compound-uni.png",
      "address": "0x35A18000230DA775CAc24873d00Ff85BccdeD550",
      "decimals": 8
  },
  {
      "name": "NKN",
      "symbol": "nkn",
      "thumb": "https://assets.coingecko.com/coins/images/3375/thumb/nkn.png",
      "address": "0x5Cf04716BA20127F1E2297AdDCf4B5035000c9eb",
      "decimals": 18
  },
  {
      "name": "Golem",
      "symbol": "glm",
      "thumb": "https://assets.coingecko.com/coins/images/542/thumb/Golem_Submark_Positive_RGB.png",
      "address": "0x7DD9c5Cba05E151C895FDe1CF355C9A1D5DA6429",
      "decimals": 18
  },
  {
      "name": "Tokamak Network",
      "symbol": "ton",
      "thumb": "https://assets.coingecko.com/coins/images/12260/thumb/D919x5-s_400x400.png",
      "address": "0x2be5e8c109e2197D077D13A82dAead6a9b3433C5",
      "decimals": 18
  },
  {
      "name": "StormX",
      "symbol": "stmx",
      "thumb": "https://assets.coingecko.com/coins/images/1369/thumb/StormX.png",
      "address": "0xbE9375C6a420D2eEB258962efB95551A5b722803",
      "decimals": 18
  },
  {
      "name": "DODO",
      "symbol": "dodo",
      "thumb": "https://assets.coingecko.com/coins/images/12651/thumb/dodo_logo.png",
      "address": "0x43Dfc4159D86F3A37A5A4B3D4580b888ad7d4DDd",
      "decimals": 18
  },
  {
      "name": "Numeraire",
      "symbol": "nmr",
      "thumb": "https://assets.coingecko.com/coins/images/752/thumb/numeraire.png",
      "address": "0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671",
      "decimals": 18
  },
  {
      "name": "Origin Protocol",
      "symbol": "ogn",
      "thumb": "https://assets.coingecko.com/coins/images/3296/thumb/op.jpg",
      "address": "0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26",
      "decimals": 18
  },
  {
      "name": "Ampleforth",
      "symbol": "ampl",
      "thumb": "https://assets.coingecko.com/coins/images/4708/thumb/Ampleforth.png",
      "address": "0xD46bA6D942050d489DBd938a2C909A5d5039A161",
      "decimals": 9
  },
  {
      "name": "Telcoin",
      "symbol": "tel",
      "thumb": "https://assets.coingecko.com/coins/images/1899/thumb/tel.png",
      "address": "0x467Bccd9d29f223BcE8043b84E8C8B282827790F",
      "decimals": 2
  },
  {
      "name": "Alpha Finance",
      "symbol": "alpha",
      "thumb": "https://assets.coingecko.com/coins/images/12738/thumb/AlphaToken_256x256.png",
      "address": "0xa1faa113cbE53436Df28FF0aEe54275c13B40975",
      "decimals": 18
  },
  {
      "name": "SKALE",
      "symbol": "skl",
      "thumb": "https://assets.coingecko.com/coins/images/13245/thumb/SKALE_token_300x300.png",
      "address": "0x00c83aeCC790e8a4453e5dD3B0B4b3680501a7A7",
      "decimals": 18
  },
  {
      "name": "Serum",
      "symbol": "srm",
      "thumb": "https://assets.coingecko.com/coins/images/11970/thumb/serum-logo.png",
      "address": "0x476c5E26a75bd202a9683ffD34359C0CC15be0fF",
      "decimals": 6
  },
  {
      "name": "RedFOX Labs",
      "symbol": "rfox",
      "thumb": "https://assets.coingecko.com/coins/images/12956/thumb/logo-200.png",
      "address": "0xa1d6Df714F91DeBF4e0802A542E13067f31b8262",
      "decimals": 18
  },
  {
      "name": "TrueUSD",
      "symbol": "tusd",
      "thumb": "https://assets.coingecko.com/coins/images/3449/thumb/tusd.png",
      "address": "0x0000000000085d4780B73119b644AE5ecd22b376",
      "decimals": 18
  },
  {
      "name": "Orbs",
      "symbol": "orbs",
      "thumb": "https://assets.coingecko.com/coins/images/4630/thumb/Orbs.jpg",
      "address": "0xff56Cc6b1E6dEd347aA0B7676C85AB0B3D08B0FA",
      "decimals": 18
  },
  {
      "name": "FUNToken",
      "symbol": "fun",
      "thumb": "https://assets.coingecko.com/coins/images/761/thumb/funfair.png",
      "address": "0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b",
      "decimals": 8
  },
  {
      "name": "Civic",
      "symbol": "cvc",
      "thumb": "https://assets.coingecko.com/coins/images/788/thumb/civic.png",
      "address": "0x41e5560054824eA6B0732E656E3Ad64E20e94E45",
      "decimals": 8
  },
  {
      "name": "Alien Worlds",
      "symbol": "tlm",
      "thumb": "https://assets.coingecko.com/coins/images/14676/thumb/kY-C4o7RThfWrDQsLCAG4q4clZhBDDfJQVhWUEKxXAzyQYMj4Jmq1zmFwpRqxhAJFPOa0AsW_PTSshoPuMnXNwq3rU7Imp15QimXTjlXMx0nC088mt1rIwRs75GnLLugWjSllxgzvQ9YrP4tBgclK4_rb17hjnusGj_c0u2fx0AvVokjSNB-v2poTj0xT9BZRCbzRE3-lF1.jpg",
      "address": "0x888888848B652B3E3a0f34c96E00EEC0F3a23F72",
      "decimals": 4
  },
  {
      "name": "SAND",
      "symbol": "sand",
      "thumb": "https://assets.coingecko.com/coins/images/12129/thumb/sandbox_logo.jpg",
      "address": "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
      "decimals": 18
  },
  {
      "name": "Wootrade Network",
      "symbol": "woo",
      "thumb": "https://assets.coingecko.com/coins/images/12921/thumb/w2UiemF__400x400.jpg",
      "address": "0x4691937a7508860F876c9c0a2a617E7d9E945D4B",
      "decimals": 18
  },
  {
      "name": "Swipe",
      "symbol": "sxp",
      "thumb": "https://assets.coingecko.com/coins/images/9368/thumb/swipe.png",
      "address": "0x8CE9137d39326AD0cD6491fb5CC0CbA0e089b6A9",
      "decimals": 18
  },
  {
      "name": "sETH",
      "symbol": "seth",
      "thumb": "https://assets.coingecko.com/coins/images/8843/thumb/sETH.png",
      "address": "0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb",
      "decimals": 18
  }
];

let ETHEREUM_TESTNET: Token[] = [
  {
    "name": "Ethereum",
    "symbol": "ETH",
    "thumb": "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
    "address": "0x0000000000000000000000000000000000000000",
    "decimals": 18,
    "isBase": true
  },
  {
    "name": "Test Token",
    "symbol": "AAA",
    "thumb": "assets/img/crash-test.png",
    "address": "0xB89f9673c46b126d7A0052D972cdB9C448f92D35",
    "decimals": 18
  },
  {
    "name": "Test Token",
    "symbol": "BBB",
    "thumb": "assets/img/crash-test.png",
    "address": "0x0b91f9d9657e8edc725a519BC9e9fB3C785815a0",
    "decimals": 18
  },
  {
    "name": "Test Token",
    "symbol": "CCC",
    "thumb": "assets/img/crash-test.png",
    "address": "0x4B73517Ae7Ac55B46b8B993A41842Af399fbfa25",
    "decimals": 18
  }
];

let BINANCE_MAINNET: Token[] = [
  {
    "name": "Binance Coin",
    "symbol": "BNB",
    "thumb": "https://v1exchange.pancakeswap.finance/images/coins/bnb.png",
    "address": "0x0000000000000000000000000000000000000000",
    "decimals": 18,
    "isBase": true
  },
  {
    "name": "Ethbox Token",
    "symbol": "ebox",
    "thumb": "https://assets.coingecko.com/coins/images/14528/thumb/ethbox.PNG",
    "address": "0x33840024177a7daca3468912363bed8b425015c5",
    "decimals": 18
  },
  {
    "name": "Wrapped BNB",
    "symbol": "WBNB",
    "thumb": "https://pancakeswap.finance/images/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.png",
    "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    "decimals": 18
  },
  {
    "name": "BUSD Token",
    "symbol": "BUSD",
    "thumb": "https://pancakeswap.finance/images/tokens/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56.png",
    "address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    "decimals": 18
  },
  {
    "name": "SafeMoon",
    "symbol": "SAFEMOON",
    "thumb": "https://pancakeswap.finance/images/tokens/0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3.png",
    "address": "0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3",
    "decimals": 9
  },
  {
    "name": "Tether USD",
    "symbol": "USDT",
    "thumb": "https://pancakeswap.finance/images/tokens/0x55d398326f99059fF775485246999027B3197955.png",
    "address": "0x55d398326f99059fF775485246999027B3197955",
    "decimals": 18
  },
  {
    "name": "BELT Token",
    "symbol": "BELT",
    "thumb": "https://pancakeswap.finance/images/tokens/0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f.png",
    "address": "0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f",
    "decimals": 18
  },
  {
    "name": "Ethereum Token",
    "symbol": "ETH",
    "thumb": "https://pancakeswap.finance/images/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8.png",
    "address": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
    "decimals": 18
  },
  {
    "name": "Bunny Token",
    "symbol": "BUNNY",
    "thumb": "https://pancakeswap.finance/images/tokens/0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51.png",
    "address": "0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51",
    "decimals": 18
  },
  {
    "name": "BTCB Token",
    "symbol": "BTCB",
    "thumb": "https://pancakeswap.finance/images/tokens/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c.png",
    "address": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
    "decimals": 18
  },
  {
    "name": "USD Coin",
    "symbol": "USDC",
    "thumb": "https://pancakeswap.finance/images/tokens/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d.png",
    "address": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
    "decimals": 18
  },
  {
    "name": "Dai Token",
    "symbol": "DAI",
    "thumb": "https://pancakeswap.finance/images/tokens/0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3.png",
    "address": "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
    "decimals": 18
  },
  {
    "name": "Polkadot Token",
    "symbol": "DOT",
    "thumb": "https://pancakeswap.finance/images/tokens/0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402.png",
    "address": "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
    "decimals": 18
  },
  {
    "name": "AUTOv2",
    "symbol": "AUTO",
    "thumb": "https://pancakeswap.finance/images/tokens/0xa184088a740c695E156F91f5cC086a06bb78b827.png",
    "address": "0xa184088a740c695E156F91f5cC086a06bb78b827",
    "decimals": 18
  },
  {
    "name": "VAI Stablecoin",
    "symbol": "VAI",
    "thumb": "https://pancakeswap.finance/images/tokens/0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7.png",
    "address": "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7",
    "decimals": 18
  },
  {
    "name": "Uniswap",
    "symbol": "UNI",
    "thumb": "https://pancakeswap.finance/images/tokens/0xBf5140A22578168FD562DCcF235E5D43A02ce9B1.png",
    "address": "0xBf5140A22578168FD562DCcF235E5D43A02ce9B1",
    "decimals": 18
  },
  {
    "name": "Wrapped UST Token",
    "symbol": "UST",
    "thumb": "https://pancakeswap.finance/images/tokens/0x23396cF899Ca06c4472205fC903bDB4de249D6fC.png",
    "address": "0x23396cF899Ca06c4472205fC903bDB4de249D6fC",
    "decimals": 18
  },
  {
    "name": "Cardano Token",
    "symbol": "ADA",
    "thumb": "https://pancakeswap.finance/images/tokens/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47.png",
    "address": "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47",
    "decimals": 18
  },
  {
    "name": "Ellipsis",
    "symbol": "EPS",
    "thumb": "https://pancakeswap.finance/images/tokens/0xA7f552078dcC247C2684336020c03648500C6d9F.png",
    "address": "0xA7f552078dcC247C2684336020c03648500C6d9F",
    "decimals": 18
  },
  {
    "name": "ChainLink Token",
    "symbol": "LINK",
    "thumb": "https://pancakeswap.finance/images/tokens/0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD.png",
    "address": "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD",
    "decimals": 18
  },
  {
    "name": "Helmet.insure Governance Token",
    "symbol": "Helmet",
    "thumb": "https://pancakeswap.finance/images/tokens/0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8.png",
    "address": "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
    "decimals": 18
  },
  {
    "name": "AlphaToken",
    "symbol": "ALPHA",
    "thumb": "https://pancakeswap.finance/images/tokens/0xa1faa113cbE53436Df28FF0aEe54275c13B40975.png",
    "address": "0xa1faa113cbE53436Df28FF0aEe54275c13B40975",
    "decimals": 18
  },
  {
    "name": "XRP Token",
    "symbol": "XRP",
    "thumb": "https://pancakeswap.finance/images/tokens/0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE.png",
    "address": "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE",
    "decimals": 18
  },
  {
    "name": "ElonGate",
    "symbol": "ElonGate",
    "thumb": "https://pancakeswap.finance/images/tokens/0x2A9718defF471f3Bb91FA0ECEAB14154F150a385.png",
    "address": "0x2A9718defF471f3Bb91FA0ECEAB14154F150a385",
    "decimals": 9
  },
  {
    "name": "Band Protocol Token",
    "symbol": "BAND",
    "thumb": "https://pancakeswap.finance/images/tokens/0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18.png",
    "address": "0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18",
    "decimals": 18
  },
  {
    "name": "Mobox",
    "symbol": "MBOX",
    "thumb": "https://pancakeswap.finance/images/tokens/0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377.png",
    "address": "0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377",
    "decimals": 18
  },
  {
    "name": "Binance Beacon ETH",
    "symbol": "BETH",
    "thumb": "https://pancakeswap.finance/images/tokens/0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B.png",
    "address": "0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B",
    "decimals": 18
  },
  {
    "name": "SafePal Token",
    "symbol": "SFP",
    "thumb": "https://pancakeswap.finance/images/tokens/0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb.png",
    "address": "0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb",
    "decimals": 18
  },
  {
    "name": "Venus",
    "symbol": "XVS",
    "thumb": "https://pancakeswap.finance/images/tokens/0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63.png",
    "address": "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63",
    "decimals": 18
  },
  {
    "name": "Swipe",
    "symbol": "SXP",
    "thumb": "https://pancakeswap.finance/images/tokens/0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A.png",
    "address": "0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A",
    "decimals": 18
  },
  {
    "name": "Wault Finance",
    "symbol": "WAULT",
    "thumb": "https://pancakeswap.finance/images/tokens/0x6Ff2d9e5891a7a7c554b80e0D1B791483C78BcE9.png",
    "address": "0x6Ff2d9e5891a7a7c554b80e0D1B791483C78BcE9",
    "decimals": 18
  },
  {
    "name": "BGOV Token",
    "symbol": "BGOV",
    "thumb": "https://pancakeswap.finance/images/tokens/0xf8E026dC4C0860771f691EcFFBbdfe2fa51c77CF.png",
    "address": "0xf8E026dC4C0860771f691EcFFBbdfe2fa51c77CF",
    "decimals": 18
  },
  {
    "name": "AlpacaToken",
    "symbol": "ALPACA",
    "thumb": "https://pancakeswap.finance/images/tokens/0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F.png",
    "address": "0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F",
    "decimals": 18
  },
  {
    "name": "Compound Coin",
    "symbol": "COMP",
    "thumb": "https://pancakeswap.finance/images/tokens/0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8.png",
    "address": "0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8",
    "decimals": 18
  },
  {
    "name": "Trust Wallet",
    "symbol": "TWT",
    "thumb": "https://pancakeswap.finance/images/tokens/0x4B0F1812e5Df2A09796481Ff14017e6005508003.png",
    "address": "0x4B0F1812e5Df2A09796481Ff14017e6005508003",
    "decimals": 18
  },
  {
    "name": "Woonkly Power",
    "symbol": "WOOP",
    "thumb": "https://pancakeswap.finance/images/tokens/0x8b303d5BbfBbf46F1a4d9741E491e06986894e18.png",
    "address": "0x8b303d5BbfBbf46F1a4d9741E491e06986894e18",
    "decimals": 18
  },
  {
    "name": "SushiToken",
    "symbol": "SUSHI",
    "thumb": "https://pancakeswap.finance/images/tokens/0x947950BcC74888a40Ffa2593C5798F11Fc9124C4.png",
    "address": "0x947950BcC74888a40Ffa2593C5798F11Fc9124C4",
    "decimals": 18
  },
  {
    "name": "Nerve",
    "symbol": "NRV",
    "thumb": "https://pancakeswap.finance/images/tokens/0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096.png",
    "address": "0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096",
    "decimals": 18
  },
  {
    "name": "Badger Sett Badger",
    "symbol": "bBADGER",
    "thumb": "https://pancakeswap.finance/images/tokens/0x1F7216fdB338247512Ec99715587bb97BBf96eae.png",
    "address": "0x1F7216fdB338247512Ec99715587bb97BBf96eae",
    "decimals": 18
  },
  {
    "name": "SafeMars",
    "symbol": "SAFEMARS",
    "thumb": "https://pancakeswap.finance/images/tokens/0x3aD9594151886Ce8538C1ff615EFa2385a8C3A88.png",
    "address": "0x3aD9594151886Ce8538C1ff615EFa2385a8C3A88",
    "decimals": 9
  },
  {
    "name": "DODO bird",
    "symbol": "DODO",
    "thumb": "https://pancakeswap.finance/images/tokens/0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2.png",
    "address": "0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2",
    "decimals": 18
  },
  {
    "name": "Litentry",
    "symbol": "LIT",
    "thumb": "https://pancakeswap.finance/images/tokens/0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723.png",
    "address": "0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723",
    "decimals": 18
  },
  {
    "name": "Reef.finance",
    "symbol": "REEF",
    "thumb": "https://pancakeswap.finance/images/tokens/0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e.png",
    "address": "0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e",
    "decimals": 18
  },
  {
    "name": "TokenPocket Token",
    "symbol": "TPT",
    "thumb": "https://pancakeswap.finance/images/tokens/0xECa41281c24451168a37211F0bc2b8645AF45092.png",
    "address": "0xECa41281c24451168a37211F0bc2b8645AF45092",
    "decimals": 4
  },
  {
    "name": "Wrapped SOTE",
    "symbol": "wSOTE",
    "thumb": "https://pancakeswap.finance/images/tokens/0x541E619858737031A1244A5d0Cd47E5ef480342c.png",
    "address": "0x541E619858737031A1244A5d0Cd47E5ef480342c",
    "decimals": 18
  },
  {
    "name": "Bella Protocol",
    "symbol": "BEL",
    "thumb": "https://pancakeswap.finance/images/tokens/0x8443f091997f06a61670B735ED92734F5628692F.png",
    "address": "0x8443f091997f06a61670B735ED92734F5628692F",
    "decimals": 18
  },
  {
    "name": "bDollar",
    "symbol": "BDO",
    "thumb": "https://pancakeswap.finance/images/tokens/0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454.png",
    "address": "0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454",
    "decimals": 18
  },
  {
    "name": "Goose Golden Egg",
    "symbol": "EGG",
    "thumb": "https://pancakeswap.finance/images/tokens/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6.png",
    "address": "0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6",
    "decimals": 18
  },
  {
    "name": "Berry Tributes",
    "symbol": "BRY",
    "thumb": "https://pancakeswap.finance/images/tokens/0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830.png",
    "address": "0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830",
    "decimals": 18
  },
  {
    "name": "Zilliqa",
    "symbol": "ZIL",
    "thumb": "https://pancakeswap.finance/images/tokens/0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787.png",
    "address": "0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787",
    "decimals": 12
  },
  {
    "name": "Fuel Token",
    "symbol": "Fuel",
    "thumb": "https://pancakeswap.finance/images/tokens/0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A.png",
    "address": "0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A",
    "decimals": 18
  },
  {
    "name": "Tokocrypto Token",
    "symbol": "TKO",
    "thumb": "https://pancakeswap.finance/images/tokens/0x9f589e3eabe42ebC94A44727b3f3531C0c877809.png",
    "address": "0x9f589e3eabe42ebC94A44727b3f3531C0c877809",
    "decimals": 18
  },
  {
    "name": "Switcheo Token",
    "symbol": "SWTH",
    "thumb": "https://pancakeswap.finance/images/tokens/0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C.png",
    "address": "0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C",
    "decimals": 8
  },
  {
    "name": "BSCX",
    "symbol": "BSCX",
    "thumb": "https://pancakeswap.finance/images/tokens/0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587.png",
    "address": "0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587",
    "decimals": 18
  },
  {
    "name": "SafeGalaxy",
    "symbol": "SAFEGALAXY",
    "thumb": "https://pancakeswap.finance/images/tokens/0x6b51231c43B1604815313801dB5E9E614914d6e4.png",
    "address": "0x6b51231c43B1604815313801dB5E9E614914d6e4",
    "decimals": 9
  },
  {
    "name": "StandardBTCHashrateToken",
    "symbol": "BTCST",
    "thumb": "https://pancakeswap.finance/images/tokens/0x78650B139471520656b9E7aA7A5e9276814a38e9.png",
    "address": "0x78650B139471520656b9E7aA7A5e9276814a38e9",
    "decimals": 17
  },
  {
    "name": "Injective Protocol",
    "symbol": "INJ",
    "thumb": "https://pancakeswap.finance/images/tokens/0xa2B726B1145A4773F68593CF171187d8EBe4d495.png",
    "address": "0xa2B726B1145A4773F68593CF171187d8EBe4d495",
    "decimals": 18
  },
  {
    "name": "Eleven.finance",
    "symbol": "ELE",
    "thumb": "https://pancakeswap.finance/images/tokens/0xAcD7B3D9c10e97d0efA418903C0c7669E702E4C0.png",
    "address": "0xAcD7B3D9c10e97d0efA418903C0c7669E702E4C0",
    "decimals": 18
  },
  {
    "name": "IoTeX Network",
    "symbol": "IOTX",
    "thumb": "https://pancakeswap.finance/images/tokens/0x9678E42ceBEb63F23197D726B29b1CB20d0064E5.png",
    "address": "0x9678E42ceBEb63F23197D726B29b1CB20d0064E5",
    "decimals": 18
  },
  {
    "name": "Linear Token",
    "symbol": "LINA",
    "thumb": "https://pancakeswap.finance/images/tokens/0x762539b45A1dCcE3D36d080F74d1AED37844b878.png",
    "address": "0x762539b45A1dCcE3D36d080F74d1AED37844b878",
    "decimals": 18
  },
  {
    "name": "Nominex",
    "symbol": "NMX",
    "thumb": "https://pancakeswap.finance/images/tokens/0xd32d01A43c869EdcD1117C640fBDcfCFD97d9d65.png",
    "address": "0xd32d01A43c869EdcD1117C640fBDcfCFD97d9d65",
    "decimals": 18
  },
  {
    "name": "SafeStar",
    "symbol": "SAFESTAR",
    "thumb": "https://pancakeswap.finance/images/tokens/0x3C00F8FCc8791fa78DAA4A480095Ec7D475781e2.png",
    "address": "0x3C00F8FCc8791fa78DAA4A480095Ec7D475781e2",
    "decimals": 9
  },
  {
    "name": "τBitcoin",
    "symbol": "τBTC",
    "thumb": "https://pancakeswap.finance/images/tokens/0x2cD1075682b0FCCaADd0Ca629e138E64015Ba11c.png",
    "address": "0x2cD1075682b0FCCaADd0Ca629e138E64015Ba11c",
    "decimals": 9
  },
  {
    "name": "dego.finance",
    "symbol": "DEGO",
    "thumb": "https://pancakeswap.finance/images/tokens/0x3FdA9383A84C05eC8f7630Fe10AdF1fAC13241CC.png",
    "address": "0x3FdA9383A84C05eC8f7630Fe10AdF1fAC13241CC",
    "decimals": 18
  },
  {
    "name": "OPEN Governance Token",
    "symbol": "bOPEN",
    "thumb": "https://pancakeswap.finance/images/tokens/0xF35262a9d427F96d2437379eF090db986eaE5d42.png",
    "address": "0xF35262a9d427F96d2437379eF090db986eaE5d42",
    "decimals": 18
  },
  {
    "name": "Cosmos Token",
    "symbol": "ATOM",
    "thumb": "https://pancakeswap.finance/images/tokens/0x0Eb3a705fc54725037CC9e008bDede697f62F335.png",
    "address": "0x0Eb3a705fc54725037CC9e008bDede697f62F335",
    "decimals": 18
  },
  {
    "name": "FOX",
    "symbol": "FOX",
    "thumb": "https://pancakeswap.finance/images/tokens/0xFAd8E46123D7b4e77496491769C167FF894d2ACB.png",
    "address": "0xFAd8E46123D7b4e77496491769C167FF894d2ACB",
    "decimals": 9
  },
  {
    "name": "beefy.finance",
    "symbol": "BIFI",
    "thumb": "https://pancakeswap.finance/images/tokens/0xCa3F508B8e4Dd382eE878A314789373D80A5190A.png",
    "address": "0xCa3F508B8e4Dd382eE878A314789373D80A5190A",
    "decimals": 18
  },
  {
    "name": "Badger Sett Digg",
    "symbol": "bDIGG",
    "thumb": "https://pancakeswap.finance/images/tokens/0x5986D5c77c65e5801a5cAa4fAE80089f870A71dA.png",
    "address": "0x5986D5c77c65e5801a5cAa4fAE80089f870A71dA",
    "decimals": 18
  },
  {
    "name": "ALICE",
    "symbol": "ALICE",
    "thumb": "https://pancakeswap.finance/images/tokens/0xAC51066d7bEC65Dc4589368da368b212745d63E8.png",
    "address": "0xAC51066d7bEC65Dc4589368da368b212745d63E8",
    "decimals": 6
  },
  {
    "name": "Standard on xDai on BSC",
    "symbol": "xMARK",
    "thumb": "https://pancakeswap.finance/images/tokens/0x26A5dFab467d4f58fB266648CAe769503CEC9580.png",
    "address": "0x26A5dFab467d4f58fB266648CAe769503CEC9580",
    "decimals": 9
  },
  {
    "name": "SWINGBY token",
    "symbol": "SWINGBY",
    "thumb": "https://pancakeswap.finance/images/tokens/0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739.png",
    "address": "0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739",
    "decimals": 18
  },
  {
    "name": "Nuls",
    "symbol": "NULS",
    "thumb": "https://pancakeswap.finance/images/tokens/0x8CD6e29d3686d24d3C2018CEe54621eA0f89313B.png",
    "address": "0x8CD6e29d3686d24d3C2018CEe54621eA0f89313B",
    "decimals": 8
  },
  {
    "name": "Bogged Finance",
    "symbol": "BOG",
    "thumb": "https://pancakeswap.finance/images/tokens/0xD7B729ef857Aa773f47D37088A1181bB3fbF0099.png",
    "address": "0xD7B729ef857Aa773f47D37088A1181bB3fbF0099",
    "decimals": 18
  },
  {
    "name": "RAMP DEFI",
    "symbol": "RAMP",
    "thumb": "https://pancakeswap.finance/images/tokens/0x8519EA49c997f50cefFa444d240fB655e89248Aa.png",
    "address": "0x8519EA49c997f50cefFa444d240fB655e89248Aa",
    "decimals": 18
  },
  {
    "name": "Frontier Token",
    "symbol": "FRONT",
    "thumb": "https://pancakeswap.finance/images/tokens/0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b.png",
    "address": "0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b",
    "decimals": 18
  },
  {
    "name": "IceToken",
    "symbol": "ICE",
    "thumb": "https://pancakeswap.finance/images/tokens/0xf16e81dce15B08F326220742020379B855B87DF9.png",
    "address": "0xf16e81dce15B08F326220742020379B855B87DF9",
    "decimals": 18
  },
  {
    "name": "Multiplier",
    "symbol": "bMXX",
    "thumb": "https://pancakeswap.finance/images/tokens/0x4131b87F74415190425ccD873048C708F8005823.png",
    "address": "0x4131b87F74415190425ccD873048C708F8005823",
    "decimals": 18
  },
  {
    "name": "Sheesha Finance",
    "symbol": "SHEESHA",
    "thumb": "https://pancakeswap.finance/images/tokens/0x232FB065D9d24c34708eeDbF03724f2e95ABE768.png",
    "address": "0x232FB065D9d24c34708eeDbF03724f2e95ABE768",
    "decimals": 18
  },
  {
    "name": "UNFI",
    "symbol": "UNFI",
    "thumb": "https://pancakeswap.finance/images/tokens/0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B.png",
    "address": "0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B",
    "decimals": 18
  },
  {
    "name": "The Force Token",
    "symbol": "FOR",
    "thumb": "https://pancakeswap.finance/images/tokens/0x658A109C5900BC6d2357c87549B651670E5b0539.png",
    "address": "0x658A109C5900BC6d2357c87549B651670E5b0539",
    "decimals": 18
  },
  {
    "name": "BitcoinAsset",
    "symbol": "BTA",
    "thumb": "https://pancakeswap.finance/images/tokens/0xAd9787017e82f6368BbE4893b475CaadA2258564.png",
    "address": "0xAd9787017e82f6368BbE4893b475CaadA2258564",
    "decimals": 18
  },
  {
    "name": "Moon Token",
    "symbol": "MOONTOKEN",
    "thumb": "https://pancakeswap.finance/images/tokens/0x81E4d494b85A24a58a6BA45c9B418b32a4E039de.png",
    "address": "0x81E4d494b85A24a58a6BA45c9B418b32a4E039de",
    "decimals": 18
  },
  {
    "name": "EOS Token",
    "symbol": "EOS",
    "thumb": "https://pancakeswap.finance/images/tokens/0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6.png",
    "address": "0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6",
    "decimals": 18
  },
  {
    "name": "Hakka Finance on xDai on BSC",
    "symbol": "HAKKA",
    "thumb": "https://pancakeswap.finance/images/tokens/0x1D1eb8E8293222e1a29d2C0E4cE6C0Acfd89AaaC.png",
    "address": "0x1D1eb8E8293222e1a29d2C0E4cE6C0Acfd89AaaC",
    "decimals": 18
  },
  {
    "name": "yearn.finance",
    "symbol": "YFI",
    "thumb": "https://pancakeswap.finance/images/tokens/0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e.png",
    "address": "0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e",
    "decimals": 18
  },
  {
    "name": "pTokens BTC",
    "symbol": "pBTC",
    "thumb": "https://pancakeswap.finance/images/tokens/0xeD28A457A5A76596ac48d87C0f577020F6Ea1c4C.png",
    "address": "0xeD28A457A5A76596ac48d87C0f577020F6Ea1c4C",
    "decimals": 18
  },
  {
    "name": "Cyclone Protocol",
    "symbol": "CYC",
    "thumb": "https://pancakeswap.finance/images/tokens/0x810EE35443639348aDbbC467b33310d2AB43c168.png",
    "address": "0x810EE35443639348aDbbC467b33310d2AB43c168",
    "decimals": 18
  },
  {
    "name": "DFuture Token",
    "symbol": "DFT",
    "thumb": "https://pancakeswap.finance/images/tokens/0x42712dF5009c20fee340B245b510c0395896cF6e.png",
    "address": "0x42712dF5009c20fee340B245b510c0395896cF6e",
    "decimals": 18
  },
  {
    "name": "SafeBTC",
    "symbol": "SAFEBTC",
    "thumb": "https://pancakeswap.finance/images/tokens/0x380624A4a7e69dB1cA07deEcF764025FC224D056.png",
    "address": "0x380624A4a7e69dB1cA07deEcF764025FC224D056",
    "decimals": 9
  },
  {
    "name": "AllianceBlock Token",
    "symbol": "bALBT",
    "thumb": "https://pancakeswap.finance/images/tokens/0x72fAa679E1008Ad8382959FF48E392042A8b06f7.png",
    "address": "0x72fAa679E1008Ad8382959FF48E392042A8b06f7",
    "decimals": 18
  },
  {
    "name": "yieldwatch",
    "symbol": "WATCH",
    "thumb": "https://pancakeswap.finance/images/tokens/0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0.png",
    "address": "0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0",
    "decimals": 18
  },
  {
    "name": "Euler.Tools",
    "symbol": "EULER",
    "thumb": "https://pancakeswap.finance/images/tokens/0x3920123482070C1a2dff73AaD695c60e7c6F6862.png",
    "address": "0x3920123482070C1a2dff73AaD695c60e7c6F6862",
    "decimals": 18
  },
  {
    "name": "Zeppelin.dao",
    "symbol": "ZEP",
    "thumb": "https://pancakeswap.finance/images/tokens/0x2E291e1c9f85a86d0C58Ae15621aaC005a8b2EAD.png",
    "address": "0x2E291e1c9f85a86d0C58Ae15621aaC005a8b2EAD",
    "decimals": 9
  },
  {
    "name": "Tixl Token",
    "symbol": "TXL",
    "thumb": "https://pancakeswap.finance/images/tokens/0x1FFD0b47127fdd4097E54521C9E2c7f0D66AafC5.png",
    "address": "0x1FFD0b47127fdd4097E54521C9E2c7f0D66AafC5",
    "decimals": 18
  },
  {
    "name": "LTO Network",
    "symbol": "LTO",
    "thumb": "https://pancakeswap.finance/images/tokens/0x857B222Fc79e1cBBf8Ca5f78CB133d1b7CF34BBd.png",
    "address": "0x857B222Fc79e1cBBf8Ca5f78CB133d1b7CF34BBd",
    "decimals": 18
  },
  {
    "name": "UniTrade",
    "symbol": "TRADE",
    "thumb": "https://pancakeswap.finance/images/tokens/0x7af173F350D916358AF3e218Bdf2178494Beb748.png",
    "address": "0x7af173F350D916358AF3e218Bdf2178494Beb748",
    "decimals": 18
  },
  {
    "name": "DeXe",
    "symbol": "DEXE",
    "thumb": "https://pancakeswap.finance/images/tokens/0x039cB485212f996A9DBb85A9a75d898F94d38dA6.png",
    "address": "0x039cB485212f996A9DBb85A9a75d898F94d38dA6",
    "decimals": 18
  },
  {
    "name": "pTokens CGG",
    "symbol": "CGG",
    "thumb": "https://pancakeswap.finance/images/tokens/0x1613957159E9B0ac6c80e824F7Eea748a32a0AE2.png",
    "address": "0x1613957159E9B0ac6c80e824F7Eea748a32a0AE2",
    "decimals": 18
  },
  {
    "name": "BoringDAO Token",
    "symbol": "BOR",
    "thumb": "https://pancakeswap.finance/images/tokens/0x92D7756c60dcfD4c689290E8A9F4d263b3b32241.png",
    "address": "0x92D7756c60dcfD4c689290E8A9F4d263b3b32241",
    "decimals": 18
  },
  {
    "name": "Exeedme",
    "symbol": "XED",
    "thumb": "https://pancakeswap.finance/images/tokens/0x5621b5A3f4a8008c4CCDd1b942B121c8B1944F1f.png",
    "address": "0x5621b5A3f4a8008c4CCDd1b942B121c8B1944F1f",
    "decimals": 18
  }
];

let BINANCE_TESTNET: Token[] = [
  {
    "name": "Binance Coin",
    "symbol": "BNB",
    "thumb": "https://v1exchange.pancakeswap.finance/images/coins/bnb.png",
    "address": "0x0000000000000000000000000000000000000000",
    "decimals": 18,
    "isBase": true
  },
  {
    "name": "Test Token",
    "symbol": "AAA",
    "thumb": "assets/img/crash-test.png",
    "address": "0xbF2EBD4b347732F96C95f2D3116A34095baB3F90",
    "decimals": 18
  },
  {
    "name": "Test Token",
    "symbol": "BBB",
    "thumb": "assets/img/crash-test.png",
    "address": "0x6b0b8E503696076AAB140C10c689f22DC15FF87D",
    "decimals": 18
  },
  {
    "name": "Test Token",
    "symbol": "CCC",
    "thumb": "assets/img/crash-test.png",
    "address": "0x69f90E517C21E3117e1535fA2092dC1f3633F560",
    "decimals": 18
  }
];

let MATIC_MAINNET: Token[] = [
  {
    "name": "Polygon",
    "symbol": "MATIC",
    "thumb": "https://assets.coingecko.com/coins/images/4713/thumb/matic___polygon.jpg",
    "address": "0x0000000000000000000000000000000000000000",
    "decimals": "18",
  }
];

let MATIC_TESTNET: Token[] = [
  {
    "name": "Polygon",
    "symbol": "MATIC",
    "thumb": "https://assets.coingecko.com/coins/images/4713/thumb/matic___polygon.jpg",
    "address": "0x0000000000000000000000000000000000000000",
    "decimals": 18,
    "isBase": true
  },
  {
    "name": "Test Token",
    "symbol": "AAA",
    "thumb": "assets/img/crash-test.png",
    "address": "0xE38A5C3da5FFf6E2865BF64cF6674265cFfd9e7f",
    "decimals": 18
  },
  {
    "name": "Test Token",
    "symbol": "BBB",
    "thumb": "assets/img/crash-test.png",
    "address": "0xb40d2f3B8e2465DF9132ae2DF43E80Dbb67d3369",
    "decimals": 18
  },
  {
    "name": "Test Token",
    "symbol": "CCC",
    "thumb": "assets/img/crash-test.png",
    "address": "0x7190Bb56c586Bf9Dd8013C450af8C51af5EaE156",
    "decimals": 18
  }
];

let REEF_MAINNET: Token[] = [
  {
    "name": "Reef",
    "symbol": "REEF",
    "thumb": "https://assets.coingecko.com/coins/images/13504/small/Group_10572.png?1610534130",
    "address": "0x0000000000000000000000000000000000000000",
    "decimals": 18,
    "isBase": true
  }
];

let REEF_TESTNET: Token[] = [
  {
    "name": "Reef",
    "symbol": "REEF",
    "thumb": "https://assets.coingecko.com/coins/images/13504/small/Group_10572.png?1610534130",
    "address": "0x0000000000000000000000000000000000000000",
    "decimals": 18,
    "isBase": true
  },
  {
    "name": "Test Token",
    "symbol": "AAA",
    "thumb": "assets/img/crash-test.png",
    "address": "0xd8ee8B891B2800ea03D4AbBa2033b0AC80d85f79",
    "decimals": 18
  },
  {
    "name": "Test Token",
    "symbol": "BBB",
    "thumb": "assets/img/crash-test.png",
    "address": "0xe14b1a577110d94fDe19CFd01659E8041da71d83",
    "decimals": 18
  },
  {
    "name": "Test Token",
    "symbol": "CCC",
    "thumb": "assets/img/crash-test.png",
    "address": "0xCcCb0F09A72bbf7f8593D5e74d0aD7f3D687aD98",
    "decimals": 18
  }
];

let MOONBEAM_MAINNET: Token[] = [
  {
    "name": "Moonbeam",
    "symbol": "GLMR",
    "thumb": "https://assets.coingecko.com/coins/images/22459/small/glmr.png",
    "address": "0x0000000000000000000000000000000000000000",
    "decimals": 18,
    "isBase": true
  }
];

let MOONRIVER_MAINNET: Token[] = [
  {
    "name": "Moonriver",
    "symbol": "MOVR",
    "thumb": "https://assets.coingecko.com/coins/images/17984/small/9285.png",
    "address": "0x0000000000000000000000000000000000000000",
    "decimals": 18,
    "isBase": true
  }
];

let chainTokenDict = {
  1: ETHEREUM_MAINNET,
  4: ETHEREUM_TESTNET,
  56: BINANCE_MAINNET,
  97: BINANCE_TESTNET,
  137: MATIC_MAINNET,
  80001: MATIC_TESTNET,
  "reef-mainnet": REEF_MAINNET,
  "reef-testnet": REEF_TESTNET,
  1284: MOONBEAM_MAINNET,
  1285: MOONRIVER_MAINNET
};

export {
  chainTokenDict
};
