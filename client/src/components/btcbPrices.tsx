import { useEffect, useState } from 'react'

import fetchPrices from '../utils/fetchPrices'
import { BSCaddr } from '../utils/addresses'

export default function BtcbPrices() {
  const [btcbToWbnbPrices, setBtcbToWbnbPrice] = useState<string>('')
  const [btcbToBusdPrices, setBtcbToBusdPrice] = useState<string>('')
  const [btcbToUsdtPrices, setBtcbToUsdtPrice] = useState<string>('')
  const [btcbToUsdcPrices, setBtcbToUsdcPrice] = useState<string>('')
  const [btcbToCakePrices, setBtcbToCakePrice] = useState<string>('')

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal 

    fetchPrices('1', BSCaddr.BTCB, setBtcbToWbnbPrice, BSCaddr.WBNB, signal)
    fetchPrices('1', BSCaddr.BTCB, setBtcbToBusdPrice, BSCaddr.BUSD, signal)
    fetchPrices('1', BSCaddr.BTCB, setBtcbToUsdtPrice, BSCaddr.USDT, signal)
    fetchPrices('1', BSCaddr.BTCB, setBtcbToUsdcPrice, BSCaddr.USDC, signal)
    fetchPrices('1', BSCaddr.BTCB, setBtcbToCakePrice, BSCaddr.CAKE, signal)

    return () => controller.abort()
  }, [])

  return (
    <div className='returned-prices'>
      {
        btcbToWbnbPrices
          ? (<h3 className='returned-price'>
              { btcbToWbnbPrices }
              <span className='price-span'>BTCB / WBNB</span>
            </h3>)
          : <h3 className='returned-price'>'Fetching BTCB / WBNB price...'</h3>
      }
      {
        btcbToBusdPrices
          ? (<h3 className='returned-price'>
              { btcbToBusdPrices }
              <span className='price-span'>BTCB / BUSD</span>
            </h3>)
          : <h3 className='returned-price'>'Fetching BTCB / BUSD price...'</h3>
      }
      {
        btcbToUsdtPrices
          ? (<h3 className='returned-price'>
              { btcbToUsdtPrices }
              <span className='price-span'>BTCB / USDT</span>
            </h3>)
          : <h3 className='returned-price'>'Fetching BTCB / USDT price...'</h3>
      }
      {
        btcbToUsdcPrices
          ? (<h3 className='returned-price'>
              { btcbToUsdcPrices }
              <span className='price-span'>BTCB / USDC</span>
            </h3>)
          : <h3 className='returned-price'>'Fetching BTCB / USDC price...'</h3>
      }
      {
        btcbToCakePrices
          ? (<h3 className='returned-price'>
              { btcbToCakePrices }
              <span className='price-span'>BTCB / CAKE</span>
            </h3>)
          : <h3 className='returned-price'>'Fetching BTCB / CAKE price...'</h3>
      }
    </div>
  )
}