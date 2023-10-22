"use client";
import { CryptoCards, Button, Input } from '@web3uikit/core';
import { useContractWrite, useContractRead, usePrepareContractWrite } from 'wagmi'
import { useState, useEffect } from "react";
import DeflationToken from "../../../contracts/DeflationToken.json";
import { CONTRACT_ADDRESS } from '@/lib/constants';
import { usePublicClient, useAccount, useConnect, useDisconnect } from 'wagmi';
import { getContract } from 'viem';
import { createPublicClient, http } from 'viem';
import { localhost, sepolia, polygon } from 'wagmi/chains'


export default function Deposit() {
    const [depositValue, setDepositValue] = useState<string>("");
    const { address, isConnecting, isDisconnected } = useAccount();
    const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
    const { disconnect } = useDisconnect()
    const { config } = usePrepareContractWrite({
        address: CONTRACT_ADDRESS,
        abi: DeflationToken.abi,
        functionName: 'transfer',
        // chainId: 31337,
        args: [CONTRACT_ADDRESS, 10000000000],
      })
    const { data, isSuccess, write } = useContractWrite(config)

    const handleOnChange = (e: any) => {
        const input = e.target.value;
        console.log(input);
        setDepositValue(input);
    }

    const handleTransfer = () => {
    }
    useEffect(() => {
        
    }, []);
    
    return (
        <>
            <Input value={depositValue} onChange={handleOnChange}></Input>
            <Button customize={{
            color: '#F97316'
            }}
            theme="custom" 
            type="button" 
            text="Deposit"
            onClick={() => write?.()}
            disabled={!write}
            ></Button>
        </>
    )
}