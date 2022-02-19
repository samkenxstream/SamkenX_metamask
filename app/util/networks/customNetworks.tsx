const PopularList = [
	{
		chainId: '42161',
		nickname: 'Arbitrum One',
		rpcUrl: 'https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}',
		ticker: 'AETH',
		rpcPrefs: {
			blockExplorerUrl: 'https://explorer.arbitrum.io',
			imageUrl: '',
		},
	},
	{
		chainId: '43114',
		nickname: 'Avalanche Mainnet C-Chain',
		rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
		ticker: 'AVAX',
		rpcPrefs: {
			blockExplorerUrl: 'https://snowtrace.io/',
			imageUrl: '',
		},
	},
	{
		chainId: '56',
		nickname: 'Binance Smart Chain Mainnet',
		rpcUrl: 'https://bsc-dataseed1.binance.org/’',
		ticker: 'BNB',
		rpcPrefs: {
			blockExplorerUrl: 'https://bscscan.com/',
			imageUrl: '',
		},
	},
	{
		chainId: '250',
		nickname: 'Fantom Opera',
		rpcUrl: 'https://rpc.ftm.tools/’',
		ticker: 'FTM',
		rpcPrefs: {
			blockExplorerUrl: 'https://ftmscan.com/',
			imageUrl: '',
		},
	},
	{
		chainId: '1666600000',
		nickname: 'Harmony Mainnet Shard 0',
		rpcUrl: 'https://api.harmony.one/',
		ticker: 'ONE',
		warning: true,
		rpcPrefs: {
			blockExplorerUrl: 'https://explorer.harmony.one/',
			imageUrl: '',
		},
	},
	{
		chainId: '10',
		nickname: 'Optimism',
		rpcUrl: 'https://optimism-mainnet.infura.io/v3/{INFURA_API_KEY}’',
		ticker: 'ETH',
		rpcPrefs: {
			blockExplorerUrl: 'https://optimistic.etherscan.io/’',
			imageUrl:
				'https://github.com/ethereum-optimism/brand-kit/blob/main/assets/images/Profile-Logo.png?raw=true',
		},
	},
	{
		chainId: '11297108109',
		nickname: 'Palm',
		rpcUrl: 'https://palm-mainnet.infura.io/v3/{INFURA_API_KEY}',
		ticker: 'PALM',
		rpcPrefs: {
			blockExplorerUrl: 'https://explorer.palm.io/',
			imageUrl: '',
		},
	},
	{
		chainId: '137',
		nickname: 'Polygon Mainnet',
		rpcUrl: 'https://polygon-mainnet.infura.io/v3/{INFURA_API_KEY}',
		ticker: 'MATIC',
		rpcPrefs: {
			blockExplorerUrl: 'https://polygonscan.com/',
			imageUrl: '',
		},
	},
];

export default PopularList;
