import { ethers } from 'ethers'

import { erc20ABI } from './abiList'
import { addresses } from './addressList'
import { provider, pancakeswapRouter } from './pancakeswapRouter'

const getPrices = async (fromToken: string) => {
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
      addresses.USDT
    ])
  
    const contractToken2: ethers.Contract = new ethers.Contract(
      addresses.USDT, 
      erc20ABI, 
      provider
    )
    const decimals2: number = await contractToken2.decimals()
  
    // Convert the amount out - human readable
    const amountOutHuman: string = ethers.utils.formatUnits(
      amountsOut[1].toString(),
      decimals2
    )
  
    return `${ amountOutHuman }`
  }
  catch (error) {
    console.error("Didn't get da prices: ", error)
  }
}

export default getPrices