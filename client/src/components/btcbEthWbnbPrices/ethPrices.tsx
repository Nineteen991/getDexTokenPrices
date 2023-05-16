import { useEffect, useState } from 'react'

import fetchPrices from '../../utils/fetchPrices'
import { ETHaddr } from '../../utils/addresses'
import { DexProps } from '../../utils/types'
import RenderTokenPrice from '../renderTokenPrice'

export default function EthPrices({ dex, chain }: DexProps) {
  const [ethToUsdtPrices, setEthToUsdtPrice] = useState<string>('')
  const [ethToUsdcPrices, setEthToUsdcPrice] = useState<string>('')

  useEffect(() => {
    fetchPrices(
      '1', ETHaddr.WETH, setEthToUsdtPrice, ETHaddr.USDT, dex, chain)
    fetchPrices(
      '1', ETHaddr.WETH, setEthToUsdcPrice, ETHaddr.USDC, dex, chain)
  }, [dex, chain])

  return (
    <div className='returned-prices'>
      {
        ethToUsdtPrices
          ? <RenderTokenPrice 
              price={ ethToUsdtPrices } 
              fromToken={ ETHaddr.WETH } 
              toToken={ ETHaddr.USDT } 
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
              fromToken={ ETHaddr.WETH } 
              toToken={ ETHaddr.USDC } 
              dex={ dex }
              chain={ chain }
              reset={ setEthToUsdcPrice }
            />
          : <h3 className='returned-price'>'Fetching ETH / USDC price...'</h3>
      }
    </div>
  )
}