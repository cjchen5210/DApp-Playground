"use client"
import { useNProgress } from '@/hooks/useNProgress';
import { useDarkModeListener } from '@/hooks/useDarkMode';
import { useState, createContext } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { DARK_MODE_STORAGE_KEY } from '@/lib/constants';
import { createTheme } from "@mantine/core"
import HomeLayout from './(home)/layout';
import { WagmiConfig, createConfig, mainnet } from 'wagmi';
import { localhost, sepolia, polygon, hardhat } from 'wagmi/chains'
import { createPublicClient, http } from 'viem';
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";

const publicClient = createPublicClient({
    chain: localhost,
    transport: http()
})
// wagmi config
const wagmiConfig = createConfig({
    autoConnect: true,
    publicClient: publicClient,
});
const projectid = process.env.walletConnectProjectId as string;
const chains = [mainnet, polygon, sepolia, localhost, hardhat];
const config = createConfig(
    getDefaultConfig({
        appName: "CJ Project",
        chains,
        walletConnectProjectId: projectid,
        publicClient: publicClient,
    })
)


let mantineDefaultColorSchemeT = "auto"
if (typeof localStorage !== "undefined") {
  if (localStorage.getItem(DARK_MODE_STORAGE_KEY) === "light") {
    mantineDefaultColorSchemeT = "light"
  } else if (localStorage.getItem(DARK_MODE_STORAGE_KEY) === "dark") {
    mantineDefaultColorSchemeT = "dark"
  }
}
export const mantineTheme = createTheme({
    fontFamily: 'Roboto, sans-serif',
    // primaryColor: 'cyan',
})

export const mantineDefaultColorScheme = mantineDefaultColorSchemeT as
    | "auto"
    | "light"
    | "dark"


export default function Providers({
    children,
    lang,
}: {
    children?: React.ReactNode,
    lang?: string
}) {
    useNProgress();

    // 暂时没用上，也不知道怎么测试
    // useDarkModeListener();
    return (
        <ThemeProvider>   
            <WagmiConfig config={config}>
                <ConnectKitProvider>                    
                    <HomeLayout>{children}</HomeLayout>  
                </ConnectKitProvider>                               
            </WagmiConfig>                                                                   
        </ThemeProvider>
        
        
    )
}