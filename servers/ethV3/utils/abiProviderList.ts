import { ethers } from 'ethers'
import * as dotenv from 'dotenv'
dotenv.config()

import { abi as uniswapQuoterABI } from '@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json'

const uniswapQuoterAddr: string = '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6'

const provider = new ethers.providers.JsonRpcProvider(
  process.env.PROVIDER
)

export {
    uniswapQuoterAddr,
    uniswapQuoterABI,
    provider
}