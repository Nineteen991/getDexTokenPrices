import { useState } from 'react'

export function useNixTradingPair() {
  const [nixTradingPair, setNixTradingPair] = useState(false)

  return { nixTradingPair, setNixTradingPair }
}