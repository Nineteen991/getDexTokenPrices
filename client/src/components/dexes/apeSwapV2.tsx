import { useContext, useEffect, useState } from 'react'

import WbnbPrices from '../btcbEthWbnbPrices/wbnbPrices'
import fetchCustomPairPrices from '../../utils/fetchCustomPairPrices'
import RenderCustomTokenPairs from '../renderCustomTokenPairs'
import { Context } from '../../tokenContext'
import { ContextTokens, TokenPairInfo } from '../../utils/types'

export default function ApeSwapV2() {
  const dex = 'apeswapV2'
  const chain = 'bsc'
  const [customDexPairs, setCustomDexPairs] = useState<TokenPairInfo[]>([])
  const { customPair } = useContext(Context) as ContextTokens

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal 

    if (customPair.id) {
      fetchCustomPairPrices(
        customPair,
        signal,
        dex,
        chain,
        setCustomDexPairs
      )
    }
    
    return () => controller.abort()
  }, [customPair])

  return (
    <div className='apeswap dex'>
      <h2 className='dex-prices'>ApeSwap v2 Prices</h2>

      <WbnbPrices dex={ dex } chain={ chain } />

      {
        customDexPairs
          ? customDexPairs.map(pair => (
              <RenderCustomTokenPairs 
                tokenPair={ pair }
                key={ pair.id }
              />
            ))
          : null
      }

    </div>
  )
}