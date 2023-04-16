import { useEffect, useState } from 'react'

import fetchPrices from '../utils/fetchPrices'
import { BSCaddr } from '../utils/addresses'

export default function WbnbPrices() {
  const [wbnbToBusdPrices, setWbnbToBusdPrice] = useState<string>('')
  const [wbnbToUsdtPrices, setWbnbToUsdtPrice] = useState<string>('')
  const [wbnbToUsdcPrices, setWbnbToUsdcPrice] = useState<string>('')
  const [wbnbToCakePrices, setWbnbToCakePrice] = useState<string>('')

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal 

    fetchPrices('1', BSCaddr.WBNB, setWbnbToBusdPrice, BSCaddr.BUSD, signal)
    fetchPrices('1', BSCaddr.WBNB, setWbnbToUsdtPrice, BSCaddr.USDT, signal)
    fetchPrices('1', BSCaddr.WBNB, setWbnbToUsdcPrice, BSCaddr.USDC, signal)
    fetchPrices('1', BSCaddr.WBNB, setWbnbToCakePrice, BSCaddr.CAKE, signal)

    return () => controller.abort()
  }, [])

  return (
    <div className='returned-prices'>
      {
        wbnbToBusdPrices
          ? (<h3 className='returned-price'>
              { wbnbToBusdPrices }
              <span className='price-span'>WBNB / BUSD</span>
            </h3>)
          : <h3 className='returned-price'>'Fetching WBNB / BUSD price...'</h3>
      }
      {
        wbnbToUsdtPrices
          ? (<h3 className='returned-price'>
              { wbnbToUsdtPrices }
              <span className='price-span'>WBNB / USDT</span>
            </h3>)
          : <h3 className='returned-price'>'Fetching WBNB / USDT price...'</h3>
      }
      {
        wbnbToUsdcPrices
          ? (<h3 className='returned-price'>
              { wbnbToUsdcPrices }
              <span className='price-span'>WBNB / USDC</span>
            </h3>)
          : <h3 className='returned-price'>'Fetching WBNB / USDC price...'</h3>
      }
      {
        wbnbToCakePrices
          ? (<h3 className='returned-price'>
              { wbnbToCakePrices }
              <span className='price-span'>WBNB / CAKE</span>
            </h3>)
          : <h3 className='returned-price'>'Fetching WBNB / CAKE price...'</h3>
      }
    </div>
  )
}