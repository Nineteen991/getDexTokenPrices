import { TokenPairInfo, ReducerActions } from "./types"

export const initialState: TokenPairInfo = {
  id: '',
  amount: '',
  fromToken: '',
  fromTokenName: '',
  toToken: '',
  toTokenName: '',
}

export const reducer = (state: TokenPairInfo, action: ReducerActions) => {
  switch(action.type) {
    
    case 'AMOUNT':
      return { 
        ...state, 
        amount: action.payload,
        id: crypto.randomUUID()
      }

    case 'FROM':
      return { 
        ...state, 
        fromToken: action.payload, 
        fromTokenName: action.key,
        id: crypto.randomUUID()
      }

    case 'TO':
      return {
        ...state,
        toToken: action.payload,
        toTokenName: action.key,
        id: crypto.randomUUID()
      }
    
    default:
      return state
  }
}