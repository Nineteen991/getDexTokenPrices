import { ethers } from "ethers"

import { routerABI } from './abiList'
import { 
  pancakeSwapV2Router, 
  apeSwapV2Router, 
  bakerySwapV2Router, 
  babySwapV2Router,
  biSwapV2Router
} from './addressList'

export const provider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed.binance.org"
)

export const pancakeswapRouter = new ethers.Contract(
  pancakeSwapV2Router,
  routerABI,
  provider
)

export const apeswapRouter = new ethers.Contract(
  apeSwapV2Router,
  routerABI,
  provider
)

export const bakeryswapRouter = new ethers.Contract(
  bakerySwapV2Router,
  routerABI,
  provider
)

export const babyswapRouter = new ethers.Contract(
  babySwapV2Router,
  routerABI,
  provider
)

export const biswapRouter = new ethers.Contract(
  biSwapV2Router,
  routerABI,
  provider
)