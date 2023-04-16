import { Request, Response } from 'express'
import { ethers } from 'ethers'

import { erc20ABI } from '../utils/abiList'
import { addresses } from '../utils/addressList'
import { provider, pancakeswapRouter } from '../utils/pancakeswapRouter'
import { GetPrices } from '../interfaces/getPrices.interface'

const getPricesController = async (req: Request, res: Response) => {
  const { fromToken } = req.body as GetPrices

  try {
    const contractToken: ethers.Contract = new ethers.Contract(
      fromToken, 
      erc20ABI, 
      provider
    )
  
    const decimals: number = await contractToken.decimals()
  
    // Convert the amount to blockchain readable amount
    const amountIn: string = ethers.utils.parseUnits(
      '1', 
      decimals
    ).toString()
  
    const amountsOut: number[] = await pancakeswapRouter.getAmountsOut(
      amountIn, [
      fromToken,
      addresses.BUSD
    ])
  
    const contractToken2: ethers.Contract = new ethers.Contract(
      addresses.BUSD, 
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
    res.status(400).send(error)
  }
}

export default getPricesController