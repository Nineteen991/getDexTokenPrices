import { ethers } from "ethers"

import { pancakeswapRouter, apeswapRouter } from "./pancakeswapRouter"

const getDexRouter = (dex: string): ethers.Contract => {
  let dexRouter: ethers.Contract = pancakeswapRouter
  
  if (dex === 'pancakeswapV2') {
    dexRouter = pancakeswapRouter
  }
  else if(dex === 'apeswapV2') {
    dexRouter = apeswapRouter
  }
  else {
    throw Error(`What sort of dex is this: ${ dex }`)
  }

  return dexRouter
}

export default getDexRouter