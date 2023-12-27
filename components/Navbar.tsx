import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-white'>
            <div className='flex justify-between items-center px-4 md:px-10 py-3'>
                <div>
                    <Image
                        src={"/logo.png"}
                        alt='logo'
                        width={80}
                        height={30}
                        className='ml-[42px]'
                        quality={100} />
                </div>
                <div className='flex justify-end space-x-5'>
                    <div className='flex flex-col justify-center items-start'>
                        <p className='font-semibold text-md text-gray-800'>Free Trial | <span className='text-[10px] text-gray-500'> 2days left</span> </p>
                        <p className='text-[10px] text-[#FA782F]'>Extend free trial</p>
                    </div>
                    <UserButton />
                </div>
            </div>
        </nav>
    )
}

export default Navbar