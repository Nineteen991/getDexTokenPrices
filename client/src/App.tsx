import PancakeSwapV2 from './components/dexes/pancakeSwapV2'
import ApeSwapV2 from './components/dexes/apeSwapV2'
import BakerySwapV2 from './components/dexes/bakerySwapV2'
import BabySwapV2 from './components/dexes/babySwapV2'
import BiSwapV2 from './components/dexes/biSwapV2'
import './App.sass'

export default function App() {
  return (
    <div className='container'>
      <PancakeSwapV2 />
      <ApeSwapV2 />
      <BakerySwapV2 />
      <BabySwapV2 />
      <BiSwapV2 />
    </div>
  )
}