import { useState, useEffect } from 'react'

import fetchPrices from './utils/fetchPrices'
import { BSCaddr } from './utils/addresses'
import { Tokens } from './utils/interfaces'
import BtcbPrices from './components/btcbPrices'
import EthPrices from './components/ethPrices'
import WbnbPrices from './components/wbnbPrices'
import CakePrices from './components/cakePrices'
import './App.sass'

export default function App() {
  const [inputToken, setInputToken] = useState<Tokens>({
    amount: '',
    fromToken: '',
    toToken: '',
  })
  const [returnedToken, setReturnedToken] = useState<Tokens>({
    amount: '',
    fromToken: '',
    toToken: ''
  })

  const handleChange = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    const target = e.target as HTMLInputElement

    const { name, value } = target
    setInputToken(prev => (
      {
        ...prev,
        [name]: value
      }
    ))

    const key = Object.keys(BSCaddr)[Object.values(BSCaddr).indexOf(value)]
    setReturnedToken(prev => (
      name === 'amount'
        ? {
            ...prev,
            amount: ''
          }
        : {
            ...prev,
            [name]: key
          }
    ))
  }
console.log(returnedToken)
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()

    fetchPrices('1', BSCaddr.BTCB, setReturnedToken, BSCaddr.WBNB, signal)
  }

  return (
    <div className='container'>
      <div className='pancakeswap'>

        <h2 className='dex-prices'>PancakeSwap v2 Prices</h2>

        <div className='input-fields'>
          <form className='input-form' onSubmit={ handleSubmit }>
            <input
              name='amount'
              className='input-amount'
              placeholder='Amount'
              value={ inputToken.amount }
              onChange={ handleChange }
              required
            />
            <select
              name='fromToken'
              className='input-tokens'
              onChange={ handleChange }
              required
            >
              <option value=''></option>
              <option value={ BSCaddr.BTCB } id='BTCB'>BTCB</option>
              <option value={ BSCaddr.ETH }>ETH</option>
              <option value={ BSCaddr.WBNB }>WBNB</option>
              <option value={ BSCaddr.CAKE }>CAKE</option>
              <option value={ BSCaddr.BUSD }>BUSD</option>
              <option value={ BSCaddr.USDT }>USDT</option>
              <option value={ BSCaddr.USDC }>USDC</option>
            </select>
            <select
              name='toToken'
              className='input-tokens'
              onChange={ handleChange }
              required
            >
              <option value=''></option>
              <option value={ BSCaddr.WBNB }>WBNB</option>
              <option value={ BSCaddr.BUSD }>BUSD</option>
              <option value={ BSCaddr.USDT }>USDT</option>
              <option value={ BSCaddr.USDC }>USDC</option>
              <option value={ BSCaddr.BTCB }>BTCB</option>
              <option value={ BSCaddr.ETH }>ETH</option>
              <option value={ BSCaddr.CAKE }>CAKE</option>
            </select>
            <button 
              type='submit'
              className='submit-btn'
            >
              Submit
            </button>
          </form>
        </div>

        <BtcbPrices />
        <EthPrices />
        <WbnbPrices />
        <CakePrices />

      </div>
    </div>
  )
}