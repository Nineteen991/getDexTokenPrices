import axios from 'axios'

import { TokenPairInfo } from './types'

export default async function fetchCustomPairPrices(
  tokenPair: TokenPairInfo,
  dex: string,
  chain: string,
  setCustomDexPairs: React.Dispatch<React.SetStateAction<TokenPairInfo[]>>
) {
  const apiClient = axios.create({
    baseURL: `http://localhost:5000/api/v1/`,
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