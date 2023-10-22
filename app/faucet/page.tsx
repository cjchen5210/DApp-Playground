"use client";

import { useState, useEffect } from "react";
import {ethers} from "ethers";
import deflationToken from "../../contracts/DeflationToken.json";
import { publicClient } from "../../lib/publicClient";
import { useBalance, useAccount } from 'wagmi'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'  
import Deposit from "../component/token/Deposit";
import Faucet from "../component/token/Faucet";

export default function Home() {    
  const { data: contractData, isError, isLoading } = useBalance({
    address: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
    token: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
  })

  const {address} = useAccount();
  const {data: accountData} = useBalance({
    address: address,
    token: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
  })

  useEffect(() => {
    
  }, []);

  if (!isLoading) {
    return (
      <div>
        <Faucet></Faucet>
        <Deposit></Deposit>
        <div>contract balance: {contractData?.formatted}</div>
        <div>account token balance: {accountData?.formatted}</div>
      </div>
    )
  }
  return <div>is Loading</div>
  
}