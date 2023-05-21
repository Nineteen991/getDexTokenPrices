import { useContext, useEffect, useState } from 'react'

import { Context } from './tokenContext'
import { ContextTokens } from './utils/types'
import Header from './components/header'
import PickBlockChain from './components/pickBlockChain'
import CustomTokenPrice from './components/customTokenPrice'
import BSC from './components/blockchains/bsc'
import ETH from './components/blockchains/eth'
import Polygon from './components/blockchains/polygon'
import Footer from './components/footer'
import './App.sass'

export default function App() {
  const { blockChain } = useContext(Context) as ContextTokens
  const [renderBlockchain, setRenderBlockchain] = useState<JSX.Element | null>(null)
  
  useEffect(() => {
    if (blockChain === 'ETH') {
      setRenderBlockchain(<ETH />)
    } else if (blockChain === 'BSC') {
      setRenderBlockchain(<BSC />)
    } else if (blockChain === 'Polygon') {
      setRenderBlockchain(<Polygon />)
    } else {
      throw new Error ("App don't know which blockchain to render")
    }
  }, [blockChain])
  
  return (
    <div className='container'>
      <Header />
      <PickBlockChain />
      <CustomTokenPrice blockChain={ blockChain } />
      {
        renderBlockchain
      }
      <Footer />
    </div>
  )
}