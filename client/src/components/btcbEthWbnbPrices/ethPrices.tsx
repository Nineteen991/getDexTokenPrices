import { useEffect, useState } from 'react'

import fetchPrices from '../../utils/fetchPrices'
import { BSCaddr } from '../../utils/addresses'
import { DexProps } from '../../utils/types'
import RenderTokenPrice from '../renderTokenPrice'

export default function EthPrices({ dex, chain }: DexProps) {
  const [ethToBusdPrices, setEthToBusdPrice] = useState<string>('')
  const [ethToUsdtPrices, setEthToUsdtPrice] = useState<string>('')
  const [ethToUsdcPrices, setEthToUsdcPrice] = useState<string>('')

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal 

    fetchPrices(
      '1', BSCaddr.ETH, setEthToBusdPrice, BSCaddr.BUSD, dex, chain, signal
    )
    fetchPrices(
      '1', BSCaddr.ETH, setEthToUsdtPrice, BSCaddr.USDT, dex, chain, signal
    )
    fetchPrices(
      '1', BSCaddr.ETH, setEthToUsdcPrice, BSCaddr.USDC, dex, chain, signal
    )

    return () => controller.abort()
  }, [dex, chain])

  return (
    <div className='returned-prices'>
      {
        ethToBusdPrices
          ? <RenderTokenPrice 
              price={ ethToBusdPrices } 
              fromToken={ BSCaddr.ETH } 
              toToken={ BSCaddr.BUSD } 
              dex={ dex }
              chain={ chain }
              reset={ setEthToBusdPrice }
            />
          : <h3 className='returned-price'>'Fetching ETH / BUSD price...'</h3>
      }
      {
        ethToUsdtPrices
          ? <RenderTokenPrice 
              price={ ethToUsdtPrices } 
              fromToken={ BSCaddr.ETH } 
              toToken={ BSCaddr.USDT } 
              dex={ dex }
              chain={ chain }
              reset={ setEthToUsdtPrice }
            />
          : <h3 className='returned-price'>'Fetching ETH / USDT price...'</h3>
      }
      {
        ethToUsdcPrices
          ? <RenderTokenPrice 
              price={ ethToUsdcPrices } 
              fromToken={ BSCaddr.ETH } 
              toToken={ BSCaddr.USDC } 
              dex={ dex }
              chain={ chain }
              reset={ setEthToUsdcPrice }
            />
          : <h3 className='returned-price'>'Fetching ETH / USDC price...'</h3>
      }
    </div>
  )
}