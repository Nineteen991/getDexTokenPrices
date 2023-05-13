import { Request, Response } from 'express'
import { ethers } from 'ethers'

import { erc20ABI } from '../utils/abiList'
import { GetPrices } from '../interfaces/getPrices.interface'
import { provider } from '../utils/pancakeswapRouter'
import getDexRouter from '../utils/getDexRouter'

const getSinglePriceController = async (req: Request, res: Response) => {
  const { amount, fromToken, toToken, dex } = req.body as GetPrices

  const router = getDexRouter(dex)

  try {
    const contractToken: ethers.Contract = new ethers.Contract(
      fromToken, 
      erc20ABI, 
      provider
    )
  
    const decimals: number = await contractToken.decimals()
  
    // Convert the amount to blockchain readable amount
    const amountIn: string = ethers.utils.parseUnits(
      amount, 
      decimals
    ).toString()

    const amountsOut: number[] = await router.getAmountsOut(
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

    res.status(200).send(amountOutHuman)
  }
  catch (error) {
    res.status(400).send({ 'controller error: ': error })
  }
}

export default getSinglePriceController