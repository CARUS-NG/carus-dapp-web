'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { injected } from "wagmi/connectors";
import { useConnect } from 'wagmi';

const SplashScreen = () => {

    const [page, setPage] = useState(0);
    const [slide, setSlide] = useState(false)
    const [hideConnectBtn, setHideConnectBtn] = useState(false);

    const { connect } = useConnect();

    useEffect(() => {
        !page ? setTimeout(() => setPage(1), 3000) : null

        page && setTimeout(() => setSlide(!slide), 3000)
    }, [page, slide])

    return (
        <div className='max-w-3xl mx-auto flex flex-col items-center justify-center h-screen'>
            {!page ? <div>
                <Image
                    className="block h-8 w-auto"
                    src="/logo.svg"
                    width="24"
                    height="24"
                    alt="Carus Logo"
                />
            </div> : <div className='flex flex-col items-center'>
                {!slide ?
                    <div className='h-80'>
                        <Image
                            className="block w-auto mx-auto"
                            src="/assets/pickup-mockup.svg"
                            width="100"
                            height="100"
                            alt="pickup mockup"
                        />

                        <p className='text-center mt-3 text-lg font-bold'>Schedule Pickup</p>
                        <p className='text-center mt-3 font-medium mx-[5%]'>Schedule your waste pick up anytime and anywhere</p>
                    </div>
                    : <div className='h-80'>
                        <Image
                            className="block w-auto mx-auto"
                            src="/assets/earn-mockup.svg"
                            width="100"
                            height="100"
                            alt="earn mockup"
                        />

                        <p className='text-center mt-3 text-lg font-bold'>Earn Reward</p>
                        <p className='text-center mt-3 font-medium mx-[5%]'>Earn cUSD by disposing and recycling your waste</p>
                    </div>
                }
                <div className='flex space-x-0.5 my-10 mx-auto'>
                    <div className={`h-1 ${!slide ? 'bg-carus-green w-12' : 'bg-primary-grey w-5'} rounded-sm`}></div>
                    <div className={`h-1 ${slide ? 'bg-carus-green w-12' : 'bg-primary-grey w-5'} rounded-sm`}></div>
                </div>

                {!hideConnectBtn && (
                    <ConnectButton />
                )}
            </div>}

        </div>
    )
}

export default SplashScreen