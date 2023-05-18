import { POLYGONaddr } from '../../utils/addresses'

export default function PolygonFormOptions() {
  return (
    <>
      <option value=''></option>
      <option value={ POLYGONaddr.MATIC }>MATIC</option>
      <option value={ POLYGONaddr.WETH }>WETH</option>
      <option value={ POLYGONaddr.WBTC }>WBTC</option>
      <option value={ POLYGONaddr.QUICK }>QUICK</option>
      <option value={ POLYGONaddr.USDC }>USDC</option>
      <option value={ POLYGONaddr.USDT }>USDT</option>
    </>
  )
}