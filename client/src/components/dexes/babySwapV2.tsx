import WbnbPrices from '../btcbEthWbnbPrices/wbnbPrices'
import CustomTokenPrice from '../customTokenPrice'

export default function BabySwapV2() {
  const dex = 'babyswapV2'
  const chain = 'bsc'

  return (
    <div className='babyswap dex'>
      <h2 className='dex-prices'>BabySwap v2 Prices</h2>

      <CustomTokenPrice dex={ dex } chain={ chain } />
      <WbnbPrices dex={ dex } chain={ chain } />

    </div>
  )
}