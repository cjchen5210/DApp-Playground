import Link from 'next/link'
import HomeTab from '../component/home/HomeTab'
import ThemeSwitch from '../component/common/ThemeSwitch'
import ConnectButtonCustom from '../component/common/ConnectButton'
import {Github} from '@web3uikit/icons'
import { LinkTo } from '@web3uikit/core';
export default function HomeLayout({
    children,
}: {
    children?: React.ReactNode
}) {
    return (
        <>
            <header className='w-full'>
                <div className="scroll-mx-7 space-x-14 text-black-200 flex text-xl mx-3.5 my-3.5">
                    <HomeTab />                    
                    <ConnectButtonCustom />
                </div>
            </header>
            <section>
                {children}
            </section>
            <footer className='py-5 mt-10 font-medium border-t'>
                <div className='flex flex-raw space-x-14 w-full justify-center'>
                    <span>
                        <Link href="https://github.com/cjchen5210/DApp-Playground"><Github fontSize='50px'/></Link>    
                    </span>
                    <span>
                        <LinkTo
                            address="https://cjblog-cjchen5210.vercel.app/"
                            iconLayout="leading"
                            text="CJ's Blog"
                            type="external"
                        />
                    </span>
                    <ThemeSwitch></ThemeSwitch> 
                </div>
                
            </footer>
        </>
        
    )    
}