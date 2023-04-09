import { ethers } from 'ethers'

import { 
  erc20ABI, 
  // factoryABI,
  routerABI,
  // pairABI
} from './utils/abiList'

import { 
  // addressFactory,
  addresses,
  addressRouter,
  addressFrom,
  addressTo
} from './utils/addressList'

const provider: ethers.providers.JsonRpcProvider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed.binance.org"
)

// Connect to Router
const contractRouter: ethers.Contract = new ethers.Contract(
  addressRouter,
  routerABI,
  provider
)

const getPrices = async (
    amountInHuman: string, 
    fromToken: string, 
    toToken: string
  ) => {
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

  const amountsOut: number[] = await contractRouter.getAmountsOut(
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

  // Convert the amount out (BUSD) - human readable
  const amountOutHuman: string = ethers.utils.formatUnits(
    amountsOut[1].toString(),
    decimals2
  )

  console.log(amountOutHuman)
}

const amountInHuman: string = '1'
const fromToken: string = ''
const toToken: string = ``

getPrices(amountInHuman, addresses.WBNB, addresses.USDT)
getPrices(amountInHuman, addresses.ETH, addresses.USDT)