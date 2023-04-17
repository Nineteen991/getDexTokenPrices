import { useContext, useState } from 'react'

import { BSCaddr } from '../utils/addresses'
import fetchCustomPrices from '../utils/fetchCustomPrices'
import { Context } from '../tokenContext'
import { Tokens, ContextTokens } from '../utils/interfaces'

export default function CustomTokenPrice() {
  const { setReturnedToken, setCustomPairs } = useContext(Context) as ContextTokens

  const [inputToken, setInputToken] = useState({
    amount: '',
    fromToken: '',
    toToken: '',
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

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()

    const controller = new AbortController()
    const signal = controller.signal 

    fetchCustomPrices(
      inputToken.amount,
      inputToken.fromToken, 
      setReturnedToken, 
      inputToken.toToken,
      signal,
      setCustomPairs
    )

    return () => controller.abort()
  }

  return (
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
  )
}