import { createContext, useState, ReactNode } from 'react'

import { Tokens, ContextTokens } from "./utils/interfaces"

let Context = createContext<ContextTokens | undefined>(undefined)

function ContextProvider ({ children }: { children: ReactNode }) {
  const [returnedToken, setReturnedToken] = useState<Tokens>({
    amount: '',
    fromToken: '',
    toToken: ''
  })
  const [customPairs, setCustomPairs] = useState<Tokens[]>([])

  return (
    <Context.Provider value={{
      returnedToken,
      setReturnedToken,
      customPairs,
      setCustomPairs
    }}>
      { children }
    </Context.Provider>
  )
}

export { Context, ContextProvider }