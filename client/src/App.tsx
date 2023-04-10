import { useState, useEffect } from 'react'

import { BSCaddr } from './utils/addresses'
import { Tokens } from './utils/interfaces'
import './App.sass'

export default function App() {
  const [tokens, setTokens] = useState<Tokens>({
    amount: '1',
    fromToken: BSCaddr.BTCB,
    toToken: BSCaddr.USDT
  })

  const handleChange = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    const target = e.target as HTMLInputElement
    const {name, value} = target
    setTokens(prev => (
      {
        ...prev,
        [name]: value
      }
    ))
  }
console.log(tokens)
  return (
    <div className='container'>
      <div className='pancakeswap'>
        <div className='input-fields'>
          <form className='input-form'>
            <input
              name='amount'
              className='input-amount'
              placeholder='Amount'
              value={ tokens.amount }
              onChange={ handleChange }
              required
            />
            <select
              name='fromToken'
              className='input-tokens'
              onChange={ handleChange }
            >
              <option value={ BSCaddr.BTCB }>BTCB</option>
              <option value={ BSCaddr.WBNB }>WBNB</option>
              <option value={ BSCaddr.CAKE }>CAKE</option>
              <option value={ BSCaddr.ETH }>ETH</option>
              <option value={ BSCaddr.USDT }>USDT</option>
            </select>
            <select
              name='toToken'
              className='input-tokens'
              onChange={ handleChange }
            >
              <option value={ BSCaddr.USDT }>USDT</option>
              <option value={ BSCaddr.BTCB }>BTCB</option>
              <option value={ BSCaddr.WBNB }>WBNB</option>
              <option value={ BSCaddr.CAKE }>CAKE</option>
              <option value={ BSCaddr.ETH }>ETH</option>
            </select>
          </form>
          <h3 className='returned-price'>1</h3>
        </div>
      </div>
    </div>
  )
}