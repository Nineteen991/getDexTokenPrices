import { polygonTokens } from '../../utils/getToken'

export default function PolygonFormOptions() {
  const polygonOptions = polygonTokens.map((token, index) => (
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
      { polygonOptions }
    </>
  )
}