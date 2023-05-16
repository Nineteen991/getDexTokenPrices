import { useContext } from "react"

import { Context } from "../tokenContext"
import { ContextTokens } from '../utils/types'

export default function PickBlockChain() {
  const { setBlockChain } = useContext(Context) as ContextTokens

  const handleChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement
    const { value } = target
    setBlockChain(value)
  }

  return (
    <div className="blockchain">
      <h2 className="secondary-title">Pick a Blockchain</h2>
      <select 
        name='blockchain'
        className="blockchain-input"
        onChange={ handleChange }
      >
        <option value='ETH'>ETH</option>
        {/* <option value='AVALANCHE'>AVALANCHE</option> */}
        <option value='BSC'>BSC</option>
        {/* <option value='FANTOM'>FANTOM</option>
        <option value='POLYGON'>POLYGON</option> */}
      </select>
    </div>
  )
}