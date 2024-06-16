import React from 'react'
import Pickup from './assets/Pickup'
import Link from 'next/link'

type ActionButtonProps = {
    icon: React.JSX.Element
    label: string
    link: string
    inactive?: boolean
}
const ActionButton = ({ icon, label, link, inactive }: ActionButtonProps) => {
    return (
        <Link href={link} className={`${inactive ? 'cursor-not-allowed' : 'cursor-pointer'} bg-secondary-green flex flex-col items-center w-32 p-3 rounded-[10px] space-y-2`}>
            {icon}
            <p className='text-xs font-semibold'>{label}</p>
        </Link>
    )
}

export default ActionButton