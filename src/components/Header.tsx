"use client"

import React, { useState } from 'react'
import Image from "next/image"
import clsx from 'clsx';

export default function Header() {

    const [menu, setMenu] = useState(false);

    function handleClick() {
        setMenu(!menu);
    }

    return (
        <>
            <header className='max-w-[1110px] w-full m-auto md:pt-[89px] pt-[28px] flex justify-between items-center pb-8 md:pb-[55px]'>
                <div className='md:block hidden'>
                    <Image
                        alt='logo'
                        src={"/logo.svg"}
                        width={65}
                        height={40}
                    />
                </div>
                <div className='md:hidden block'>
                    <Image
                        alt='logo'
                        src={"/logo.svg"}
                        width={44.98}
                        height={28}
                    />
                </div>
                <ul className='gap-10 text-[#5E607A] md:flex hidden'>
                    <li className='hover:cursor-pointer hover:text-[#F15D51]'>Home</li>
                    <li className='hover:cursor-pointer hover:text-[#F15D51]'>New</li>
                    <li className='hover:cursor-pointer hover:text-[#F15D51]'>Popular</li>
                    <li className='hover:cursor-pointer hover:text-[#F15D51]'>Trending</li>
                    <li className='hover:cursor-pointer hover:text-[#F15D51]'>Categories</li>
                </ul>
                <svg onClick={handleClick} className='md:hidden block hover:cursor-pointer' width="40" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fillRule="evenodd"><path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" /><path d="M0 0h40v3H0z" /></g></svg>
            </header>
            <div className={clsx('absolute inset-0 bg-[#00001A] bg-opacity-50 md:hidden transition-all duration-300',
                menu ? "translate-x-0 block" : "-translate-x-96 hidden"
            )}>
                <div className='w-2/3 ml-auto bg-white h-full pl-6 pr-[29px] pt-[144px] relative'>
                    <ul className='gap-6 text-[#00001A] text-lg leading-6 flex-col flex'>
                        <li className='hover:cursor-pointer hover:text-[#F15D51]'>Home</li>
                        <li className='hover:cursor-pointer hover:text-[#F15D51]'>New</li>
                        <li className='hover:cursor-pointer hover:text-[#F15D51]'>Popular</li>
                        <li className='hover:cursor-pointer hover:text-[#F15D51]'>Trending</li>
                        <li className='hover:cursor-pointer hover:text-[#F15D51]'>Categories</li>
                    </ul>
                    <svg onClick={handleClick} className='absolute right-[20.8px] top-[27.3px] hover:cursor-pointer' width="32" height="31" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fillRule="evenodd"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" /><path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" /></g></svg>
                </div>
            </div>
        </>
    )
}
