import Image from 'next/image'
import React from 'react'

const Dropoff = () => {
    return (
        <div className='max-w-3xl mx-auto flex flex-col items-center mt-5 mb-10'>
            <p className='text-center font-bold text-lg text-carus-green mb-5'>Coming soon</p>
            <div className='mx-auto'>
                <Image src={'/assets/coming-soon.svg'} alt='coming soon' width={173} height={382} />
            </div>
        </div>
    )
}

export default Dropoff