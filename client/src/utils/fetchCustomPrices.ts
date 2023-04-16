export default function fetchCustomPrices(
  amountInHuman: string,
  fromToken: string, 
  setToken: React.Dispatch<React.SetStateAction<string>>,
  toToken: string,
  signal: AbortSignal
) {
  fetch('http://localhost:5000/api/v1/pancakeswapV2', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          { amountInHuman, fromToken, toToken }
        ),
        signal
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          // setToken(prev => (
          //   {
          //     ...prev,

          //   }
          // ))
          console.log('got it')
        })
        .catch(error => {
          if (error.name === "AbortError") {
            console.log("Successfully aborted")
          } else {
            console.error("Didn't fetch token: ", error)
          }
        })
}