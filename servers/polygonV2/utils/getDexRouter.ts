import { ethers } from 'ethers'

import {
  quickswapRouter,
  sushiSwapRouter,
  apeswapRouter
} from './setDexRouter'

const getDexRouter = (dex: string): ethers.Contract => {
  let dexRouter: ethers.Contract

  if (dex === 'quickswapV2') {
    dexRouter = quickswapRouter
  } else if (dex === 'sushiSwapV2') {
    dexRouter = sushiSwapRouter
  } else if (dex === 'apeswapV2') {
    dexRouter = apeswapRouter
  } else {
    throw Error(`What sort of dex is this: ${ dex }`)
  }

  return dexRouter
}

export default getDexRouter