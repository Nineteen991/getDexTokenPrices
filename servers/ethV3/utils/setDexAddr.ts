import {
  sushiQuoterAddr,
  uniswapQuoterAddr,
} from './abiProviderList'

export const getDexRouter = (dex: string): string=> {
  let dexAddr: string

  if (dex === 'uniswapV3') {
    dexAddr = uniswapQuoterAddr
  } else if (dex === 'sushiSwapV3') {
    dexAddr = sushiQuoterAddr
  } else {
    throw Error(`What sort of dex is this: ${ dex }`)
  }

  return dexAddr
}