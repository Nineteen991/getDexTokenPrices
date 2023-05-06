import { useContext } from 'react'

import { ContextTokens } from './utils/types'
import BtcbPrices from './components/btcbPrices'
import EthPrices from './components/ethPrices'
import WbnbPrices from './components/wbnbPrices'
// import CakePrices from './components/cakePrices'
import CustomTokenPrice from './components/customTokenPrice'
import { Context } from './tokenContext'
import './App.sass'

export default function App() {
  const {  customPairs } = useContext(Context) as ContextTokens

console.log(customPairs)
  return (
    <div className='container'>
      <div className='pancakeswap'>

        <h2 className='dex-prices'>PancakeSwap v2 Prices</h2>

        <CustomTokenPrice />
        <BtcbPrices />
        <EthPrices />
        <WbnbPrices />
        {/* <CakePrices /> */}

      </div>
    </div>
  )
}