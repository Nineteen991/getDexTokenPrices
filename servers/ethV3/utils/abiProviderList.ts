import { ethers } from 'ethers'

import { abi as uniswapQuoterABI } from '@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json'

const uniswapQuoterAddr: string = '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6'

const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-mainnet.g.alchemy.com/v2/-JpgacjGuwQHqtPHa4lvzEAREszI91XC"
)

export {
    uniswapQuoterAddr,
    uniswapQuoterABI,
    provider
}