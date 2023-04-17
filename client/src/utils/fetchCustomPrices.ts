import { Tokens } from '../utils/interfaces'

export default function fetchCustomPrices(
  amount: string,
  fromToken: string, 
  setReturnedToken: React.Dispatch<React.SetStateAction<Tokens>>,
  toToken: string,
  signal: AbortSignal,
  setCustomPairs: React.Dispatch<React.SetStateAction<Tokens[]>>
) {
  fetch('http://localhost:5000/api/v1/pancakeswapV2', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          { amount, fromToken, toToken }
        ),
        signal
      })
        .then(res => res.json())
        .then(data => {
          setReturnedToken(prev => (
            {
              ...prev,
              amount: data
            }
          ))
          setCustomPairs(prev => (
            [
              ...prev,
              {
                amount: data,
                'fromToken': fromToken,
                'toToken': toToken
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