import { ethers } from 'ethers'
import * as dotenv from 'dotenv'
dotenv.config()

import { abi as uniswapQuoterABI } from '@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json'

import { sushiQuoterAddr, uniswapQuoterAddr } from './quoterAddr'

// new
import Quoter from '@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json'

const provider = new ethers.providers.JsonRpcProvider(
  process.env.PROVIDER
)

export {
    sushiQuoterAddr,
    uniswapQuoterAddr,
    uniswapQuoterABI,
    provider
}