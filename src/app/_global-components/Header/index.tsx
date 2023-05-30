"use client"
import React, { useEffect, useMemo, } from 'react'
import Image from 'next/image'
import logo from "@/app/assets/logo.svg"
import meniIcon from "@/app/assets/menu_icon.svg";
import { ArrowDropDown, Mail } from '../icons';
import cn from 'clsx';
import { Animations } from './animations';
import { useMedia } from 'react-use';



function Header() {
    const isDesktopDevice = useMedia('(min-width: 1280px)', false);
    const animation = useMemo(() => new Animations(), []);


    useEffect(() => {
        animation.isDesktopDevice = isDesktopDevice;
        animation.desktopScreenStyleReset()

    }, [isDesktopDevice, animation])

    return (
        <div className='bg-wood-pattern '>
            <div className={`relative flex items-center pt-4 pb-8  px-2 justify-between text-white max-w-app-width mx-auto xl:pt-8 xl:pb-0 xl:px-4`}>
                <a href=''>
                    <Image
                        src={logo}
                        width={200}
                        height={200}
                        priority={true}
                        alt='logo-image'
                    />
                </a>
                <div
                    onClick={animation.menuClick}
                    className='flex items-center cursor-pointer text-secondary font-semibold xl:hidden'>
                    <p className=' text-xl capitalize'>Menu</p>
                    <span>
                        <Image
                            src={meniIcon}
                            alt='icon'
                        />
                    </span>
                </div>

                {/* Mobile Nav Tab */}
                <div
                    data-menu-content
                    data-menu-isopen="false"
                    className='absolute clip-path-vertical-hide bg-light-brown text-app-white w-full h-auto top-[103px] left-0 xl:self-end xl:static xl:clip-path-none xl:bg-transparent'>
                    <ul className='text-base xl:flex xl:items-center xl:justify-between'>
                        <li className='group relative overflow-hidden border-t border-white xl:border-none xl:overflow-visible xl:p-4'>
                            <div
                                data-accordion-type="product"
                                onClick={animation.accordionClick}
                                className='flex font-extrabold items-center justify-between py-2 px-2 hover:text-primary cursor-pointer xl:p-0'>
                                <span>Product</span>
                                <span className='xl:hidden'>
                                    <ArrowDropDown
                                        width={32}
                                        height={32}
                                        color='white'
                                    />
                                </span>

                            </div>

                            <div
                                data-accordion-content="product"
                                data-accordion-isopen="false"
                                className='text-xs h-0 bg-dark-brown clip-path-vertical-hide xl:hidden xl:group-hover:grid xl:clip-path-none xl:w-[600px] xl:h-auto xl:top-[56px] xl:gap-10 xl:grid-cols-2 xl:bg-dark-brown-fade xl:absolute'>
                                <div className='flex flex-col gap-y-5'>
                                    <a className='px-2 pt-4 font-bold  text-sm hover:text-primary' href='https://www.farmerbros.com/products/coffee/'>Coffee</a>
                                    <a className='px-2 hover:text-primary' href='https://www.farmerbros.com/products/coffee/whole-bean-and-ground/artisan-collection/'>Artisan Collection Specialty Coffee</a>
                                    <a className='px-2 hover:text-primary' href='https://www.farmerbros.com/products/coffee/whole-bean-and-ground/metropolitan/'>Metropolitan Coffee Collection</a>
                                    <a className='px-2 hover:text-primary' href='https://www.farmerbros.com/products/coffee/whole-bean-and-ground/cains/'>Cain’s Coffee Collection</a>
                                    <a className='px-2 hover:text-primary' href='https://www.farmerbros.com/products/coffee/whole-bean-and-ground/farmer-brothers/'>Farmer Brothers Coffee</a>
                                    <a className='px-2 hover:text-primary' href='https://www.farmerbros.com/products/coffee/whole-bean-and-ground/superior/'>Superior Coffee Collection</a>
                                    <a className='px-2 hover:text-primary' href='https://www.farmerbros.com/products/coffee/whole-bean-and-ground//boyds-coffee'>Boyd’s Coffee</a>
                                    <a className='px-2 hover:text-primary' href='https://www.farmerbros.com/products/coffee/whole-bean-and-ground/trucup-low-acid-coffee'>trücup Low-Acid Coffee</a>
                                </div>
                                <div className='flex flex-col gap-y-5'>
                                    <a className='px-2 pt-4 font-extrabold  text-sm hover:text-primary' href=''>Tea</a>
                                    <a className='px-2 hover:text-primary' href='https://www.farmerbros.com/products/tea//hot-tea/china-mist-hot-tea'>China Mist Hot Tea</a>
                                    <a className='px-2 hover:text-primary' href='https://www.farmerbros.com/products/tea//hot-tea/farmer-brothers-select-hot-tea'>Farmer Brothers Hot Tea</a>
                                    <a className='px-2 hover:text-primary' href='https://www.farmerbros.com/products/tea//iced-tea/'>Iced Tea</a>
                                </div>
                                <div className='flex flex-col gap-y-5'>
                                    <a className='px-2 pt-4 font-extrabold  text-sm hover:text-primary' href=''>Other Beverages</a>
                                    <a className='px-2 hover:text-primary' href='https://www.farmerbros.com/products/other-beverages/cold-beverage-mixes/'>Cold Beverages</a>
                                    <a className='px-2 pb-4 hover:text-primary' href='https://www.farmerbros.com/products/other-beverages/hot-beverage-mixes/'>Hot Beverages</a>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center justify-between px-2 py-4 border-t border-white font-extrabold hover:text-primary cursor-pointer xl:border-none xl:p-0'>
                            <span>Promotions</span>
                        </li>
                        <li className='group relative overflow-hidden border-t border-white xl:border-none xl:overflow-visible xl:p-4'>
                            <div
                                data-accordion-type="business"
                                onClick={animation.accordionClick}
                                className='flex font-extrabold items-center justify-between py-2 px-2 hover:text-primary cursor-pointer xl:p-0'>
                                <span>Your Business</span>
                                <span className='xl:hidden'>
                                    <ArrowDropDown
                                        width={32}
                                        height={32}
                                        color='white'
                                    />
                                </span>
                            </div>
                            <div
                                data-accordion-content="business"
                                data-accordion-isopen="false"
                                className='flex font-extrabold text-base flex-col gap-y-5 h-0 bg-dark-brown clip-path-vertical-hide xl:hidden xl:pr-4 xl:group-hover:flex xl:clip-path-none xl:w-auto xl:h-auto xl:top-[56px] xl:gap-4 xl:bg-dark-brown-fade xl:absolute'>
                                <a className='px-2 pt-4 font-extrabold hover:text-primary xl:whitespace-nowrap' href='https://www.farmerbros.com/your-business/restaurants/'>Restaurant</a>
                                <a className='px-2 hover:text-primary xl:whitespace-nowrap' href='https://www.farmerbros.com/your-business/gaming-casinos/'>Gaming and Casinos</a>
                                <a className='px-2 hover:text-primary xl:whitespace-nowrap' href='https://www.farmerbros.com/your-business/private-label/'>Private Label</a>
                                <a className='px-2 hover:text-primary xl:whitespace-nowrap' href='https://www.farmerbros.com/your-business/healthcare/'>Healthcare</a>
                                <a className='px-2 hover:text-primary xl:whitespace-nowrap' href='https://www.farmerbros.com/your-business/education/'>Education</a>
                                <a className='px-2 hover:text-primary xl:whitespace-nowrap' href='https://www.farmerbros.com/your-business/convenience-stores/'>Convenience Stores</a>
                                <a className='px-2 pb-4 hover:text-primary xl:whitespace-nowrap' href='https://www.farmerbros.com/your-business/lodging/'>Hotels/Hospitality</a>
                            </div>
                        </li>
                        <li className='group relative overflow-hidden border-t border-white xl:border-none xl:overflow-visible xl:p-4'>
                            <div
                                data-accordion-type="WhatsBrewing"
                                onClick={animation.accordionClick}
                                className='flex font-extrabold items-center justify-between py-2 px-2 hover:text-primary cursor-pointer xl:p-0'>
                                <span>Whats Brewing</span>
                                <span className='xl:hidden'>
                                    <ArrowDropDown
                                        width={32}
                                        height={32}
                                        color='white'
                                    />
                                </span>
                            </div>
                            <div
                                data-accordion-content="WhatsBrewing"
                                data-accordion-isopen="false"
                                className='flex font-extrabold text-base flex-col gap-y-5 h-0 bg-dark-brown clip-path-vertical-hide xl:hidden xl:pr-4 xl:group-hover:flex xl:clip-path-none xl:w-auto xl:h-auto xl:top-[56px] xl:gap-4 xl:bg-dark-brown-fade xl:absolute'>
                                <a className='px-2 pt-4 hover:text-primary xl:whitespace-nowrap' href='https://www.farmerbros.com/blog/category/coffee-articles/'>Coffee Stories</a>
                                <a className='px-2 hover:text-primary xl:whitespace-nowrap' href='https://www.farmerbros.com/blog/category/tea-articles/'>Tea Story</a>
                                <a className='px-2 hover:text-primary xl:whitespace-nowrap' href='https://www.farmerbros.com/blog/category/recipes/'>Recipes</a>
                                <a className='px-2 hover:text-primary xl:whitespace-nowrap' href='https://www.farmerbros.com/blog/2018/08/09/spice-up-your-bbq/'>Spice Stories</a>
                                <a className='px-2 pb-4 hover:text-primary xl:whitespace-nowrap' href='https://www.farmerbros.com/blog/category/origin-stories/'>Origin Stories</a>
                            </div>
                        </li>
                        <li className='group relative overflow-hidden border-t border-white xl:border-none xl:overflow-visible xl:p-4'>
                            <div
                                data-accordion-type="OurStory"
                                onClick={animation.accordionClick}
                                className='flex font-extrabold items-center justify-between py-2 px-2 hover:text-primary cursor-pointer xl:p-0'>
                                <span>Our Story</span>
                                <span className='xl:hidden'>
                                    <ArrowDropDown
                                        width={32}
                                        height={32}
                                        color='white'
                                    />
                                </span>
                            </div>
                            <div
                                data-accordion-content="OurStory"
                                data-accordion-isopen="false"
                                className='flex font-extrabold text-base flex-col gap-y-5 h-0 bg-dark-brown clip-path-vertical-hide xl:hidden xl:pr-4 xl:group-hover:flex xl:clip-path-none xl:w-auto xl:h-auto xl:top-[56px] xl:gap-4 xl:bg-dark-brown-fade xl:absolute'>
                                <a className='px-2 pt-4 font-extrabold hover:text-primary xl:whitespace-nowrap' href='https://www.farmerbros.com/our-story/heritage/'>Heritage</a>
                                <a className='px-2 hover:text-primary xl:whitespace-nowrap' href='https://www.farmerbros.com/our-story/110-years-of-farmer-brothers-free-ebook/'>Our 110th Anniversary Book</a>
                                <a className='px-2 hover:text-primary xl:whitespace-nowrap' href='https://www.farmerbros.com/our-story/what-we-do/'>What We Do</a>
                                <a className='px-2 hover:text-primary xl:whitespace-nowrap' href='https://www.farmerbros.com/our-story/sustainability/'>Sustainablity</a>
                                <a className='px-2 pb-4 hover:text-primary xl:whitespace-nowrap' href='https://farmerbrothers.gcs-web.com/'>Investor Relations</a>
                            </div>
                        </li>

                        <li className='flex items-center justify-between px-2 py-4 border-t border-white font-extrabold hover:text-primary cursor-pointer xl:border-none xl:p-0'>
                            <span>Careers</span>
                        </li>
                        <li className='flex flex-wrap items-start gap-4 px-2 py-4 border-t border-white xl:border-none'>
                            <div className='relative'>
                                <div className='flex py-2 text-sm xl:absolute xl:top-[-40px] xl:left-[-70px]'>
                                    <a href='https://www.farmerbros.com/email-signup/' className='pr-4 border-r xl:whitespace-nowrap hover:underline'>Email SignUp</a>
                                    <a href='https://www.farmerbrotherscoffee.com/' className='px-4 border-r xl:whitespace-nowrap hover:underline'>Shop Now</a>
                                    <a href='https://www.farmerbros.com/contact/' className='px-4 border-r xl:whitespace-nowrap hover:underline'>Contact Us</a>
                                </div>
                                <div className='flex items-center gap-x-2'>
                                    <input
                                        placeholder='Search'
                                        type="text"
                                        className='text-black px-4 text-sm outline-none'
                                    />
                                    <button className='text-xs bg-primary px-2 h-[20px]'>Go</button>
                                </div>
                            </div>
                            <div className='flex items-center gap-x-2 text-sm font-extrabold text-primary xl:hidden'>
                                <p>Sign up for our Newsletter</p>
                                <Mail
                                    className={cn("text-primary")}
                                    color={"#FDB836"}
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header