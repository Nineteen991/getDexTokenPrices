import { ethers } from "ethers"

import { routerABI } from './abiList'
import { addressRouter } from './addressList'

export const provider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed.binance.org"
)

export const pancakeswapRouter = new ethers.Contract(
  addressRouter,
  routerABI,
  provider
)