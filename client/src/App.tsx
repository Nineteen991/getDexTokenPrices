import { useState, useEffect } from 'react'

import fetchPrices from './utils/fetchPrices'
import { BSCaddr, addr } from './utils/addresses'
import { Tokens } from './utils/interfaces'
import './App.sass'

export default function App() {
  const [btcbPrice, setBtcbPrice] = useState<string>('')
  const [ethPrice, setEthPrice] = useState<string>('')
  const [wbnbPrice, setWbnbPrice] = useState<string>('')
  const [cakePrice, setCakePrice] = useState<string>('')
  const [newToken, setNewToken] = useState<{}[]>([])

  const [tokens, setTokens] = useState<Tokens>({
    amount: '',
    fromToken: '',
    toToken: ''
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
    setTokens(prev => (
      {
        ...prev,
        [name]: value
      }
    ))

    const key = Object.keys(BSCaddr)[Object.values(BSCaddr).indexOf(value)]
    setReturnedToken(prev => (
      {
        ...prev,
        [name]: key
      }
    ))
  }

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    console.log('clicked')
    
  }

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal 

    fetchPrices(BSCaddr.BTCB, setBtcbPrice, signal)
    fetchPrices(BSCaddr.ETH, setEthPrice, signal)
    fetchPrices(BSCaddr.WBNB, setWbnbPrice, signal)
    fetchPrices(BSCaddr.CAKE, setCakePrice, signal)

    return () => controller.abort()
  }, [])

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
              value={ tokens.amount }
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
              <option value={ BSCaddr.WBNB }>WBNB</option>
              <option value={ BSCaddr.CAKE }>CAKE</option>
              <option value={ BSCaddr.ETH }>ETH</option>
              <option value={ BSCaddr.USDT }>USDT</option>
            </select>
            <select
              name='toToken'
              className='input-tokens'
              onChange={ handleChange }
              required
            >
              <option value=''></option>
              <option value={ BSCaddr.USDT }>USDT</option>
              <option value={ BSCaddr.BTCB }>BTCB</option>
              <option value={ BSCaddr.WBNB }>WBNB</option>
              <option value={ BSCaddr.CAKE }>CAKE</option>
              <option value={ BSCaddr.ETH }>ETH</option>
            </select>
            <button 
              type='submit'
              className='submit-btn'
            >
              Submit
            </button>
          </form>
        </div>

        <div className='returned-prices'>
          {
            btcbPrice 
              ? (<h3 className='returned-price'>
                  { btcbPrice }
                  <span className='price-span'>BTCB / USDT</span>
                </h3>)
              : 'Fetching BTCB price...'
          }
        </div>

        <div className='returned-prices'>
          {
            ethPrice 
              ? (<h3 className='returned-price'>
                  { ethPrice }
                  <span className='price-span'>ETH / USDT</span>
                </h3>)
              : 'Fetching ETH price...'
          }
        </div>

        <div className='returned-prices'>
          {
            wbnbPrice 
              ? (<h3 className='returned-price'>
                  { wbnbPrice }
                  <span className='price-span'>WBNB / USDT</span>
                </h3>)
              : 'Fetching WBNB price...'
          }
        </div>

        <div className='returned-prices'>
          {
            cakePrice 
              ? (<h3 className='returned-price'>
                  { cakePrice }
                  <span className='price-span'>CAKE / USDT</span>
                </h3>)
              : 'Fetching CAKE price...'
          }
        </div>

        {
          newToken
            ? <h2>{`${newToken}`}</h2>
            : null
        }

      </div>
    </div>
  )
}