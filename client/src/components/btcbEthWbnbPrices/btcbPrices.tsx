import { useEffect, useState } from 'react'

import fetchPrices from '../../utils/fetchPrices'
import { BSCaddr } from '../../utils/addresses'
import { DexProps } from '../../utils/types'
import RenderTokenPrice from '../renderTokenPrice'

export default function BtcbPrices({ dex, chain }: DexProps) {
  const [btcbToBusdPrices, setBtcbToBusdPrice] = useState<string>('')
  const [btcbToUsdtPrices, setBtcbToUsdtPrice] = useState<string>('')
  const [btcbToUsdcPrices, setBtcbToUsdcPrice] = useState<string>('')

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    fetchPrices(
      '1', BSCaddr.BTCB, setBtcbToBusdPrice, BSCaddr.BUSD, dex, chain, signal
    )
    fetchPrices(
      '1', BSCaddr.BTCB, setBtcbToUsdtPrice, BSCaddr.USDT, dex, chain, signal
    )
    fetchPrices(
      '1', BSCaddr.BTCB, setBtcbToUsdcPrice, BSCaddr.USDC, dex, chain, signal
    )

    return () => controller.abort()
  }, [dex, chain])

  return (
    <div className='returned-prices'>
      {
        btcbToBusdPrices
          ? <RenderTokenPrice 
              price={ btcbToBusdPrices } 
              fromToken={ BSCaddr.BTCB } 
              toToken={ BSCaddr.BUSD } 
              dex={ dex }
              chain={ chain }
              reset={ setBtcbToBusdPrice }
            />
          : <h3 className='returned-price'>'Fetching BTCB / BUSD price...'</h3>
      }
      {
        btcbToUsdtPrices
          ? <RenderTokenPrice 
              price={ btcbToUsdtPrices } 
              fromToken={ BSCaddr.BTCB } 
              toToken={ BSCaddr.USDT } 
              dex={ dex }
              chain={ chain }
              reset={ setBtcbToUsdtPrice }
            />
          : <h3 className='returned-price'>'Fetching BTCB / USDT price...'</h3>
      }
      {
        btcbToUsdcPrices
          ? <RenderTokenPrice 
              price={ btcbToUsdcPrices } 
              fromToken={ BSCaddr.BTCB } 
              toToken={ BSCaddr.USDC } 
              dex={ dex }
              chain={ chain }
              reset={ setBtcbToUsdcPrice }
            />
          : <h3 className='returned-price'>'Fetching BTCB / USDC price...'</h3>
      }
    </div>
  )
}