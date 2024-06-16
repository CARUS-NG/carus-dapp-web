import React from 'react'
import TransactionStatus from './TransactionStatus'

type HistoryProps = {
    material: string
    date: string
    amount: string
    status: string
}
const HistoryCard = ({ material, date, amount, status }: HistoryProps) => {
    return (
        <div className='bg-primary-grey p-3 rounded-[10px] flex justify-between'>
            <div className='space-y-2'>
                <p className='text-xs font-medium'>{material}</p>
                <p className='text-xs font-bold text-carus-green'>{amount} cUSD</p>
                <p className='text-xs'>{date}</p>
            </div>
            <div className='my-auto'>
                <TransactionStatus status={status}/>
            </div>
        </div>
    )
}

export default HistoryCard