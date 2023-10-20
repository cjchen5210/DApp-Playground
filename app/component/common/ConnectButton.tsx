"use client";

import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { useState, useEffect, useContext } from "react";
import { CryptoCards, Button, } from '@web3uikit/core';
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";


export default function ConnectButtonCustom() {
    const { address, isConnected } = useAccount();
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    });
    const { disconnect } = useDisconnect();

    useEffect(() => {
    }, []);
    
    return (
        <>
            <ConnectKitButton showBalance={true}/>
        </>
    )
} 