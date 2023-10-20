import { createPublicClient, http } from 'viem'
import { mainnet, localhost, sepolia } from 'viem/chains'

export const publicClient = createPublicClient({
    chain: localhost,
    transport: http()
})