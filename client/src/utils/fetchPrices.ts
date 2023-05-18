import axios from 'axios'

export default async function fetchPrices(
  amount: string,
  fromToken: string, 
  setToken: React.Dispatch<React.SetStateAction<string>>,
  toToken: string,
  dex: string,
  chain: string,
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
    headers: {
      "Content-Type": "application/json",
    },
  })
  const data = { amount, fromToken, toToken, dex }

  try {
    const res = await apiClient.post(chain, data)
    setToken(String(res.data))
  } catch (error) {
    console.error(error)
  }
}