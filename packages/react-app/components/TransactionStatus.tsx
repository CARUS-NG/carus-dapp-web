import React from 'react'

const TransactionStatus = ({ status }: { status: string }) => {
    return (
        <div className={`
        ${status === 'pending' && 'bg-yellow-300/30 text-yellow-600'}
        ${status === 'completed' && 'bg-green-300/30 text-green-600'}
        ${status === 'cancelled' && 'bg-red-300/30 text-red-600'}
        ${status === 'accepted' && 'bg-orange-200/30 text-orange-400'}
         px-3 py-1 rounded-[10px] font-bold text-[10px]`}
        >
            {status}
        </div>
    )
}

export default TransactionStatus