import { useContext, useReducer } from 'react'

import { BSCaddr } from '../utils/addresses'
import { ETHaddr } from '../utils/addresses'
import { POLYGONaddr } from '../utils/polygonAddr'
import { Context } from '../tokenContext'
import { ContextTokens } from '../utils/types'
import { initialState, reducer } from '../utils/tokenPairReducer'
import { Blockchain } from '../utils/types'
import BSCFormOptions from './blockchains/bscFormOptions'
import ETHFormOptions from './blockchains/ethFormOptions'
import PolygonFormOptions from './blockchains/polygonFormOptions'

export default function CustomTokenPrice({ blockChain }: Blockchain) {
  const { setCustomPair } = useContext(Context) as ContextTokens
  const [tokenPair, dispatch] = useReducer(reducer, initialState)
  let blockchain = {}

  if (blockChain === 'ETH') {
    blockchain = ETHaddr
  } else if (blockChain === 'BSC') {
    blockchain = BSCaddr
  } else if (blockChain === 'Polygon') {
    blockchain = POLYGONaddr
  } else {
    throw new Error("Reducer don't know what blockchain you're using")
  }

  const handleChange = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    const target = e.target as HTMLInputElement
    const { name, value } = target

    // Get the object key names 'ie: BTC, ETH'
    const key = Object.keys(blockchain)[Object.values(blockchain).indexOf(value)]

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
      throw Error('The reducer name is wrong :(')
    }
  }

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    setCustomPair(tokenPair)
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
            {
              blockChain === 'ETH'
                ? <ETHFormOptions />
                : blockChain === 'BSC'
                  ? <BSCFormOptions />
                  : <PolygonFormOptions />
            }
          </select>
          <select
            name='toToken'
            className='input-tokens'
            onChange={ handleChange }
            required
          >
            {
              blockChain === 'ETH'
                ? <ETHFormOptions />
                : blockChain === 'BSC'
                  ? <BSCFormOptions />
                  : <PolygonFormOptions />
            }
          </select>
          <button 
            type='submit'
            className='submit-btn'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}