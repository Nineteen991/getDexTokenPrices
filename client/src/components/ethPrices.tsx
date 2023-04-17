import { useEffect, useState } from 'react'

import fetchPrices from '../utils/fetchPrices'
import { BSCaddr } from '../utils/addresses'
import TokenPrice from './tokenPrice'

export default function EthPrices() {
  const [ethToWbnbPrices, setEthToWbnbPrice] = useState<string>('')
  const [ethToBusdPrices, setEthToBusdPrice] = useState<string>('')
  const [ethToUsdtPrices, setEthToUsdtPrice] = useState<string>('')
  const [ethToUsdcPrices, setEthToUsdcPrice] = useState<string>('')

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal 

    fetchPrices('1', BSCaddr.ETH, setEthToWbnbPrice, BSCaddr.WBNB, signal)
    fetchPrices('1', BSCaddr.ETH, setEthToBusdPrice, BSCaddr.BUSD, signal)
    fetchPrices('1', BSCaddr.ETH, setEthToUsdtPrice, BSCaddr.USDT, signal)
    fetchPrices('1', BSCaddr.ETH, setEthToUsdcPrice, BSCaddr.USDC, signal)

    return () => controller.abort()
  }, [])

  return (
    <div className='returned-prices'>
      {
        ethToWbnbPrices
          ? <TokenPrice 
              price={ ethToWbnbPrices } 
              fromToken={ BSCaddr.ETH } 
              toToken={ BSCaddr.WBNB }
              reset={ setEthToWbnbPrice }
            />
          : <h3 className='returned-price'>'Fetching ETH / WBNB price...'</h3>
      }
      {
        ethToBusdPrices
          ? <TokenPrice 
              price={ ethToBusdPrices } 
              fromToken={ BSCaddr.ETH } 
              toToken={ BSCaddr.BUSD } 
              reset={ setEthToBusdPrice }
            />
          : <h3 className='returned-price'>'Fetching ETH / BUSD price...'</h3>
      }
      {
        ethToUsdtPrices
          ? <TokenPrice 
              price={ ethToUsdtPrices } 
              fromToken={ BSCaddr.ETH } 
              toToken={ BSCaddr.USDT } 
              reset={ setEthToUsdtPrice }
            />
          : <h3 className='returned-price'>'Fetching ETH / USDT price...'</h3>
      }
      {
        ethToUsdcPrices
          ? <TokenPrice 
              price={ ethToUsdcPrices } 
              fromToken={ BSCaddr.ETH } 
              toToken={ BSCaddr.USDC } 
              reset={ setEthToUsdcPrice }
            />
          : <h3 className='returned-price'>'Fetching ETH / USDC price...'</h3>
      }
    </div>
  )
}