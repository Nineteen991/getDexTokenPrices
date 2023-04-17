export interface Tokens {
  amount: string
  fromToken: string
  toToken: string
}

export type ContextTokens = {
  returnedToken: Tokens
  setReturnedToken: React.Dispatch<React.SetStateAction<Tokens>>
  customPairs: Tokens[]
  setCustomPairs: React.Dispatch<React.SetStateAction<Tokens[]>>
}