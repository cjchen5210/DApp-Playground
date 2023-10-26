import { NextRequest, NextResponse } from "next/server";
const { ethers } = require("ethers");
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
    return NextResponse.json({test: "value"});
}