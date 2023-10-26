import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "@/lib/constants";
import DeflationToken from "../contracts/DeflationToken.json";
import { usePublicClient } from 'wagmi';
import { getContract } from 'viem';
import { createPublicClient, http } from 'viem';
import { localhost, sepolia, polygon } from 'wagmi/chains'

export const useContract = async () => {

}