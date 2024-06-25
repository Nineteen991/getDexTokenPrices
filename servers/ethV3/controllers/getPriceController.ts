import { Request, Response } from 'express'
import { ethers } from 'ethers'
import { FeeAmount } from '@uniswap/v3-sdk'  // new
  // may use FeeAmount.MEDIUM

import {
  // sushiQuoterAddr,
  // uniswapQuoterAddr,
  uniswapQuoterABI,
  provider
} from '../utils/abiProviderList'
import { getDexRouter } from '../utils/setDexAddr'
import { GetPrices } from '../interfaces/getPrices.interface'
import { USDT, USDC } from '../utils/addresses'

const getPriceController = async (req: Request, res: Response) => {
  const { amount, fromToken, toToken, dex } = req.body as GetPrices
  let decimalsIn = 18
  let decimalsOut = 18

  if (fromToken === USDT || fromToken === USDC) {
    decimalsIn = 6
  } 
  if (toToken === USDT || toToken === USDC) {
    decimalsOut = 6
  } 

  try {
    const quoterContract = new ethers.Contract(
      getDexRouter(dex),
      uniswapQuoterABI,
      provider
    )
  // console.log(decimalsIn)
    const amountIn = ethers.utils.parseUnits(amount, decimalsIn)
  
    const quoteAmountOut = await quoterContract.callStatic.quoteExactInputSingle(
      fromToken,
      toToken,
      FeeAmount.MEDIUM,  // fee was 3000 = MEDIUM, low = 500
      amountIn.toString(),
      0
    )
 
    // Output the amount - human readable
    const amountOutHuman: string = ethers.utils.formatUnits(
      quoteAmountOut.toString(), 
      decimalsOut
    )
  // console.log('amountOutHuman: ', amountOutHuman)
    res.status(200).send(amountOutHuman)
  }
  catch (error) {
    console.error(error)
    res.status(400).send({ 'ETH Controller Error: ': error })
  }
}

export default getPriceController