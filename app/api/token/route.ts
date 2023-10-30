import { NextRequest, NextResponse } from "next/server";
const { ethers } = require("ethers");
import { CONTRACT_ADDRESS } from "@/lib/constants";
import DeflationToken from "../../../contracts/DeflationToken.json";

// import { ethers } from 'ethers';

// token transaction listener
export async function GET(req: NextRequest) {
    // 获取当前区块高度
    // 在当前区块高度范围内，检索transfer事件
    // 检索faucet事件
    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545/");
    const blockNumber = await provider.getBlockNumber();
    console.log(blockNumber);
    // return NextResponse.json({data: blockNumber});
    // 监听当前合约的两个函数，transfer，faucet
    const contract = new ethers.Contract(CONTRACT_ADDRESS, DeflationToken.abi, provider);
    const sym = await contract.symbol();
    const balance = await contract.balanceOf(CONTRACT_ADDRESS);
    const formatBalance = ethers.formatEther(balance);
    const data = {
        sym: sym,
        balance: formatBalance
    }
    console.log(`symbol ${sym}   balance ${formatBalance} `);
    contract.on("Transfer", (from: any, to: any, _amount: any, event: any) => {
        const amount = ethers.formatEther(_amount, 18)
        console.log(`from ${ from } => to ${ to }: ${ amount }`);
        const now = new Date();
        const formattedTime = now.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' });
        console.log(formattedTime);
        // The `event.log` has the entire EventLog
      
        // Optionally, stop listening
        event.removeListener();
    });
    // 存储到数据库的数据结构
    // 交易哈希，blocknumber，from，to，value，time，
    return NextResponse.json(data);
}