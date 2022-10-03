import React from 'react'
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="flex-col fixed pt-[3vh] lg:pt-[11vh] min-h-screen lg:w-[23vh] bg-white  border-r">
            <ul className="flex flex-col py-4">
                <li>
                    <NavLink to="dashdash" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                        <span className="text-base font-sans">Dashboard</span>
                    </NavLink>
                </li>
                <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-600 hover:text-gray-800">
                    <NavLink
                        to="news"
                        className={(navData) => {
                            if (navData.isActive) return 'text-blue-700';
                            return '';
                        }}
                    >
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                        <span className="text-base font-sans">News</span>
                    </NavLink>
                </li>
                <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-600 hover:text-gray-800">
                    <NavLink
                        to="user"
                        className={(navData) => {
                            if (navData.isActive) return 'text-blue-700';
                            return '';
                        }}
                    >
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
                        <span className="text-base font-sans">Users</span>
                    </NavLink>
                </li>
                <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-600 hover:text-gray-800">
                    <NavLink
                        to="leader"
                        className={(navData) => {
                            if (navData.isActive) return 'text-blue-700';
                            return '';
                        }}
                    >
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat"></i></span>
                        <span className="text-base font-sans">Leader_Belige</span>
                    </NavLink>
                </li>
                <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-600 hover:text-gray-800">
                    <NavLink
                        to="community"
                        className={(navData) => {
                            if (navData.isActive) return 'text-blue-700';
                            return '';
                        }}
                    >
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
                        <span className="text-base font-sans">Community</span>
                    </NavLink>
                </li>
                <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-600 hover:text-gray-800">
                    <NavLink
                        to="prayer"
                        className={(navData) => {
                            if (navData.isActive) return 'text-blue-700';
                            return '';
                        }}
                    >
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
                        <span className="text-base font-sans">Prayer Group</span>
                    </NavLink>
                </li>
                <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-600 hover:text-gray-800">
                    <NavLink
                        to="lesson"
                        className={(navData) => {
                            if (navData.isActive) return 'text-blue-700';
                            return '';
                        }}
                    >
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
                        <span className="text-base font-sans">Lesson of the day</span>
                    </NavLink>
                </li>
                <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-600 hover:text-gray-800">
                    <NavLink
                        to="message"
                        className={(navData) => {
                            if (navData.isActive) return 'text-blue-700';
                            return '';
                        }}
                    >
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bell"></i></span>
                        <span className="text-base font-sans">Messages</span>
                        <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                    </NavLink>
                </li>
                <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-600 hover:text-gray-800">
                    <NavLink
                        to="report"
                        className={(navData) => {
                            if (navData.isActive) return 'text-blue-700';
                            return '';
                        }}
                    >
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
                        <span className="text-base font-sans">Gallery</span>
                    </NavLink>
                </li>
                <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-600 hover:text-gray-800">
                    <NavLink to="">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
                        <button className="text-base font-sans">Logout</button>
                    </NavLink>
                </li>
            </ul>
        </div>
        // </div>
    )
}

export default SideBar

