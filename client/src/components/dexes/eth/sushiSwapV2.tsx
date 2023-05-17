import { useContext, useEffect, useState } from 'react'

import EthPrices from '../../initialPrices/ethPrices'
import fetchCustomPairPrices from '../../../utils/fetchCustomPairPrices'
import RenderCustomTokenPairs from '../../renderCustomTokenPairs'
import { Context } from '../../../tokenContext'
import { ContextTokens, TokenPairInfo } from '../../../utils/types'

export default function SushiSwapV2() {
  const dex = 'sushiSwapV2'
  const chain = 'ethV2'
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
    <div className='sushiswap dex'>
      <h2 className='dex-prices title-secondary'>SushiSwap Prices</h2>

      <EthPrices dex={ dex } chain={ chain } />

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