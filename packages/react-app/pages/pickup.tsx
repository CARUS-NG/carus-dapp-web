import React, { useState } from 'react'
import Image from 'next/image'
import usePickupForm from '@/hooks/usePickupForm'
import { PICKUP_ADDRESS_KEY, PICKUP_CONTAINER_AMOUNT_KEY, PICKUP_DATE_KEY, PICKUP_LGA_KEY, PICKUP_MATERIAL_AMOUNT_KEY } from '@/constants/schedule'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Pickup = () => {
    const [selectedMaterial, setSelectedMaterial] = useState('')
    const notify = () => toast("Coming soon!", {
        position: "top-right",
    });


    const [error, setError] = useState<{ material: boolean; }>({
        material: false,
    })

    const handleMaterialClick = (material: string) => {
        setSelectedMaterial(material)
        setError((prev) => ({ ...prev, material: false }))
    }

    const { getInputProps, onSubmit, isValid } = usePickupForm();


    return (
        <div className='max-w-3xl mx-auto font-satoshi mt-5 mb-10'>
            <ToastContainer />
            <h3 className="font-bold mb-3">Category</h3>
            <div className="bg-[#F3F3F3] flex flex-wrap gap-y-3 py-5 rounded-xl">
                <button className={`bg-[#FFF7D4] flex gap-x-1 px-2.5 py-2 rounded-3xl items-center mx-2 ${selectedMaterial === 'plastic' && 'is-highlighted'}`} onClick={() => selectedMaterial != 'plastic' ? handleMaterialClick('plastic') : handleMaterialClick('')}>
                    <div className="relative w-6 h-6 rounded-full p-1 bg-[#FFE168]">
                        <Image src={"/assets/plastic.svg"} fill alt="plastic" />
                    </div>
                    <p className="text-xs">Plastic</p>
                </button>

                <button className="bg-[#EEFAFF] flex gap-x-1 p-2.5 rounded-3xl items-center mx-2 cursor-not-allowed" onClick={notify}>
                    <div className="relative w-6 h-6 rounded-full p-1 bg-[#C9EFFF]">
                        <Image src={"/assets/paper.svg"} fill alt="paper" />
                    </div>
                    <p className="text-xs">Paper</p>
                </button>

                <button className="bg-[#FFF1E3] flex gap-x-1 p-2.5 rounded-3xl items-center mx-2 cursor-not-allowed" onClick={notify}>
                    <div className="relative w-6 h-6 rounded-full p-1 bg-[#FFDFBE]">
                        <Image src={"/assets/e-waste.svg"} fill alt="e-waste" />
                    </div>
                    <p className="text-xs">E-waste</p>
                </button>

                <button className="bg-[#FFEBE9] flex gap-x-1 p-2.5 rounded-3xl items-center mx-2 cursor-not-allowed" onClick={notify}>
                    <div className="relative w-6 h-6 rounded-full p-1 bg-[#FFD5D1]">
                        <Image src={"/assets/organic.svg"} fill alt="organic" />
                    </div>
                    <p className="text-xs">Organic</p>
                </button>

                <button className="bg-[#ECEAE9] flex gap-x-1 p-2.5 rounded-3xl items-center mx-2 cursor-not-allowed" onClick={notify}>
                    <div className="relative w-6 h-6 rounded-full p-1 bg-[#D7D7D7]">
                        <Image src={"/assets/metal.svg"} fill alt="metal" />
                    </div>
                    <p className="text-xs">Metal</p>
                </button>

                <button className="bg-[#E5FFF3] flex gap-x-1 p-2.5 rounded-3xl items-center mx-2 cursor-not-allowed" onClick={notify}>
                    <div className="relative w-6 h-6 rounded-full p-1 bg-[#AEF0D0]">
                        <Image src={"/assets/glass.svg"} fill alt="glass" />
                    </div>
                    <p className="text-xs">Glass</p>
                </button>

                <button className="bg-[#C2FFF4] flex gap-x-1 p-2.5 rounded-3xl items-center mx-2 cursor-not-allowed" onClick={notify}>
                    <div className="relative w-6 h-6 rounded-full p-1 bg-[#49FFDD]">
                        <Image src={"/assets/mixed.svg"} fill alt="mixed" />
                    </div>
                    <p className="text-xs">Mixed Waste</p>
                </button>
            </div>
            {error.material && <p className='text-red-500'>Please select a category</p>}

            <div className='mt-10'>
                <form onSubmit={onSubmit}>
                    <label className="" htmlFor={PICKUP_MATERIAL_AMOUNT_KEY}>
                        Number of Plastic Waste
                    </label>
                    <input
                        className='bg-[#F3F3F3] py-2 w-full pl-3 rounded-xl placeholder:text-xs mt-2 mb-4'
                        id={PICKUP_MATERIAL_AMOUNT_KEY}
                        type='number'
                        placeholder='Minimum of 50 pieces'
                    />

                    <label className="" htmlFor={PICKUP_CONTAINER_AMOUNT_KEY}>
                        Number of Plastic Bag
                    </label>
                    <input
                        className='bg-[#F3F3F3] py-2 w-full pl-3 rounded-xl placeholder:text-xs mt-2 mb-5'
                        id={PICKUP_CONTAINER_AMOUNT_KEY}
                        type='number'
                        placeholder='Please indicate number of bags'
                    />

                    <label className="" htmlFor={PICKUP_LGA_KEY}>
                        LGA
                    </label>
                    <select
                        className='bg-[#F3F3F3] py-2 w-full px-3 rounded-xl placeholder:text-xs mt-2 mb-5'
                        id={PICKUP_LGA_KEY}
                    />

                    <label className="" htmlFor={PICKUP_ADDRESS_KEY}>
                        Address
                    </label>
                    <select
                        className='bg-[#F3F3F3] py-2 w-full px-3 rounded-xl placeholder:text-xs mt-2 mb-5'
                        id={PICKUP_ADDRESS_KEY}
                    />

                    <label className="" htmlFor={PICKUP_DATE_KEY}>
                        Pickup Date
                    </label>
                    <input
                        className='bg-[#F3F3F3] py-2 w-full px-3 rounded-xl placeholder:text-xs mt-2 mb-5'
                        id={PICKUP_DATE_KEY}
                        type='datetime-local'
                    />

                    <button className='mt-5 w-full bg-carus-green text-white py-2 rounded-[10px]'>Schedule Pickup</button>
                </form>
            </div>
        </div>
    )
}

export default Pickup