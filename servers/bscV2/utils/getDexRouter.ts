import { ethers } from "ethers"

import { 
  pancakeswapRouter, 
  apeswapRouter, 
  bakeryswapRouter,
  babyswapRouter,
  biswapRouter
} from "./pancakeswapRouter"

const getDexRouter = (dex: string): ethers.Contract => {
  let dexRouter: ethers.Contract
  
  if (dex === 'pancakeswapV2') {
    dexRouter = pancakeswapRouter
  }
  else if(dex === 'apeswapV2') {
    dexRouter = apeswapRouter
  }
  else if (dex === 'bakeryswapV2') {
    dexRouter = bakeryswapRouter
  }
  else if (dex === 'babyswapV2') {
    dexRouter = babyswapRouter
  }
  else if (dex === 'biswapV2') {
    dexRouter = biswapRouter
  }
  else {
    throw Error(`What sort of dex is this: ${ dex }`)
  }

  return dexRouter
}

export default getDexRouter