import { useEffect, useState } from 'react'

import fetchPrices from '../utils/fetchPrices'
import { BSCaddr } from '../utils/addresses'

export default function EthPrices() {
  const [ethToWbnbPrices, setEthToWbnbPrice] = useState<string>('')
  const [ethToBusdPrices, setEthToBusdPrice] = useState<string>('')
  const [ethToUsdtPrices, setEthToUsdtPrice] = useState<string>('')
  const [ethToUsdcPrices, setEthToUsdcPrice] = useState<string>('')
  const [ethToCakePrices, setEthToCakePrice] = useState<string>('')

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal 

    fetchPrices('1', BSCaddr.ETH, setEthToWbnbPrice, BSCaddr.WBNB, signal)
    fetchPrices('1', BSCaddr.ETH, setEthToBusdPrice, BSCaddr.BUSD, signal)
    fetchPrices('1', BSCaddr.ETH, setEthToUsdtPrice, BSCaddr.USDT, signal)
    fetchPrices('1', BSCaddr.ETH, setEthToUsdcPrice, BSCaddr.USDC, signal)
    fetchPrices('1', BSCaddr.ETH, setEthToCakePrice, BSCaddr.CAKE, signal)

    return () => controller.abort()
  }, [])

  return (
    <div className='returned-prices'>
      {
        ethToWbnbPrices
          ? (<h3 className='returned-price'>
              { ethToWbnbPrices }
              <span className='price-span'>ETH / WBNB</span>
            </h3>)
          : <h3 className='returned-price'>'Fetching ETH / WBNB price...'</h3>
      }
      {
        ethToBusdPrices
          ? (<h3 className='returned-price'>
              { ethToBusdPrices }
              <span className='price-span'>ETH / BUSD</span>
            </h3>)
          : <h3 className='returned-price'>'Fetching ETH / BUSD price...'</h3>
      }
      {
        ethToUsdtPrices
          ? (<h3 className='returned-price'>
              { ethToUsdtPrices }
              <span className='price-span'>ETH / USDT</span>
            </h3>)
          : <h3 className='returned-price'>'Fetching ETH / USDT price...'</h3>
      }
      {
        ethToUsdcPrices
          ? (<h3 className='returned-price'>
              { ethToUsdcPrices }
              <span className='price-span'>ETH / USDC</span>
            </h3>)
          : <h3 className='returned-price'>'Fetching ETH / USDC price...'</h3>
      }
      {
        ethToCakePrices
          ? (<h3 className='returned-price'>
              { ethToCakePrices }
              <span className='price-span'>ETH / CAKE</span>
            </h3>)
          : <h3 className='returned-price'>'Fetching ETH / CAKE price...'</h3>
      }
    </div>
  )
}