"use client";

import { useState, useEffect } from "react";
import { useBalance, useAccount } from 'wagmi'
import Deposit from "../component/token/Deposit";
import Faucet from "../component/token/Faucet";
import History from "../component/token/History";


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
        <Faucet accountData={accountData} contractData={contractData}></Faucet>
        <Deposit></Deposit>
        <History></History>
      </div>
    )
  }
  return <div>is Loading</div>
  
}