import { createContext, useState, ReactNode } from 'react'

import { ContextTokens, TokenPairInfo } from "./utils/types"

let Context = createContext<ContextTokens | undefined>(undefined)

function ContextProvider ({ children }: { children: ReactNode }) {
  const [customPairs, setCustomPairs] = useState<TokenPairInfo[]>([])

  return (
    <Context.Provider value={{
      customPairs,
      setCustomPairs
    }}>
      { children }
    </Context.Provider>
  )
}

export { Context, ContextProvider }