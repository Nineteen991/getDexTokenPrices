import { useEffect, useState } from 'react'

import fetchPrices from '../../utils/fetchPrices'
import { BSCaddr } from '../../utils/addresses'
import { DexProps } from '../../utils/types'
import RenderTokenPrice from '../renderTokenPrice'

export default function CakePrices({ dex, chain }: DexProps) {
  const [cakeToWbnbPrices, setCakeToWbnbPrice] = useState<string>('')
  const [cakeToBusdPrices, setCakeToBusdPrice] = useState<string>('')
  const [cakeToUsdtPrices, setCakeToUsdtPrice] = useState<string>('')
  const [cakeToUsdcPrices, setCakeToUsdcPrice] = useState<string>('')

  useEffect(() => {
    fetchPrices(
      '1', BSCaddr.CAKE, setCakeToWbnbPrice, BSCaddr.WBNB, dex, chain)
    fetchPrices(
      '1', BSCaddr.CAKE, setCakeToBusdPrice, BSCaddr.BUSD, dex, chain)
    fetchPrices(
      '1', BSCaddr.CAKE, setCakeToUsdtPrice, BSCaddr.USDT, dex, chain)
    fetchPrices(
      '1', BSCaddr.CAKE, setCakeToUsdcPrice, BSCaddr.USDC, dex, chain)
  }, [dex, chain])

  return (
    <div className='returned-prices'>
      {
        cakeToWbnbPrices
          ? <RenderTokenPrice 
              price={ cakeToWbnbPrices } 
              fromToken={ BSCaddr.CAKE } 
              toToken={ BSCaddr.WBNB }
              dex={ dex }
              chain={ chain }
              reset={ setCakeToWbnbPrice }
            />
          : <h3 className='returned-price'>'Fetching CAKE / WBNB price...'</h3>
      }
      {
        cakeToBusdPrices
          ? <RenderTokenPrice 
              price={ cakeToBusdPrices } 
              fromToken={ BSCaddr.CAKE } 
              toToken={ BSCaddr.BUSD }
              dex={ dex }
              chain={ chain }
              reset={ setCakeToBusdPrice }
            />
          : <h3 className='returned-price'>'Fetching CAKE / BUSD price...'</h3>
      }
      {
        cakeToUsdtPrices
          ? <RenderTokenPrice 
              price={ cakeToUsdtPrices } 
              fromToken={ BSCaddr.CAKE } 
              toToken={ BSCaddr.USDT }
              dex={ dex }
              chain={ chain }
              reset={ setCakeToUsdtPrice }
            />
          : <h3 className='returned-price'>'Fetching CAKE / USDT price...'</h3>
      }
      {
        cakeToUsdcPrices
          ? <RenderTokenPrice 
              price={ cakeToUsdcPrices } 
              fromToken={ BSCaddr.CAKE } 
              toToken={ BSCaddr.USDC }
              dex={ dex }
              chain={ chain }
              reset={ setCakeToUsdcPrice }
            />
          : <h3 className='returned-price'>'Fetching CAKE / USDC price...'</h3>
      }
    </div>
  )
}