"use client";
import { useContractWrite, useContractRead, usePrepareContractWrite } from 'wagmi'
import { useState, useEffect } from "react";
import DeflationToken from "../../../contracts/DeflationToken.json";
import { CryptoCards, Button, Input, Hero } from '@web3uikit/core';
import { CONTRACT_ADDRESS } from '@/lib/constants';

interface FaucetProps {  
    contractData: any ;  
    accountData: any ;  
} 
const Faucet: React.FC<FaucetProps> = ({ contractData, accountData }) => {
    const { config } = usePrepareContractWrite({
        address: CONTRACT_ADDRESS,
        abi: DeflationToken.abi,
        functionName: 'faucet',
        // chainId: 31337,
        args: [2000000000000000000],
      })
    const { data, isSuccess, write } = useContractWrite(config)
    const subtitle = `Contract balance: ${contractData?.formatted}$`
    return (
        <>
        <div className='flex w-full justify-center flex-col relative text-center space-y-7'>
            <div className='w-full'>
                <Hero
                customize={{
                    backgroundColor: 'black',
                    border: '1px solid black',
                    borderRadius: '6px',
                    color: '#FFFFFF',
                    margin: '20px',
                    padding: '24px',                    
                }}
                height="200px"
                subTitle={subtitle}
                title="点击下方按钮，领取Token 2$"
                >Your token balance: {accountData?.formatted}$</Hero>
            </div>
            
            {/* <p className='text-3xl'>领取Token, 2$</p> */}
            <div className='flex justify-center items-center'>
                <Button customize={{
                color: '#F97316'
                }}
                theme="custom" 
                type="button" 
                text="get token"
                disabled={!write}
                onClick={() => write?.()}
                size="xl"
                ></Button>
            </div>
            
        </div>
            
        </>
    )
}
export default Faucet;