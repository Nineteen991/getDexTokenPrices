import { useEffect, useState } from 'react'

import fetchPrices from '../utils/fetchPrices'
import { BSCaddr } from '../utils/addresses'
import TokenPrice from './tokenPrice'

export default function CakePrices() {
  const [cakeToWbnbPrices, setCakeToWbnbPrice] = useState<string>('')
  const [cakeToBusdPrices, setCakeToBusdPrice] = useState<string>('')
  const [cakeToUsdtPrices, setCakeToUsdtPrice] = useState<string>('')
  const [cakeToUsdcPrices, setCakeToUsdcPrice] = useState<string>('')

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal 

    fetchPrices('1', BSCaddr.CAKE, setCakeToWbnbPrice, BSCaddr.WBNB, signal)
    fetchPrices('1', BSCaddr.CAKE, setCakeToBusdPrice, BSCaddr.BUSD, signal)
    fetchPrices('1', BSCaddr.CAKE, setCakeToUsdtPrice, BSCaddr.USDT, signal)
    fetchPrices('1', BSCaddr.CAKE, setCakeToUsdcPrice, BSCaddr.USDC, signal)

    return () => controller.abort()
  }, [])

  return (
    <div className='returned-prices'>
      {
        cakeToWbnbPrices
          ? <TokenPrice 
              price={ cakeToWbnbPrices } 
              fromToken={ BSCaddr.CAKE } 
              toToken={ BSCaddr.WBNB }
              reset={ setCakeToWbnbPrice }
            />
          : <h3 className='returned-price'>'Fetching CAKE / WBNB price...'</h3>
      }
      {
        cakeToBusdPrices
          ? <TokenPrice 
              price={ cakeToBusdPrices } 
              fromToken={ BSCaddr.CAKE } 
              toToken={ BSCaddr.BUSD }
              reset={ setCakeToBusdPrice }
            />
          : <h3 className='returned-price'>'Fetching CAKE / BUSD price...'</h3>
      }
      {
        cakeToUsdtPrices
          ? <TokenPrice 
              price={ cakeToUsdtPrices } 
              fromToken={ BSCaddr.CAKE } 
              toToken={ BSCaddr.USDT }
              reset={ setCakeToUsdtPrice }
            />
          : <h3 className='returned-price'>'Fetching CAKE / USDT price...'</h3>
      }
      {
        cakeToUsdcPrices
          ? <TokenPrice 
              price={ cakeToUsdcPrices } 
              fromToken={ BSCaddr.CAKE } 
              toToken={ BSCaddr.USDC }
              reset={ setCakeToUsdcPrice }
            />
          : <h3 className='returned-price'>'Fetching CAKE / USDC price...'</h3>
      }
    </div>
  )
}