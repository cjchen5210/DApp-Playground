"use client";
import { Button, Input } from '@web3uikit/core';
import { useContractWrite, useContractRead, usePrepareContractWrite } from 'wagmi'
import { useState, useEffect } from "react";
import DeflationToken from "../../../contracts/DeflationToken.json";
import { CONTRACT_ADDRESS } from '@/lib/constants';


export default function Deposit() {
    const [depositValue, setDepositValue] = useState<number>(0);
    const { config } = usePrepareContractWrite({
        address: CONTRACT_ADDRESS,
        abi: DeflationToken.abi,
        functionName: 'transfer',
        // chainId: 31337,
        args: [CONTRACT_ADDRESS, BigInt(depositValue * 1E18)],
      })
    const { data, isSuccess, write } = useContractWrite(config)

    const handleOnChange = (e: any) => {
        const input = e.target.value;
        if (input < 0) alert("can not under 0")
        setDepositValue(input);
    }

    useEffect(() => {
        
    }, []);
    
    return (
        <>
            <div className='flex w-full justify-center flex-col relative text-center space-y-7 py-10'>
                <div className='flex justify-center items-center'>
                    <Input 
                    label='Amount'
                    placeholder="type it "
                    value={depositValue} 
                    onChange={handleOnChange}
                    type="number"
                    ></Input>
                </div>
                <div className='flex justify-center items-center'>
                    <Button customize={{
                    color: '#F97316'
                    }}
                    theme="custom" 
                    type="button" 
                    text={write ? "Deposit" : "unisuffient balance"}
                    onClick={() => write?.()}
                    disabled={!write}
                    size="xl"
                    ></Button>
                </div>
                
                
            </div>
            
        </>
    )
}