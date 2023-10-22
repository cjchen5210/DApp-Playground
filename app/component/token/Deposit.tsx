import { CryptoCards, Button, Input } from '@web3uikit/core';
import { useContractWrite, useContractRead, usePrepareContractWrite } from 'wagmi'
import { useState, useEffect } from "react";
import DeflationToken from "../../../contracts/DeflationToken.json";
import { CONTRACT_ADDRESS } from '@/lib/constants';
import { usePublicClient } from 'wagmi';
import { getContract } from 'viem';
import { createPublicClient, http } from 'viem';
import { localhost, sepolia, polygon } from 'wagmi/chains'


export default function Deposit() {
    const [depositValue, setDepositValue] = useState<string>("");

    const handleOnChange = (e: any) => {
        const input = e.target.value;
        console.log(input);
        setDepositValue(input);
    }
    const client = createPublicClient({
        chain: localhost,
        transport: http()
    });
    const contract = getContract({
        address: CONTRACT_ADDRESS,
        abi: DeflationToken.abi,
        client,
    })
    const test = async () => {
        const totalSupply = await contract.totalSupply();
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
            onClick={handleTransfer}
            // disabled={}
            ></Button>
        </>
    )
}