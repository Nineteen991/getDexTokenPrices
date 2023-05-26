This is a Web3 app that fetches cryptocurrency price data across 
different decentralized exchanges (mostly based on the UniswapV2 
platform) and different blockchains.

Once fetched the price & cryptocurrency pair data is displayed 
along with from what exchange the price data came from.

A user can input their own trading pairs and see what those 
prices would be across different exchanges.

![alt text](./client/src/images/data-across-dexs.png)

The data fetched would help users find arbitrage opportunities.

I decided to try something different in the architecture of this app.

I have 1 react client that fetches data from multiple node.js servers.
Each server fetches token prices from a different decentralized exchange.