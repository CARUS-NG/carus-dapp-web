import ActionButton from '@/components/ActionButton';
import HistoryCard from '@/components/HistoryCard';
import Dropoff from '@/components/assets/Dropoff';
import Pickup from '@/components/assets/Pickup';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export const history = [
    {
        material: 'Plastic',
        date: '25 Feb 2024',
        amount: '0.52',
        status: 'completed'
    },
    {
        material: 'Plastic',
        date: '29 Mar 2024',
        amount: '0.00',
        status: 'pending'
    },
    {
        material: 'Plastic',
        date: '12 Jan 2024',
        amount: '0.00',
        status: 'cancelled'
    },
    {
        material: 'Plastic',
        date: '25 Feb 2024',
        amount: '0.00',
        status: 'accepted'
    },
    {
        material: 'Plastic',
        date: '25 Feb 2024',
        amount: '0.00',
        status: 'cancelled'
    },
]

export default function Home() {
    const [userAddress, setUserAddress] = useState("");
    const [isMounted, setIsMounted] = useState(false);
    const { address, isConnected } = useAccount();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isConnected && address) {
            setUserAddress(address);
        }
    }, [address, isConnected]);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="max-w-3xl mx-auto flex flex-col">
            <Link href={'/schedule'} className='bg-gradient-to-r from-[#ABCDBC] to-[#FFEDC14D] pl-3 pb-3 w-full rounded-[10px] grid grid-cols-2'>
                <div className='flex flex-col justify-end'>
                    <p className='font-bold text-carus-green'>Request Pickup</p>
                    <p className='text-[10px] mt-2 text-carus-green'>Request waste pickup at your doorstep</p>
                </div>
                <Image src={'/assets/truck.svg'} alt='truck' width={286} height={216} />
            </Link>

            <p className='font-bold mt-10'>Quick Action</p>
            <div className='flex space-x-3 mt-5'>
                <ActionButton icon={<Pickup />} label='Schedule Pickup' link='/pickup' />
                <ActionButton icon={<Dropoff />} label='Schedule Drop-off' link='/dropoff' inactive />
            </div>

            <div className='mt-10'>
                {isConnected ?
                    <div>
                        <p className='font-bold'>Total Earnings : <span className='text-carus-green'>0.52 cUSD</span></p>
                        <div className='mt-4 space-y-2'>
                            {history.slice(0, 3).map((item, itemIdx) => (
                                <HistoryCard
                                    key={itemIdx}
                                    material={item.material}
                                    date={item.date}
                                    amount={item.amount}
                                    status={item.status}
                                />
                            ))}
                            <div className=''>
                                <Link href={'/transactions'} className='font-bold flex items-center text-carus-green'>
                                    <p className='my-auto'>View full transactions</p>
                                    <ArrowRightIcon className='w-4 h-4 ml-3 my-auto' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    : <p className='font-bold'>No wallet connected</p>
                }
            </div>

            {/* {isConnected ? (
                <div className="h2 text-center">
                    Your address: {userAddress}
                </div>
            ) : (
                <div>No Wallet Connected</div>
            )} */}
        </div>
    );
}
