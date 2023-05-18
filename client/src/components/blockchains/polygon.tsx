import QuickSwapV2 from "../dexes/polygon/quickSwapV2"
import SushiSwapV2 from "../dexes/polygon/sushiSwapV2"
import ApeSwapV2 from "../dexes/polygon/apeSwapV2"

export default function Polygon() {
  return (
    <div className="blockchain-div">
      <QuickSwapV2 />
      <SushiSwapV2 />
      <ApeSwapV2 />
    </div>
  )
}