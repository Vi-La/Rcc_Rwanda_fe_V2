import React from 'react'
import Navbar from '../components/Navbar'
import { useTranslation } from 'react-i18next'

const ChartRoom = () => {
    const { t } = useTranslation();
    return (
        <>
            <Navbar />
            <div className='text-7xl py-3 font-serif bg-[#F5F5F5] text-white h-screen flex flex-row'>
                <div className='h-screen w-1/6 border-r-2'>
                    <div className='bg-[#FF3D3D] flex-col p-2'>
                        <div className='flex flex-row items-center'>
                            <span className="text-lg">JSM Community</span>
                            <span></span>
                        </div>
                        <div className='flex justify-between'>
                            <span className="text-xs">JSM Community</span>
                            <span className="text-xs">9th Sept, 2022</span>
                        </div>
                    </div>
                </div>
                <div className='h-screen w-2/3 border-r-2'>
                    <h1 className='text-center text-3xl text-[#FF3D3D]'>JSM Community</h1>
                    <div className='w-max bg-[#FFC2C2] text-black rounded-xl flex flex-col px-2 py-4 mx-2 my-2'>
                        <span className='text-lg items-end'>Hey there !</span>
                        <span className='text-xs'>Sent by me</span>
                    </div>
                    <div className='w-max bg-[#FFC2C2] text-black rounded-xl flex flex-col px-2 py-4 mx-2'>
                        <span className='text-lg'>How are you all doing !</span>
                        <span className='text-xs'>Sent by me</span>
                    </div>
                    <div className='w-max bg-[#FF3D3D] text-black rounded-xl flex flex-col px-2 py-4 mx-2 my-2'>
                        <span className='text-lg'>How are you all doing !</span>
                        <span className='text-xs'>Sent by me</span>
                    </div>
                    <div className='mx-2'>
                        <input type="text" name="msg" id="msg" className='w-3/5 rounded-full h-16 border-2 fixed bottom-4' />
                    </div>
                </div>
                <div className='h-screen w-1/6 border-r-2 px-2'>
                    <h1 className='text-xl text-black'>JSM Community</h1>
                    <div className='flex flex-col'>
                        <h1 className='text-sm text-black font-bold my-2'>People</h1>
                        <div className='flex flex-col'>
                            <img src="../../public/logo192.png" alt="" className="rounded-full" />
                            <span className='text-sm text-black'>Sir cragane</span>
                            <span className='text-sm text-black my-2'>Stark</span>
                            <span className='text-sm text-black'>Sonya</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChartRoom
