import { useNixTradingPair } from "../hooks/useNixTradingPair"
import { BSCaddr } from "../utils/addresses"
import fetchPrices from '../utils/fetchPrices'

type token = { 
  price: string
  fromToken: string
  toToken: string
  reset: React.Dispatch<React.SetStateAction<string>>
}

export default function TokenPrice({price, fromToken, toToken, reset}: token) {
  const { nixTradingPair, setNixTradingPair } = useNixTradingPair()

  const fromName = Object.keys(BSCaddr)[
    Object.values(BSCaddr).indexOf(fromToken)
  ]
  const toName = Object.keys(BSCaddr)[
    Object.values(BSCaddr).indexOf(toToken)
  ]

  const controller = new AbortController()
  const signal = controller.signal

  const refreshPrice = () => {
    fetchPrices('1', fromToken, reset, toToken, signal)

    return () => controller.abort()
  }

  return (  
    !nixTradingPair
      ? (
          <div className="trading-pair">
            <h3 className='returned-price'>
              { price }
              <span className='price-span'>
                { fromName } / { toName }
              </span>
            </h3>
            <button 
              className="nix-trading-pair btn"
              onClick={ () => setNixTradingPair(true) }
            >
              X
            </button>
            <button
              className="refresh btn"
              onClick={ refreshPrice }
            >
              Refresh Price
            </button>
          </div>
        )
      : null
  )
}