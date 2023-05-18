import { useContext, useEffect, useState } from 'react'

import PolygonPrices from '../../initialPrices/polygonPrices'
import fetchCustomPairPrices from '../../../utils/fetchCustomPairPrices'
import RenderCustomTokenPairs from '../../renderCustomTokenPairs'
import { Context } from '../../../tokenContext'
import { ContextTokens, TokenPairInfo } from '../../../utils/types'

export default function ApeSwapV2() {
  const dex = 'apeswapV2'
  const chain = 'polygonV2'
  const [customDexPairs, setCustomDexPairs] = useState<TokenPairInfo[]>([])
  const { customPair } = useContext(Context) as ContextTokens

  useEffect(() => {
    if (customPair.id) {
      fetchCustomPairPrices(
        customPair,
        dex,
        chain,
        setCustomDexPairs
      )
    }
  }, [customPair])

  return (
    <div className='apeswap dex'>
      <h2 className='dex-prices title-secondary'>ApeSwap v2 Prices</h2>

      <PolygonPrices dex={ dex } chain={ chain } />

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