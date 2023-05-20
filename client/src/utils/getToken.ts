import { ethChainTokenList } from "./tokenAddresses/uniswapTokenList"
import { polygonChainTokenList } from "./tokenAddresses/quickswapTokenList"
import { bscTokenList } from "./tokenAddresses/pancakeswapTokenList"

export const ethTokens = ethChainTokenList.filter(token => token.chainId === 1)

export const polygonTokens = polygonChainTokenList.filter(
  token => token.chainId === 137
)

export const bscTokens = bscTokenList.filter(token => token.chainId === 56)

