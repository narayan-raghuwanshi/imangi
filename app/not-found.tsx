import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
    return (
        <div className='flex flex-col gap-5 justify-center items-center'>
            <h2 className='mt-20 text-2xl font-semibold text-gray-700'>404 Page not found</h2>
            <Link href={"/"}><Button>Click here</Button></Link>
        </div>
    )
}

export default NotFoundPage