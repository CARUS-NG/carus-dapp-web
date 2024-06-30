'use client'
import { FC, ReactNode } from "react";
import Header from "./Header";
// import { usePathname } from 'next/navigation';
import { useAccount } from 'wagmi';
import useIsClient from '@/hooks/useIsClient';

interface Props {
    children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {

    const { isConnected } = useAccount()
    
    const isClient = useIsClient()
    console.log({ isConnected })
    return (
        <>
            <div className="mx-auto overflow-hidden flex flex-col min-h-screen font-satoshi">
                {isConnected && isClient && <Header />}
                <div className="px-[5%] text-sm">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;
