import { useEffect, useState } from 'react'

import fetchPrices from '../utils/fetchPrices'
import { BSCaddr } from '../utils/addresses'
import TokenPrice from './tokenPrice'

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
          ? <TokenPrice 
              price={ wbnbToBusdPrices } 
              fromToken={ BSCaddr.WBNB } 
              toToken={ BSCaddr.BUSD }
              reset={ setWbnbToBusdPrice }
            />
          : <h3 className='returned-price'>'Fetching WBNB / BUSD price...'</h3>
      }
      {
        wbnbToUsdtPrices
          ? <TokenPrice 
              price={ wbnbToUsdtPrices } 
              fromToken={ BSCaddr.WBNB } 
              toToken={ BSCaddr.USDT }
              reset={ setWbnbToUsdtPrice }
            />
          : <h3 className='returned-price'>'Fetching WBNB / USDT price...'</h3>
      }
      {
        wbnbToUsdcPrices
          ? <TokenPrice 
              price={ wbnbToUsdcPrices } 
              fromToken={ BSCaddr.WBNB } 
              toToken={ BSCaddr.USDC }
              reset={ setWbnbToUsdcPrice }
            />
          : <h3 className='returned-price'>'Fetching WBNB / USDC price...'</h3>
      }
      {
        wbnbToCakePrices
          ? <TokenPrice 
              price={ wbnbToCakePrices } 
              fromToken={ BSCaddr.WBNB } 
              toToken={ BSCaddr.CAKE }
              reset={ setWbnbToCakePrice }
            />
          : <h3 className='returned-price'>'Fetching WBNB / CAKE price...'</h3>
      }
    </div>
  )
}