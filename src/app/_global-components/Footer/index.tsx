"use client"
import React from 'react'
import Image from "next/image"
import eventImg from "@/app/assets/footer-event-img.jpg"
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

function Footer() {
    return (
        <div className='bg-wood-pattern'>
            <div className='text-lg space-y-2 py-8 px-4 text-white font-medium max-w-app-width mx-auto  md:grid md:grid-cols-4 md:gap-10'>
                <div className='flex flex-col gap-y-2'>
                    <a href='https://www.farmerbros.com/your-business/restaurants/' className='hover:text-primary'>Restaurant Channel</a>
                    <a href='https://www.farmerbros.com/your-business/convenience-stores/' className='hover:text-primary'>C-Store Channel</a>
                    <a href='https://www.farmerbros.com/your-business/healthcare/' className='hover:text-primary'>Healthcare Channel</a>
                    <a href='https://www.farmerbros.com/your-business/lodging/' className='hover:text-primary'>Hotel/Hospitality Channel</a>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <a href='https://farmerbrothers.gcs-web.com/' className='hover:text-primary'>Investor Relations</a>
                    <a href='https://www.farmerbros.com/working-at-farmer-bros/' className='hover:text-primary'>Careers</a>
                    <a href='https://www.farmerbros.com/contact/' className='hover:text-primary'>Contact Us</a>
                    <a href='https://myaccount.farmerbros.com/' className='hover:text-primary'>My Account</a>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <a href='https://www.farmerbros.com/terms-conditions/' className='hover:text-primary'>Terms and conditions</a>
                    <a href='https://www.farmerbros.com/sales-terms-conditions/' className='hover:text-primary'>Sales terms and conditions</a>
                    <a href='https://www.farmerbros.com/equipment-usage-terms-conditions/' className='hover:text-primary'>Equip. Usage Terms and Cond</a>
                    <a href='https://www.farmerbros.com/privacy-policy/' className='hover:text-primary'>Privacy Policy</a>
                    <a href='https://www.farmerbros.com/terms-conditions/digital-millennium-copyright-act-policy/' className='hover:text-primary'>DMCA Policy</a>
                </div>
                <div className='relative'>
                    <Image
                        src={eventImg}
                        alt='sustainability report event'
                        style={{ width: "100%" }}
                    />
                    <a
                        href="https://www.farmerbros.com/media//2022-Sustainability-Report.pdf"
                        className='bg-dark-brown-fade text-primary italic p-4 absolute w-full top-[60%] text-xs md:top-[40%]'
                    >
                        2022 Sustainability Report
                    </a>
                </div>
                <div className='md:flex md:items-center md:justify-between md:col-span-full'>
                    <p className='text-sm italic text-secondary'>Copyright Farmer Bros. Co. 2023. All rights Reserved</p>
                    <p className='text-xs'>1912 Farmer Brothers Drive, Northlake, TX 76262 (682) 549-6600</p>
                    <div>
                        <div>
                            <a href="http://www.facebook.com/FarmerBrosCo"> <Facebook className=' hover:text-primary' /></a>
                            <a href="http://www.linkedin.com/company/farmer-brothers"><Twitter className=' hover:text-primary' /></a>
                            <a href="https://twitter.com/#!/Farmer_Brothers"><LinkedIn className=' hover:text-primary' /></a>
                        </div>
                        <p className='text-xs italic'>Get Connected</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer