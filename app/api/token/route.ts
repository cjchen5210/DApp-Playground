import { NextRequest, NextResponse } from "next/server";
import { ethers } from "ethers";

// token transaction listener
export async function GET(req: NextRequest) {
    // 获取当前区块高度
    // 在当前区块高度范围内，检索transfer事件
    // 检索faucet事件
}