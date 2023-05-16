import { ETHaddr } from '../../utils/addresses'

export default function ETHFormOptions() {
  return (
    <>
      <option value=''></option>
      <option value={ ETHaddr.WBTC }>WBTC</option>
      <option value={ ETHaddr.WETH }>WETH</option>
      <option value={ ETHaddr.ENJ }>ENJ</option>
      <option value={ ETHaddr.UNI }>UNI</option>
      <option value={ ETHaddr.USDC }>USDC</option>
      <option value={ ETHaddr.USDT }>USDT</option>
    </>
  )
}