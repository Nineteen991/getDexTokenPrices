import WbnbPrices from '../btcbEthWbnbPrices/wbnbPrices'
import CustomTokenPrice from '../customTokenPrice'

export default function BakerySwapV2() {
  const dex = 'bakeryswapV2'
  const chain = 'bsc'

  return (
    <div className='bakeryswap dex'>
      <h2 className='dex-prices'>BakerySwap v2 Prices</h2>

      <CustomTokenPrice dex={ dex } chain={ chain } />
      <WbnbPrices dex={ dex } chain={ chain } />

    </div>
  )
}