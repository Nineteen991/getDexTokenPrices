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
      <h2 className="title-tertiary">Pick a Blockchain</h2>
      <label htmlFor='blockchain-select' className="blockchain-select"/>
      <select 
        name='blockchain'
        id='blockchain-select'
        className="blockchain-input"
        onChange={ handleChange }
      >
        <option value='ETH'>ETH</option>
        {/* <option value='AVALANCHE'>AVALANCHE</option> */}
        <option value='BSC'>BSC</option>
        {/* <option value='FANTOM'>FANTOM</option> */}
        <option value='Polygon'>POLYGON</option>
      </select>
    </div>
  )
}