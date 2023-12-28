"use client"

import Loader from '@/components/Loader';
import { Button } from '@/components/ui/button'
import { ImagePlus, PlusCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'

interface project {
  "id": number,
  "author": string,
  "width": number,
  "height": number,
  "url": string
}

export default function Dashboard() {
  const [projects, setProjects] = useState<project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/api/projects',{
        method:"GET"
      });
      const data: project[] = await response.json()
      setProjects(data)
      setLoading(false)
    }
    fetchProjects();
  }, [])

  if(loading) return <Loader/>
  return (
    <div className='flex flex-col items-center md:mx-[10px] lg:mx-[245px]'>
      <div className='flex items-start justify-start md:self-start mx-4 md:mx-10 my-10'>
        <h2 className='text-2xl md:text-[40px] font-[600]'>My Projects</h2>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-6'>
        <div onClick={()=>router.push('/addproject')} className='h-[250px] w-[360px] flex flex-col bg-white p-4 items-center rounded-lg hover:border hover:border-[#f2782f] transition'>
          <div className='w-[340px] h-[180px] flex justify-center rounded-lg bg-[#fa792f68]'>
            <ImagePlus color='white' fill='white' size={60} className='mt-[53px]' />
          </div>
          <p className='mt-3 text-[16px] px-1 font-semibold'>Create a new project</p>
          <p className='text-xs font-semibold'>or try a <Link href='/sampleprojects' className='text-[#fa782f] hover:text-[#fa792f95]'>sample project</Link></p>
        </div>
        {projects.map((project) => (
          <div key={project.id} onClick={()=>router.push(`/${project.id}`)} className='h-[250px] w-[360px] flex flex-col items-center bg-white p-4 rounded-lg hover:border hover:border-[#f2782f] transition'>
            <img src={project.url} alt="" className='w-[340px] h-[180px] rounded-lg' />
            <p className='mt-3 text-[16px] px-1 font-semibold'>{project.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
