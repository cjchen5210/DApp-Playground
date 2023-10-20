import Link from 'next/link'
import HomeTab from '../component/home/HomeTab'
import ThemeSwitch from '../component/common/ThemeSwitch'
import ConnectButtonCustom from '../component/common/ConnectButton'

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
            <footer>
                <div className='flex flex-raw space-x-14'>
                    <span>copyright</span>
                    <span>github</span>
                    <span>Twitter</span>
                </div>
                <ThemeSwitch></ThemeSwitch> 
            </footer>
        </>
        
    )    
}