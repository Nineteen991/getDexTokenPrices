import PancakeSwapV2 from '../dexes/bsc/pancakeSwapV2'
import ApeSwapV2 from '../dexes/bsc/apeSwapV2'
import BakerySwapV2 from '../dexes/bsc/bakerySwapV2'
import BabySwapV2 from '../dexes/bsc/babySwapV2'
import BiSwapV2 from '../dexes/bsc/biSwapV2'

export default function BSC() {
  return (
    <div className='blockchain-div'>
      <PancakeSwapV2 />
      <ApeSwapV2 />
      <BakerySwapV2 />
      <BabySwapV2 />
      <BiSwapV2 />
    </div>
  )
}