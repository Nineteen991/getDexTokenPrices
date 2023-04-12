import { Request, Response } from 'express'
import { ethers } from 'ethers'

import { erc20ABI } from '../utils/abiList'
import { GetPrices } from '../interfaces/getPrices.interface'
import { provider, pancakeswapRouter } from '../utils/pancakeswapRouter'

const getSinglePriceController = async (req: Request, res: Response) => {
  const { amountInHuman, fromToken, toToken } = req.body as GetPrices

  try {
    const contractToken: ethers.Contract = new ethers.Contract(
      fromToken, 
      erc20ABI, 
      provider
    )
  
    const decimals: number = await contractToken.decimals()
  
    // Convert the amount to blockchain readable amount
    const amountIn: string = ethers.utils.parseUnits(
      amountInHuman, 
      decimals
    ).toString()
  
    const amountsOut: number[] = await pancakeswapRouter.getAmountsOut(
      amountIn, [
      fromToken,
      toToken
    ])
  
    const contractToken2: ethers.Contract = new ethers.Contract(
      toToken, 
      erc20ABI, 
      provider
    )
    const decimals2: number = await contractToken2.decimals()
  
    // Convert the amount out - human readable
    const amountOutHuman: string = ethers.utils.formatUnits(
      amountsOut[1].toString(),
      decimals2
    )
  
    res.status(200).json({ Amount: `${ amountOutHuman }` })
  }
  catch (error) {
    res.status(400).send({ error })
  }
}

export default getSinglePriceController