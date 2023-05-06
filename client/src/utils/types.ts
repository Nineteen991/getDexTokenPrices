export type Tokens = {
  amount: string
  fromToken: string
  toToken: string
}

export type ContextTokens = {
  customPairs: TokenPairInfo[]
  setCustomPairs: React.Dispatch<React.SetStateAction<TokenPairInfo[]>>
}

export type ReducerActions = { 
  type: 'AMOUNT' | 'FROM' | 'TO'
  payload: string
  key: string
}

export type TokenPairInfo = {
  id: string,
  amount: string,
  fromToken: string,
  fromTokenName: string,
  toToken: string,
  toTokenName: string
}

export type TokenPairProp = {
  tokenPair: TokenPairInfo
}

export type Token = { 
  price: string
  fromToken: string
  toToken: string
  reset: React.Dispatch<React.SetStateAction<string>>
}