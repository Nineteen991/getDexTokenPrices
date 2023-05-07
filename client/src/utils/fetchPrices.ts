export default function fetchPrices(
  amount: string,
  fromToken: string, 
  setToken: React.Dispatch<React.SetStateAction<string>>,
  toToken: string,
  dex: string,
  chain: string,
  signal: AbortSignal
) {
  fetch(`http://localhost:5000/api/v1/${ chain }`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          { amount, fromToken, toToken, dex }
        ),
        signal
      })
        .then(res => {
          console.log(res)
          return res.json()
        })
        .then(data => {
          console.log(data)
          setToken(data)
        })
        .catch(error => {
          if (error.name === "AbortError") {
            console.log("Successfully aborted")
          } else {
            console.error(`Didn't fetch pair: ${fromToken}/${toToken}`, error)
          }
        })
}