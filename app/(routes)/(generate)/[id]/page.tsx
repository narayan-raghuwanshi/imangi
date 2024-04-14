"use client"
import Loader from '@/components/Loader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface Props {
    params: { id: number }
}
interface project {
    "id": number,
    "author": string,
    "width": number,
    "height": number,
    "url": string
}
const ProjectDetailPage = ({ params: { id } }: Props) => {
    const [project, setProject] = useState<project>()
    const [loading, setLoading] = useState<boolean>(true);

    const [author, setAuthor] = useState<string>("");
    const [width, setWidth] = useState<number>();
    const [height, setHeight] = useState<number>();
    const [url, setUrl] = useState<string>("");

    const router = useRouter()

    useEffect(() => {
        const fetchProject = async () => {
            const response = await fetch(`/api/projects/${id}`, {
                method: "GET"
            });
            const data = await response.json();
            setProject(data);
            setLoading(false)
        }
        fetchProject();
    }, [])

    const handleUpdate = async () => {
        const response = await fetch(`/api/projects/${id}`, {
            method: "PUT",
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
        if (response.ok) router.push('/');
    }

    const handleDelete = async () => {
        const response = await fetch(`/api/projects/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (response.ok) router.push('/');
    }
    if(loading) return <Loader/>
    return (
        <div className='flex flex-col md:flex-row gap-10 justify-center items-center mt-16 bg-white rounded-lg p-5'>
            <div className='flex justify-center items-start flex-col gap-5 w-full'>
                <img
                    src={project?.url}
                    alt="project image"
                    className='w-72 rounded-lg' />
                <div className='flex gap-1 flex-col items-start text-md pl-1'>
                    <p>Author: <span className='text-gray-600'>{project?.author}</span></p>
                    <p>Width: <span className='text-gray-600'>{project?.width}</span></p>
                    <p>Height: <span className='text-gray-600'>{project?.height}</span></p>
                </div>
            </div>
            <div className='flex flex-col space-y-4 w-full'>
                <Input
                    onChange={(e) => {
                        setAuthor(e.target.value)
                    }}
                    placeholder={project?.author}
                    className='placeholder:text-gray-400' />
                <Input
                    onChange={(e) => {
                        setWidth(Number(e.target.value))
                    }}
                    placeholder={String(project?.width)}
                    className='placeholder:text-gray-400' />
                <Input
                    onChange={(e) => {
                        setHeight(Number(e.target.value))
                    }}
                    placeholder={String(project?.height)}
                    className='placeholder:text-gray-400' />
                <Input
                    onChange={(e) => {
                        setUrl(e.target.value)
                    }}
                    placeholder={project?.url}
                    className='placeholder:text-gray-400' />
                <div className='flex justify-end gap-3'>
                    <Button
                        onClick={handleUpdate}>Save</Button>
                    <Button
                        variant={'destructive'}
                        onClick={handleDelete}>Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetailPage