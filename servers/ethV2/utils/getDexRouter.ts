import { ethers } from 'ethers'

import {
  uniswapRouter,
  sushiSwapRouter
} from './setDexRouter'

const getDexRouter = (dex: string): ethers.Contract => {
  let dexRouter: ethers.Contract

  if (dex === 'uniswapV2') {
    dexRouter = uniswapRouter
  } else if (dex === 'sushiSwapV2') {
    dexRouter = sushiSwapRouter
  } else {
    throw Error(`What sort of dex is this: ${ dex }`)
  }

  return dexRouter
}

export default getDexRouter