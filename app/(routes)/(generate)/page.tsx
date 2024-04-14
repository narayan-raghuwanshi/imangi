"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import Loader from '@/components/Loader';
import OpenAI from "openai";
import Link from 'next/link';
import { Link2 } from 'lucide-react';

const Dashboard = () => {
  const [prompt, setPrompt] = useState("A ship in the harbor, a lighthouse, and a starry night");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    "A ship in the harbor, a lighthouse, and a starry night...."
  );

  const openai = new OpenAI({ apiKey: "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", dangerouslyAllowBrowser: true });

  const generateImage = async () => {
    setPlaceholder(`Search ${prompt}..`);
    setLoading(true);
    console.log("Hello");
    const res = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    setLoading(false);
    setResult(res.data[0].url || '');
    console.log(res.data[0].url);

  };

  return (
    <div className='flex flex-col gap-8 items-center md:items-start md:ml-60 mb-16'>
      <div className='flex justify-center pt-6'>
        <div>
          <div className='flex flex-col space-y-2 md:space-y-4 items-center text-center'>
            <p className='text-2xl md:text-5xl font-semibold text-gray-600'>Generate something beautiful.</p>
          </div>
          <div className='flex flex-col md:flex-row gap-5 mt-10'>
            <div className='flex flex-col w-full gap-3'>
              <input type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={placeholder}
                className='h-14 w-full min-w-96 px-6 rounded-full border-[#212529] border  placeholder:text-[#6c757d] shadow-md shadow-white' />
            </div>
            <button onClick={generateImage} className='bg-[#212529] text-gray-200 shadow-md shadow-white px-10 font-semibold h-14 rounded-full hover:scale-[103%] hover:bg-black transition duration-300'>Generate</button>
          </div>
        </div>
      </div>
      <div className='flex justify-center flex-col md:justify-between gap-5 w-full flex-wrap rounded-lg'>
        <div className={`h-[360px] w-[360px] ${(loading) ? 'border' : ''} border-gray-400 rounded-md`}>
          {loading ?
            <div className='flex justify-center items-center'>
              <div className='flex justify-center items-center flex-col'>
                <Loader />
                <span>Generating</span>
              </div>
            </div> : <>
              {result.length > 0 ? (
                <div className='space-y-3'>
                  <img src={result} alt="result" className='rounded-lg' />
                  <div className='flex'>
                    <Link target='_blank' className='flex gap-2 border bg-[#1f6feb] h-fit px-5 py-2 rounded-lg font-semibold text-gray-100 hover:text-zinc-200 hover:scale-[102%] transition duration-300' href={result}><span>Open</span><Link2 /></Link>
                  </div>
                </div>
              ) : (
                <img className='rounded-lg' src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-qjdB4VR6qnlpvvKwo2O2XANA/user-U8tWdCzQcXl3Mcty323a9DWz/img-a0Mhme3SEjmBxf1OJeWGm251.png?st=2024-04-14T18%3A23%3A14Z&se=2024-04-14T20%3A23%3A14Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-04-14T08%3A02%3A43Z&ske=2024-04-15T08%3A02%3A43Z&sks=b&skv=2021-08-06&sig=O58WDmyX6r5ttEeA9qtQqCrjCgopbBlFb8XSoWXlCVw%3D" alt="" />
              )}
            </>
          }
        </div>
      </div>
    </div>

  )
}

export default Dashboard