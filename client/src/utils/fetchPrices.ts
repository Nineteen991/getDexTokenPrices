export default function fetchPrices(
  token: string, 
  setToken: React.Dispatch<React.SetStateAction<string>>, 
  signal: AbortSignal
) {
  fetch('http://localhost:5000/api/v1/prices', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          { fromToken: token }
        ),
        signal
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setToken(data)
          console.log('got it')
        })
        .catch(error => {
          if (error.name === "AbortError") {
            console.log("Successfully aborted")
          } else {
            console.error("Didn't fetch BTCB: ", error)
          }
        })
}