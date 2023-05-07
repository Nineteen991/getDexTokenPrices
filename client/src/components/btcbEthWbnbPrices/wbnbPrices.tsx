import { useEffect, useState } from 'react'

import fetchPrices from '../../utils/fetchPrices'
import { BSCaddr } from '../../utils/addresses'
import { DexProps } from '../../utils/types'
import RenderTokenPrice from '../renderTokenPrice'

export default function WbnbPrices({ dex, chain }: DexProps) {
  const [wbnbToBusdPrices, setWbnbToBusdPrice] = useState<string>('')
  const [wbnbToUsdtPrices, setWbnbToUsdtPrice] = useState<string>('')
  // const [wbnbToUsdcPrices, setWbnbToUsdcPrice] = useState<string>('')

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal 

    fetchPrices(
      '1', BSCaddr.WBNB, setWbnbToBusdPrice, BSCaddr.BUSD, dex, chain, signal
    )
    fetchPrices(
      '1', BSCaddr.WBNB, setWbnbToUsdtPrice, BSCaddr.USDT, dex, chain, signal
      )
    // fetchPrices(
    //   '1', BSCaddr.WBNB, setWbnbToUsdcPrice, BSCaddr.USDC, dex, chain, signal
    //   )

    return () => controller.abort()
  }, [dex, chain])

  return (
    <div className='returned-prices'>
      {
        wbnbToBusdPrices
          ? <RenderTokenPrice 
              price={ wbnbToBusdPrices } 
              fromToken={ BSCaddr.WBNB } 
              toToken={ BSCaddr.BUSD }
              dex={ dex }
              chain={ chain }
              reset={ setWbnbToBusdPrice }
            />
          : <h3 className='returned-price'>'Fetching WBNB / BUSD price...'</h3>
      }
      {
        wbnbToUsdtPrices
          ? <RenderTokenPrice 
              price={ wbnbToUsdtPrices } 
              fromToken={ BSCaddr.WBNB } 
              toToken={ BSCaddr.USDT }
              dex={ dex }
              chain={ chain }
              reset={ setWbnbToUsdtPrice }
            />
          : <h3 className='returned-price'>'Fetching WBNB / USDT price...'</h3>
      }
      {/* {
        wbnbToUsdcPrices
          ? <RenderTokenPrice 
              price={ wbnbToUsdcPrices } 
              fromToken={ BSCaddr.WBNB } 
              toToken={ BSCaddr.USDC }
              dex={ dex }
              chain={ chain }
              reset={ setWbnbToUsdcPrice }
            />
          : <h3 className='returned-price'>'Fetching WBNB / USDC price...'</h3>
      } */}
    </div>
  )
}