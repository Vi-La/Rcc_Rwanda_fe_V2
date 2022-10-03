import React, { useState } from 'react'
import Logo from './../assets/logo.png'
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import SideBar from './SideBar';


const DashboardHeader = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className="flex-1 flex z-10 fixed w-screen flex-col">
            <nav className="px-10 flex justify-between bg-white h-16 border-b-2">
                <div className="flex -ml-6 pt-4 pr-2 lg:hidden">
                    <div onClick={handleClick}>
                        {!nav ? (
                            <MenuIcon className="w-7 text-black" />
                        ) : (
                            <XIcon className="w-7 text-black" />
                        )}
                    </div>
                </div>
                <ul className="flex items-center">
                    <Link to="/">
                        <li className="h-9 w-9 ">
                            <img
                                className="h-full w-full rounded-sm mx-auto"
                                src={Logo}
                                alt="svelte logo" />
                        </li>
                    </Link>
                    <h1 className=" text-gray-700 font-serif ml-3">RWANDA CHARISMATIQUE</h1>
                </ul>
                <ul className="flex items-center">
                    <li>
                    </li>
                </ul>
                <ul className="flex items-center">
                    <li className="pr-6 hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            className="feather feather-bell">
                            <path
                                d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                    </li>
                    <li className="h-10 w-10">
                        <img
                            className="h-full w-full rounded-full mx-auto"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                            alt="profile woman" />
                    </li>
                </ul>
            </nav>
            <ul
                onClick={handleClick}
                className={
                    !nav ? 'hidden' : 'bg-white cursor-pointer lg:hidden'
                }
            >
                <SideBar style="flex pt-2 h-[92%]" />
            </ul>
        </div>
    )
}

export default DashboardHeader