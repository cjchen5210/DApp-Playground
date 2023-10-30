import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {

    const axios = require('axios');

    const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '24h',
            'tiers[0]': '1',
            orderBy: 'marketCap',
            orderDirection: 'desc',
            limit: '50',
            offset: '0'
        },
        headers: {
            'X-RapidAPI-Key': process.env.XRapidAPIKey,
            'X-RapidAPI-Host': process.env.XRapidAPIHost
        }
    };

    try {
        const response = await axios.request(options);
        // console.log(response.data);
        const result = response.data.data.coins[0];
        return NextResponse.json(result);
    } catch (error) {
        console.error(error);
    }

}