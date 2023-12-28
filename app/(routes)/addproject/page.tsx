"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const AddProject = () => {
    const [author, setAuthor] = useState<string>("");
    const [width, setWidth] = useState<number>();
    const [height, setHeight] = useState<number>();
    const [url, setUrl] = useState<string>("");
    const router = useRouter()

    const handleSave = async () => {
        const response = await fetch(`/api/projects`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                author,
                width,
                height,
                url
            }),
        })
        if(response.ok) router.push('/');
    }
    return (
        <div className='flex flex-col md:flex-row w-[340px] justify-center items-center mt-16 bg-white rounded-lg p-5'>
            <div className='flex flex-col space-y-4 w-full'>
                <Input onChange={(e) => { setAuthor(e.target.value) }} placeholder={"Enter author"} className='placeholder:text-gray-400' />
                <Input onChange={(e) => { setWidth(Number(e.target.value)) }} placeholder={"Enter width"} className='placeholder:text-gray-400' />
                <Input onChange={(e) => { setHeight(Number(e.target.value)) }} placeholder={"Enter height"} className='placeholder:text-gray-400' />
                <Input onChange={(e) => { setUrl(e.target.value) }} placeholder={"Enter image url"} className='placeholder:text-gray-400' />
                <div className='flex justify-center gap-3'>
                    <Button onClick={handleSave} className='px-6'>Save</Button>
                </div>
            </div>
        </div>
    )
}

export default AddProject