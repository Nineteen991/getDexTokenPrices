import { createContext, useState, ReactNode } from 'react'

import { ContextTokens, TokenPairInfo } from "./utils/types"

let Context = createContext<ContextTokens | undefined>(undefined)

function ContextProvider ({ children }: { children: ReactNode }) {
  const [customPair, setCustomPair] = useState<TokenPairInfo>({
    id: '',
    amount: '',
    fromToken: '',
    fromTokenName: '',
    toToken: '',
    toTokenName: '',
  })

  return (
    <Context.Provider value={{
      customPair,
      setCustomPair
    }}>
      { children }
    </Context.Provider>
  )
}

export { Context, ContextProvider }