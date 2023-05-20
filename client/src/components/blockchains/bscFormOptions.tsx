import { bscTokens } from '../../utils/getToken'

export default function BSCFormOptions() {
  const bscOptions = bscTokens.map((token, index) => (
    <option 
      key={ index }
      value={ token.address }
    >
      { token.symbol }
    </option>
  ))

  return (
    <>
      <option value=''></option>
      { bscOptions }
    </>
  )
}