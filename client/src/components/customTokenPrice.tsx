import { useContext, useReducer } from 'react'

import { ethTokens, polygonTokens, bscTokens } from '../utils/getToken'
import { Context } from '../tokenContext'
import { ContextTokens } from '../utils/types'
import { initialState, reducer } from '../utils/tokenPairReducer'
import { Blockchain, TokenList } from '../utils/types'
import BSCFormOptions from './blockchains/bscFormOptions'
import ETHFormOptions from './blockchains/ethFormOptions'
import PolygonFormOptions from './blockchains/polygonFormOptions'

export default function CustomTokenPrice({ blockChain }: Blockchain) {
  const { setCustomPair } = useContext(Context) as ContextTokens
  const [tokenPair, dispatch] = useReducer(reducer, initialState)
  let blockchain: TokenList[] = []

  if (blockChain === 'ETH') {
    blockchain = ethTokens
  } else if (blockChain === 'BSC') {
    blockchain = bscTokens
  } else if (blockChain === 'Polygon') {
    blockchain = polygonTokens
  } 
  else {
    throw new Error("Reducer don't know what blockchain you're using")
  }

  const handleChange = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    const target = e.target as HTMLInputElement
    const { name, value } = target

    // Get the individual token
    const [token] = blockchain.filter(token => token.address === value)
    const key = token ? token.symbol : 'WETH'

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
console.log(tokenPair)
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
                  : blockChain === 'Polygon'
                    ? <PolygonFormOptions />
                    : null
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
                  : blockChain === 'Polygon'
                    ? <PolygonFormOptions />
                    : null
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