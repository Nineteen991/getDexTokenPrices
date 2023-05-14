

export default function UniSwapV3() {
  const dex = 'uniswapV2'
  const chain = 'eth'
  // const [customDexPairs, setCustomDexPairs] = useState<TokenPairInfo[]>([])
  // const { customPair } = useContext(Context) as ContextTokens

  // useEffect(() => {
  //   if (customPair.id) {
  //     fetchCustomPairPrices(
  //       customPair,
  //       dex,
  //       chain,
  //       setCustomDexPairs
  //     )
  //   }
  // }, [customPair])

  return (
    <div className='uniswap dex'>
      <h2 className='dex-prices'>UniSwap v3 Prices</h2>

      {/* <WbnbPrices dex={ dex } chain={ chain } />

      {
        customDexPairs
          ? customDexPairs.map(pair => (
              <RenderCustomTokenPairs 
                tokenPair={ pair }
                key={ pair.id }
              />
            ))
          : null
      } */}
    </div>
  )
}