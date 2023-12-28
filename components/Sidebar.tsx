"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { bottomItemsSidebar, topItemsSidebar } from './constants'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ArrowLeftSquare, ArrowRightSquare } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const pathName = usePathname();
    const [open, setOpen] = useState<Boolean>(true);

    return (
        <div>
            <div className={cn('bg-white left-0 w-[260px] px-[23.5px] md:px-12 fixed inset-0 z-50 pt-5 flex flex-col justify-between items-center', (!open) ? 'hidden' : '')}>
                <div className='flex flex-col space-y-7'>
                    <div className='self-center'>
                        <Link href="/">
                            <Image
                                src={"/logo.png"}
                                alt='logo'
                                width={80}
                                height={40}
                                className='-mt-0.5'
                                quality={100} />
                        </Link>
                    </div>
                    <hr className='border-t-2 bg-[#c4c4c4]' />
                    <div className='flex flex-col space-y-7'>
                        {topItemsSidebar.map((item, index) => (
                            <Link
                                href={item.href}
                                key={item.href}
                                className={cn('font-semibold gap-2 text-[#c4c4c4] hover:text-[#FA782F] transition', (index > 1) ? 'hidden' : 'flex', (pathName == item.href) ? 'text-[#FA782F]' : '')}>
                                {item.icon}
                                {item.title}
                            </Link>
                        ))}
                    </div>
                    <hr className='border-t-2 bg-[#c4c4c4]' />
                    <div className='flex flex-col gap-7'>
                        {topItemsSidebar.map((item, index) => (
                            <Link
                                href={item.href}
                                key={item.href}
                                className={cn('font-semibold gap-2 text-[#c4c4c4] hover:text-[#FA782F] transition', (index > 1) ? 'flex' : 'hidden', (pathName == item.href) ? 'text-[#FA782F]' : '')}>
                                {item.icon}
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-7'>
                    {bottomItemsSidebar.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn('flex font-semibold gap-2 text-[#c4c4c4] hover:text-[#FA782F] transition', (pathName == item.href) ? 'text-[#FA782F]' : '')}>
                            {item.icon}
                            {item.title}
                        </Link>
                    ))}
                    <button
                        className='flex mb-7 gap-2 font-semibold text-gray-800 hover:text-gray-700 transition'
                        onClick={() => {
                            setOpen(!open)
                        }}>
                        <ArrowLeftSquare />
                        Collapse
                    </button>
                </div>
            </div>
            <div className={cn('flex fixed bottom-8 left-10 bg-gray-200 text-white px-3 py-2 rounded-md hover:border-gray-300 transition hover:border', (open) ? 'hidden' : '')}>
                <button
                    className='flex gap-2 text-gray-800 font-semibold hover:text-gray-700 transition'
                    onClick={() => {
                        setOpen(!open)
                    }}>
                    Open
                    <ArrowRightSquare />
                </button>
            </div>
        </div>

    )
}

export default Sidebar