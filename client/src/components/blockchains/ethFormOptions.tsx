import { ethTokens } from '../../utils/getToken'

export default function ETHFormOptions() {
  const ethOptions = ethTokens.map((token, index) => (
    <option 
      value={ token.address } 
      key={ index }
    >
      { token.symbol }
    </option>
  ))

  return (
    <>
      <option value=''></option>
      { ethOptions }
    </>
  )
}