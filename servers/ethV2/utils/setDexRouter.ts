import { ethers } from "ethers"
import * as dotenv from 'dotenv'
dotenv.config()

import { routerABI } from './abiList'
import {
  uniswapRouterV2,
  sushiSwapRouterV2
} from './addressList'

export const provider = new ethers.providers.JsonRpcProvider(
  process.env.PROVIDER
)

export const uniswapRouter = new ethers.Contract(
  uniswapRouterV2,
  routerABI,
  provider
)

export const sushiSwapRouter = new ethers.Contract(
  sushiSwapRouterV2,
  routerABI,
  provider
)