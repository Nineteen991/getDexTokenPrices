export const erc20ABI :string[] = ['function decimals() external view returns (uint8)']

// export const factoryABI :string[] = [
//     "function getPair(address tokenA, address tokenB) external view returns (address pair)"
// ]

// export const pairABI :string[] = [
//     'function token0() external view returns (address)',
//     'function token1() external view returns (address)',
//     'function getReserves() public view returns (uint112 _reserve0, uint112 _reserve1, uint32 _blockTimestampLast)'
// ]

export const routerABI :string[] = [
    'function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)',
]