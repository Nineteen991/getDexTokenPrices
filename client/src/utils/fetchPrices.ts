export default function fetchPrices(
  amount: string,
  fromToken: string, 
  setToken: React.Dispatch<React.SetStateAction<string>>,
  toToken: string,
  signal: AbortSignal
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
          setToken(data)
        })
        .catch(error => {
          if (error.name === "AbortError") {
            console.log("Successfully aborted")
          } else {
            console.error("Didn't fetch token: ", error)
          }
        })
}