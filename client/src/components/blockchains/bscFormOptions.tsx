import { BSCaddr } from '../../utils/addresses'

export default function BSCFormOptions() {
  return (
    <>
      <option value=''></option>
      <option value={ BSCaddr.WBNB }>WBNB</option>
      <option value={ BSCaddr.BTCB }>BTCB</option>
      <option value={ BSCaddr.BUSD }>BUSD</option>
      <option value={ BSCaddr.CAKE }>CAKE</option>
      <option value={ BSCaddr.ETH }>ETH</option>
      <option value={ BSCaddr.USDC }>USDC</option>
      <option value={ BSCaddr.USDT }>USDT</option>
    </>
  )
}