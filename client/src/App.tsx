import PancakeSwapV2 from './components/dexes/pancakeSwapV2'
import ApeSwapV2 from './components/dexes/apeSwapV2'
import './App.sass'

export default function App() {
  return (
    <div className='container'>
      {/* <PancakeSwapV2 /> */}
      <ApeSwapV2 />
    </div>
  )
}