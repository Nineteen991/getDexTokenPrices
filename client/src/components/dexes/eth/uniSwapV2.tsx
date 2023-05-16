import { useContext, useEffect, useState } from 'react'

import EthPrices from '../../btcbEthWbnbPrices/ethPrices'
import fetchCustomPairPrices from '../../../utils/fetchCustomPairPrices'
import RenderCustomTokenPairs from '../../renderCustomTokenPairs'
import { Context } from '../../../tokenContext'
import { ContextTokens, TokenPairInfo } from '../../../utils/types'

export default function UniSwapV2() {
  const dex = 'uniswapV2'
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
    <div className='uniswap dex'>
      <h2 className='dex-prices'>UniSwap v2 Prices</h2>

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