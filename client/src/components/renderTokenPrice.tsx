import { useNixTradingPair } from "../hooks/useNixTradingPair"
// import fetchPrices from '../utils/fetchPrices'
import { Token } from '../utils/types'
import { getBlockchainName } from "../utils/getBlockchainName"

export default function RenderTokenPrice(
  {
    price, 
    fromToken, 
    toToken, 
    dex,
    chain,
    reset
  }: Token ) {
  const { nixTradingPair, setNixTradingPair } = useNixTradingPair()
  // I want the particular blockchain so I can get the token symbols
  const blockchain = getBlockchainName(chain)

  // I want the object keys for each pair name
  const fromName = Object.keys(blockchain)[
    Object.values(blockchain).indexOf(fromToken)
  ]
  const toName = Object.keys(blockchain)[
    Object.values(blockchain).indexOf(toToken)
  ]

  // const refreshPrice = () => {
  //   fetchPrices('1', fromToken, reset, toToken, dex, chain)
  // }

  return (  
    !nixTradingPair
      ? (
          <div className="trading-pair">
            <p className='returned-price'>
              { price }
              <span className='price-span'>
                { fromName } / { toName }
              </span>
            </p>
            <button 
              className="nix-trading-pair btn"
              onClick={ () => setNixTradingPair(true) }
            >
              X
            </button>
            {/* <button
              className="refresh btn"
              onClick={ refreshPrice }
            >
              Refresh Price
            </button> */}
          </div>
        )
      : null
  )
}