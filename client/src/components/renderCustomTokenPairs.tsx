import { RenderCustomTokenPairsProps } from '../utils/types'
import { useNixTradingPair } from "../hooks/useNixTradingPair"

export default function RenderCustomTokenPairs({ tokenPair }: RenderCustomTokenPairsProps) {
  const { nixTradingPair, setNixTradingPair } = useNixTradingPair()
  
  return (
    !nixTradingPair
      ? (
          <div className="trading-pair">
            <p className='returned-price'>
              { tokenPair.amount }
              <span className='price-span'>
                { tokenPair.fromTokenName } / { tokenPair.toTokenName }
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