import axios from 'axios'

import { TokenPairInfo } from './types'

export default async function fetchCustomPairPrices(
  tokenPair: TokenPairInfo,
  dex: string,
  chain: string,
  setCustomDexPairs: React.Dispatch<React.SetStateAction<TokenPairInfo[]>>
) {
  let blockchain: number 

  if (chain === 'ethV2') {
    blockchain = 5002
  } else if (chain === 'ethV3') {
    blockchain = 5001
  } else if (chain === 'bsc') {
    blockchain = 5000
  } else if (chain === 'polygonV2') {
    blockchain = 5003
  } else {
    throw new Error("Can't fetch if I don't know what blockchain you're using")
  }

  const apiClient = axios.create({
    baseURL: `http://localhost:${blockchain}/api/v1/`,
    headers: { "Content-Type": "application/json" },
  })
  const { amount, fromToken, toToken } = tokenPair
  const data = { amount, fromToken, toToken, dex }

  try {
    const res = await apiClient.post(chain, data)
    setCustomDexPairs(prev => (
      [
        ...prev,
        {
          ...tokenPair,
          amount: String(res.data),
        }
      ]
    ))
  } catch (error) {
    console.error('Fetch Error: ', error)
  }
}