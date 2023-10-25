import { usePathname } from "next/navigation"
import Link from 'next/link'
import { useState, useEffect } from "react";
import { pick } from "@/lib/utils";

const tabs = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Token",
        link: "/token",
    },
    {
        name: "NFT Market",
        link: "/market",
    },
    {
        name: "Chat",
        link: "/chat",
    },
]

type BTC = {
    name: string,
    color: string,
    iconUrl: string,
    price: string,
    sparkline: Array<string>,
}

export default function HomeTab() {
    const [btc, setBtc] = useState<BTC>();
    useEffect(() => {
        fetch("http://localhost:3000/api/btc", {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {
            const btcdata = pick(data, ['name', 'color', 'iconUrl', 'price', 'sparkline']);
            setBtc(() => btcdata);
        });
    }, []);
    const pathname = usePathname()


    return (
        <>                          
            {tabs?.map((tab, index) => (
                <Link href={tab.link}><button className={tab.link === pathname ? "hover:text-orange-500 text-orange-500": "hover:text-orange-500 text-black-400"}>{tab.name}</button></Link>
            ))}                                    
            <div className="flex flex-raw">
                {btc?.name}
                <img src={btc?.iconUrl} alt="Bitcoin Icon" width={30} height={30} /> 
                {parseFloat((btc?.price || 0).toString()).toFixed(2)} $
            </div>         
        </>
    )
}