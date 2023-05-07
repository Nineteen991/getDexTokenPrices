import { useContext, useReducer } from 'react'

import { BSCaddr } from '../utils/addresses'
import fetchCustomPairPrices from '../utils/fetchCustomPairPrices'
import { Context } from '../tokenContext'
import { ContextTokens, DexProps } from '../utils/types'
import { initialState, reducer } from '../utils/tokenPairReducer'
import RenderCustomTokenPairs from './renderCustomTokenPairs'

export default function CustomTokenPrice({ dex, chain }: DexProps) {
  const { customPairs, setCustomPairs } = useContext(Context) as ContextTokens
  const [tokenPair, dispatch] = useReducer(reducer, initialState)

  const handleChange = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    const target = e.target as HTMLInputElement
    const { name, value } = target

    // Get the object key names 'ie: BTC, ETH'
    const key = Object.keys(BSCaddr)[Object.values(BSCaddr).indexOf(value)]

    if (name === 'amount') {
      dispatch({ type: 'AMOUNT', payload: value, key })
    }
    else if (name === 'fromToken') {
      dispatch({ type: 'FROM', payload: value, key })
    }
    else if (name === 'toToken') {
      dispatch({ type: 'TO', payload: value, key })
    }
    else {
      throw Error('The reducer name is broken :(')
    }
  }

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    const controller = new AbortController()
    const signal = controller.signal 

    fetchCustomPairPrices(
      tokenPair,
      signal,
      dex,
      chain,
      setCustomPairs
    )
    return () => controller.abort()
  }

  return (
    <div className='custom-token-price'>
      <div className='input-fields'>
        <form className='input-form' onSubmit={ handleSubmit }>
          <input
            name='amount'
            className='input-amount'
            placeholder='Amount'
            value={ tokenPair.amount }
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
            <option value={ BSCaddr.BTCB }>BTCB</option>
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
            <option value={ BSCaddr.BTCB }>BTCB</option>
            <option value={ BSCaddr.ETH }>ETH</option>
            <option value={ BSCaddr.WBNB }>WBNB</option>
            <option value={ BSCaddr.CAKE }>CAKE</option>
            <option value={ BSCaddr.BUSD }>BUSD</option>
            <option value={ BSCaddr.USDT }>USDT</option>
            <option value={ BSCaddr.USDC }>USDC</option>
          </select>
          <button 
            type='submit'
            className='submit-btn'
          >
            Submit
          </button>
        </form>
      </div>
    
      {
        customPairs
          ? customPairs.map(pair => (
              <RenderCustomTokenPairs 
                tokenPair={ pair }
                key={ pair.id }
              />
            ))
          : null
      }
    </div>
  )
}