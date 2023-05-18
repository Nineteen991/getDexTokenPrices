import { ethers } from "ethers"
import * as dotenv from 'dotenv'
dotenv.config()

import { routerABI } from './abiList'
import {
  quickswapRouterV2,
  sushiSwapRouterV2,
  apeswapRouterV2,
} from './addressList'

export const provider = new ethers.providers.JsonRpcProvider(
  process.env.PROVIDER
)

export const quickswapRouter = new ethers.Contract(
  quickswapRouterV2,
  routerABI,
  provider
)

export const sushiSwapRouter = new ethers.Contract(
  sushiSwapRouterV2,
  routerABI,
  provider
)

export const apeswapRouter = new ethers.Contract(
  apeswapRouterV2,
  routerABI,
  provider
)