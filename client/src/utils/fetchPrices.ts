import axios from 'axios'

export default async function fetchPrices(
  amount: string,
  fromToken: string, 
  setToken: React.Dispatch<React.SetStateAction<string>>,
  toToken: string,
  dex: string,
  chain: string,
) {
  const apiClient = axios.create({
    baseURL: `http://localhost:5000/api/v1/`,
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