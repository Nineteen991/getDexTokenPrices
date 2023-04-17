import { useEffect, useState } from 'react'

import fetchPrices from '../utils/fetchPrices'
import { BSCaddr } from '../utils/addresses'
import TokenPrice from './tokenPrice'

export default function BtcbPrices() {
  const [btcbToWbnbPrices, setBtcbToWbnbPrice] = useState<string>('')
  const [btcbToBusdPrices, setBtcbToBusdPrice] = useState<string>('')
  const [btcbToUsdtPrices, setBtcbToUsdtPrice] = useState<string>('')
  const [btcbToUsdcPrices, setBtcbToUsdcPrice] = useState<string>('')

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal 

    fetchPrices('1', BSCaddr.BTCB, setBtcbToWbnbPrice, BSCaddr.WBNB, signal)
    fetchPrices('1', BSCaddr.BTCB, setBtcbToBusdPrice, BSCaddr.BUSD, signal)
    fetchPrices('1', BSCaddr.BTCB, setBtcbToUsdtPrice, BSCaddr.USDT, signal)
    fetchPrices('1', BSCaddr.BTCB, setBtcbToUsdcPrice, BSCaddr.USDC, signal)

    return () => controller.abort()
  }, [])

  return (
    <div className='returned-prices'>
      {
        btcbToWbnbPrices
          ? <TokenPrice 
              price={ btcbToWbnbPrices } 
              fromToken={ BSCaddr.BTCB } 
              toToken={ BSCaddr.WBNB }
              reset={ setBtcbToWbnbPrice }
            />
          : <h3 className='returned-price'>'Fetching BTCB / WBNB price...'</h3>
      }
      {
        btcbToBusdPrices
          ? <TokenPrice 
              price={ btcbToBusdPrices } 
              fromToken={ BSCaddr.BTCB } 
              toToken={ BSCaddr.BUSD } 
              reset={ setBtcbToBusdPrice }
            />
          : <h3 className='returned-price'>'Fetching BTCB / BUSD price...'</h3>
      }
      {
        btcbToUsdtPrices
          ? <TokenPrice 
              price={ btcbToUsdtPrices } 
              fromToken={ BSCaddr.BTCB } 
              toToken={ BSCaddr.USDT } 
              reset={ setBtcbToUsdtPrice }
            />
          : <h3 className='returned-price'>'Fetching BTCB / USDT price...'</h3>
      }
      {
        btcbToUsdcPrices
          ? <TokenPrice 
              price={ btcbToUsdcPrices } 
              fromToken={ BSCaddr.BTCB } 
              toToken={ BSCaddr.USDC } 
              reset={ setBtcbToUsdcPrice }
            />
          : <h3 className='returned-price'>'Fetching BTCB / USDC price...'</h3>
      }
    </div>
  )
}