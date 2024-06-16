'use client'
import React from 'react'
import { useAccount } from 'wagmi';
import { history } from '.';
import HistoryCard from '@/components/HistoryCard';

const Transactions = () => {
    const { address, isConnected } = useAccount();

    return (
        isConnected ?
            <div className="max-w-3xl mx-auto flex flex-col mt-5 mb-10">
                <p className='font-bold'>Total Earnings : <span className='text-carus-green'>0.52 cUSD</span></p>
                <div className='mt-4 space-y-2'>
                    {history.map((item, itemIdx) => (
                        <HistoryCard
                            key={itemIdx}
                            material={item.material}
                            date={item.date}
                            amount={item.amount}
                            status={item.status}
                        />
                    ))}
                </div>
            </div>
            : <p className='font-bold'>No wallet connected</p>

    )
}

export default Transactions