import { TokenPairInfo } from './types'

export default function fetchCustomPairPrices(
  tokenPair: TokenPairInfo,
  signal: AbortSignal,
  dex: string,
  chain: string,
  setCustomPairs: React.Dispatch<React.SetStateAction<TokenPairInfo[]>>
) {
  const { amount, fromToken, toToken } = tokenPair
  fetch(`http://localhost:5000/api/v1/${ chain }`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          { amount, fromToken, toToken, dex }
        ),
        signal
      })
        .then(res => res.json())
        .then(data => {
          setCustomPairs(prev => (
            [
              ...prev,
              {
                ...tokenPair,
                amount: String(data),
              }
            ]
          ))
        })
        .catch(error => {
          if (error.name === "AbortError") {
            console.log("Successfully aborted")
          } else {
            console.error("Didn't fetch token: ", error)
          }
        })
}