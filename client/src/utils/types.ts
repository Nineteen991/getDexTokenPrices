export type Blockchain = {
  blockChain: string
}

export type Tokens = {
  amount: string
  fromToken: string
  toToken: string
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

export type RenderCustomTokenPairsProps = {
  tokenPair: TokenPairInfo
}

export type ContextTokens = {
  customPair: TokenPairInfo
  setCustomPair: React.Dispatch<React.SetStateAction<TokenPairInfo>>
  blockChain: string
  setBlockChain: React.Dispatch<React.SetStateAction<string>>
}

export type useContextTokens = {
  useCustomDexPairs: TokenPairInfo[]
  setUseCustomDexPairs: React.Dispatch<React.SetStateAction<TokenPairInfo[]>>
}

export type Token = { 
  price: string
  fromToken: string
  toToken: string
  dex: string
  chain: string
  reset: React.Dispatch<React.SetStateAction<string>>
}

export type DexProps = {
  dex: string
  chain: string
}