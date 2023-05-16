import { BSCaddr } from "../utils/addresses"
import { ETHaddr } from "../utils/addresses"

export function getBlockchainName(chain: string) {
  let blockchain

  if (chain === 'ethV2' || chain === 'ethV3') {
    blockchain = ETHaddr
  } else if (chain === 'bsc') {
    blockchain = BSCaddr
  } else {
    throw new Error('Unknown Blockchain')
  }

  return blockchain
}