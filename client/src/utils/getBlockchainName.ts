import { ETHaddr, BSCaddr, POLYGONaddr } from "../utils/addresses"

export function getBlockchainName(chain: string) {
  let blockchain

  if (chain === 'ethV2' || chain === 'ethV3') {
    blockchain = ETHaddr
  } else if (chain === 'bsc') {
    blockchain = BSCaddr
  } else if (chain === 'polygonV2') {
    blockchain = POLYGONaddr
  } else {
    throw new Error('Unknown Blockchain')
  }

  return blockchain
}