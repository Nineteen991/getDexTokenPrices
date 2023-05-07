import WbnbPrices from '../btcbEthWbnbPrices/wbnbPrices'
import CustomTokenPrice from '../customTokenPrice'

export default function BiSwapV2() {
  const dex = 'biswapV2'
  const chain = 'bsc'

  return (
    <div className='biswap dex'>
      <h2 className='dex-prices'>BiSwap v2 Prices</h2>

      <CustomTokenPrice dex={ dex } chain={ chain } />
      <WbnbPrices dex={ dex } chain={ chain } />

    </div>
  )
}