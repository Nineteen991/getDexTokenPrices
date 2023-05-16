import { useContext, useState } from 'react'

import { Context } from './tokenContext'
import { ContextTokens } from './utils/types'
import PickBlockChain from './components/pickBlockChain'
import CustomTokenPrice from './components/customTokenPrice'
import BSC from './components/blockchains/bsc'
import ETH from './components/blockchains/eth'

import './App.sass'

export default function App() {
  const { blockChain } = useContext(Context) as ContextTokens
  

  return (
    <div className='container'>
      <PickBlockChain />
      <CustomTokenPrice blockChain={blockChain} />
      {
        blockChain === 'ETH'
          ? <ETH />
          : <BSC />
      }
    </div>
  )
}