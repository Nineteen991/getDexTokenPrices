import { useContext } from 'react'

import { ContextTokens } from './utils/interfaces'
import BtcbPrices from './components/btcbPrices'
import EthPrices from './components/ethPrices'
import WbnbPrices from './components/wbnbPrices'
import CakePrices from './components/cakePrices'
import CustomTokenPrice from './components/customTokenPrice'
import { Context } from './tokenContext'
import './App.sass'

export default function App() {
  const { returnedToken, customPairs } = useContext(Context) as ContextTokens

console.log(customPairs)
  return (
    <div className='container'>
      <div className='pancakeswap'>

        <h2 className='dex-prices'>PancakeSwap v2 Prices</h2>

        <CustomTokenPrice />
        <BtcbPrices />
        <EthPrices />
        <WbnbPrices />
        <CakePrices />

        {
          returnedToken.amount
            ? (
                <div className='returned-prices'>
                  <h3 className='returned-price'>
                    { returnedToken.amount }
                    <span className='price-span'>
                      { returnedToken.fromToken } / { returnedToken.toToken }
                    </span>
                  </h3>
                </div>
              )
            : null
        }

      </div>
    </div>
  )
}