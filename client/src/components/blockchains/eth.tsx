import UniSwapV2 from '../dexes/eth/uniSwapV2'
import SushiSwapV2 from '../dexes/eth/sushiSwapV2'
import UniSwapV3 from '../dexes/eth/uniSwapV3'

export default function ETH() {
  return (
    <div className="blockchain-div">
      <UniSwapV2 />
      <UniSwapV3 />
      <SushiSwapV2 />
    </div>
  )
}