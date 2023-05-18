import { useEffect, useState } from 'react'

import fetchPrices from '../../utils/fetchPrices'
import { POLYGONaddr } from '../../utils/addresses'
import { DexProps } from '../../utils/types'
import RenderTokenPrice from '../renderTokenPrice'

export default function PolygonPrices({ dex, chain }: DexProps) {
  const [ethToUsdtPrices, setEthToUsdtPrice] = useState<string>('')
  const [ethToUsdcPrices, setEthToUsdcPrice] = useState<string>('')

  useEffect(() => {
    fetchPrices(
      '1', POLYGONaddr.MATIC, setEthToUsdtPrice, POLYGONaddr.USDT, dex, chain)
    fetchPrices(
      '1', POLYGONaddr.MATIC, setEthToUsdcPrice, POLYGONaddr.USDC, dex, chain)
  }, [dex, chain])

  return (
    <div className='returned-prices'>
      {
        ethToUsdtPrices
          ? <RenderTokenPrice 
              price={ ethToUsdtPrices } 
              fromToken={ POLYGONaddr.MATIC } 
              toToken={ POLYGONaddr.USDT } 
              dex={ dex }
              chain={ chain }
              reset={ setEthToUsdtPrice }
            />
          : <h3 className='returned-price-h3 title-tertiary'>
              'Fetching MATIC / USDT price...'
            </h3>
      }
      {
        ethToUsdcPrices
          ? <RenderTokenPrice 
              price={ ethToUsdcPrices } 
              fromToken={ POLYGONaddr.MATIC } 
              toToken={ POLYGONaddr.USDC } 
              dex={ dex }
              chain={ chain }
              reset={ setEthToUsdcPrice }
            />
          : <h3 className='returned-price-h3 title-tertiary'>
              'Fetching MATIC / USDC price...'
            </h3>
      }
    </div>
  )
}