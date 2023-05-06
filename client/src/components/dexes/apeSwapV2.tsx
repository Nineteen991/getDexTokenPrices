import BtcbPrices from '../btcbEthWbnbPrices/btcbPrices'
import EthPrices from '../btcbEthWbnbPrices/ethPrices'
import WbnbPrices from '../btcbEthWbnbPrices/wbnbPrices'
import CustomTokenPrice from '../customTokenPrice'

export default function ApeSwapV2() {
  const dex = 'apeswapV2'
  const chain = 'bsc'

  return (
    <div className='apeswap dex'>
      <h2 className='dex-prices'>ApeSwap v2 Prices</h2>

      <CustomTokenPrice dex={ dex } chain={ chain } />
      <BtcbPrices dex={ dex } chain={ chain } />
      <EthPrices dex={ dex } chain={ chain } />
      <WbnbPrices dex={ dex } chain={ chain } />

    </div>
  )
}