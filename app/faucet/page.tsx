"use client";

import { useState, useEffect } from "react";
import {ethers} from "ethers";
import deflationToken from "../../contracts/DeflationToken.json";
import { publicClient } from "../../lib/publicClient";
import { useBalance, useAccount } from 'wagmi'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'  


export default function Home() {    
  const { data, isError, isLoading } = useBalance({
    address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    token: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
  })
  return (
    <div>balance: {data?.formatted}</div>
  )
}