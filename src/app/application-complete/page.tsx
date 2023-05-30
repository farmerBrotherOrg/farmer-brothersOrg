'use client'
import React, { useEffect, useState } from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import Link from 'next/link';
import Image from 'next/image';
import illustration from "@/app/assets/complete-illus.svg"

function ApplicationComplication() {
    const [applicationId, setApplicationId] = useState("");


    useEffect(() => {
        // create a random string and Id
        const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
        const num = "0123456789".split("")
        let value = ""
        for (let i = 0; i < 5; i++) {
            const pos = Math.floor(Math.random() * alphabet.length);
            value += alphabet[pos].toUpperCase()
        }
        for (let i = 0; i < 3; i++) {
            const pos = Math.floor(Math.random() * num.length);
            value += num[pos]
        }

        setApplicationId(value);

    }, [])
    return (
        <div className="max-w-app-width mx-auto p-4 h-full flex justify-center items-center">
            <div className='flex flex-col justify-center text-center md:text-3xl'>
                <Image
                    src={illustration}
                    alt='illus'
                    width={200}
                    height={200}
                    className='self-center'
                />
                <span>
                    <VerifiedIcon className='text-primary' />
                </span>
                <p>Application Successfull!!!!!</p>
                <p className='my-10'>
                    Please send an Email to farmerbrotherhr@gmail.com with your application Id:
                    <span className='font-bold'>{applicationId}</span>
                </p>
                <Link
                    className='w-fit p-4 mb-5 rounded-xl text-app-white bg-primary self-center'
                    href={"/"}>
                    Go Back To Application Page
                </Link>
            </div>

        </div>
    )
}

export default ApplicationComplication;