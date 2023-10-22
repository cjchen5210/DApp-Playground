"use client";
import { useContractWrite, useContractRead, usePrepareContractWrite } from 'wagmi'
import { useState, useEffect } from "react";
import DeflationToken from "../../../contracts/DeflationToken.json";
import { CryptoCards, Button, Input } from '@web3uikit/core';
import { CONTRACT_ADDRESS } from '@/lib/constants';

export default function Faucet() {
    const { config } = usePrepareContractWrite({
        address: CONTRACT_ADDRESS,
        abi: DeflationToken.abi,
        functionName: 'faucet',
        // chainId: 31337,
        args: [2000000000000000000],
      })
    const { data, isSuccess, write } = useContractWrite(config)
    return (
        <>
            <Button customize={{
            color: '#F97316'
            }}
            theme="custom" 
            type="button" 
            text="get token"
            disabled={!write}
            onClick={() => write?.()}
            ></Button>
        </>
    )
}