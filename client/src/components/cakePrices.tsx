import { useEffect, useState } from 'react'

import fetchPrices from '../utils/fetchPrices'
import { BSCaddr } from '../utils/addresses'

export default function CakePrices() {
  const [cakeToBusdPrices, setCakeToBusdPrice] = useState<string>('')
  const [cakeToUsdtPrices, setCakeToUsdtPrice] = useState<string>('')
  const [cakeToUsdcPrices, setCakeToUsdcPrice] = useState<string>('')
  const [cakeToWbnbPrices, setCakeToWbnbPrice] = useState<string>('')

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal 

    fetchPrices('1', BSCaddr.CAKE, setCakeToBusdPrice, BSCaddr.BUSD, signal)
    fetchPrices('1', BSCaddr.CAKE, setCakeToUsdtPrice, BSCaddr.USDT, signal)
    fetchPrices('1', BSCaddr.CAKE, setCakeToUsdcPrice, BSCaddr.USDC, signal)
    fetchPrices('1', BSCaddr.CAKE, setCakeToWbnbPrice, BSCaddr.WBNB, signal)

    return () => controller.abort()
  }, [])

  return (
    <div className='returned-prices'>
      {
        cakeToBusdPrices
          ? (<h3 className='returned-price'>
              { cakeToBusdPrices }
              <span className='price-span'>CAKE / BUSD</span>
            </h3>)
          : <h3 className='returned-price'>'Fetching CAKE / BUSD price...'</h3>
      }
      {
        cakeToUsdtPrices
          ? (<h3 className='returned-price'>
              { cakeToUsdtPrices }
              <span className='price-span'>CAKE / USDT</span>
            </h3>)
          : <h3 className='returned-price'>'Fetching CAKE / USDT price...'</h3>
      }
      {
        cakeToUsdcPrices
          ? (<h3 className='returned-price'>
              { cakeToUsdcPrices }
              <span className='price-span'>CAKE / USDC</span>
            </h3>)
          : <h3 className='returned-price'>'Fetching CAKE / USDC price...'</h3>
      }
      {
        cakeToWbnbPrices
          ? (<h3 className='returned-price'>
              { cakeToWbnbPrices }
              <span className='price-span'>CAKE / WBNB</span>
            </h3>)
          : <h3 className='returned-price'>'Fetching CAKE / WBNB price...'</h3>
      }
    </div>
  )
}