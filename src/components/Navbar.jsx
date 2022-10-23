import React, { useState } from 'react'
import Logo from './../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HiChevronDown } from 'react-icons/hi'
import { MenuIcon, XIcon } from '@heroicons/react/outline';


const Navbar = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false)
    const handleDropDown = () => setOpen(!open);
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    return (
        <div>
            <nav className="bg-[#FF3D3D] border-gray-200 px-4 sm:px-4 py-4">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/">
                        <img src={Logo} className="mr-3 h-6 sm:h-12" alt="Logo" />
                    </Link>
                    <div className="hidden lg:flex md:order-2">
                        <button
                            type="button"
                            className="text-white bg-transparent border focus:ring-4 focus:outline-none font-sans focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 uppercase">
                            <Link to="/register">{t("Register/Login")}</Link>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li className="block py-2 pr-4 pl-3 text-lg text-white text-gray-200 font-sans hover:text-gray-50 rounded md:bg-transparent md:p-0">
                                <NavLink
                                    to="/"
                                    className={(navData) => {
                                        if (navData.isActive) return 'text-black';
                                        return '';
                                    }}
                                >
                                    {t("Home")}
                                </NavLink>
                            </li>
                            <li className="block py-2 pr-4 pl-3 text-lg text-gray-200 hover:text-gray-50 font-sans border-b border-gray-50 md:hover:bg-transparent md:border-0 md:p-0">
                                <NavLink
                                    to="/news"
                                    className={(navData) => {
                                        if (navData.isActive) return 'text-black';
                                        return '';
                                    }}
                                >
                                    {t("News")}
                                </NavLink>
                            </li>
                            <li className="block py-2 pr-4 pl-3 text-lg text-gray-200 hover:text-gray-50 font-sans border-b border-gray-50 md:hover:bg-transparent md:border-0 md:p-0">
                                <NavLink
                                    to="/chart"
                                    className={(navData) => {
                                        if (navData.isActive) return 'text-black';
                                        return '';
                                    }}
                                >
                                    {t("ChartRooms")}
                                </NavLink>
                            </li>
                            <li className="block py-2 pr-4 pl-3 text-lg text-gray-200 hover:text-gray-50 font-sans border-b border-gray-50 md:hover:bg-transparent md:border-0 md:p-0">
                                <NavLink
                                    to="/history"
                                    className={(navData) => {
                                        if (navData.isActive) return 'text-black';
                                        return '';
                                    }}
                                    onClick={handleDropDown}
                                >
                                    <HiChevronDown className='absolute ml-14 w-11' size="1.7rem" />
                                    {t("History")}
                                </NavLink>
                            </li>
                            <li className="block py-2 pr-4 pl-3 text-lg text-gray-200 hover:text-gray-50 font-sans border-b border-gray-50 md:hover:bg-transparent md:border-0 md:p-0">
                                <NavLink
                                    to="/prayer"
                                    className={(navData) => {
                                        if (navData.isActive) return 'text-black';
                                        return '';
                                    }}
                                >
                                    {t("PrayerGroups")}
                                </NavLink>
                            </li>
                            <li className="block py-2 pr-4 pl-3 text-lg text-gray-200 border-b font-sans border-white hover:text-gray-50 md:hover:bg-transparent md:border-0 md:p-0">
                                <NavLink
                                    to="/gallery"
                                    className={(navData) => {
                                        if (navData.isActive) return 'text-black';
                                        return '';
                                    }}
                                >
                                    {t("Gallery")}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex px-5 pl-[80%] -mt-8 pb-4 lg:hidden">
                        <button type="button" onClick={handleClick}>
                            {!isOpen ? (
                                <MenuIcon className="w-12 dark:text-dark-text-fill" />
                            ) : (
                                <XIcon className="w-12 dark:text-dark-text-fill" />
                            )}
                        </button>
                    </div>
                    <div className={!open ? 'hidden' : 'w-56 mt-[30%] px-6 shadow  absolute bg-[#FF3D3D] z-10 ml-[40%]'}>
                        <ul className="space-y-3" onClick={handleDropDown}>
                            <li className="font-medium">
                                <h1 className="flex text-white items-center transform transition-colors duration-200">
                                    Dioceses
                                </h1>
                            </li>
                            <hr className="text-white" />
                            <li className="font-medium">
                                <Link to="#link" className="flex text-black hover:text-black items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-white uppercase">
                                    Kigali
                                </Link>
                            </li>
                            <li className="font-medium">
                                <Link to="#link" className="flex text-white hover:text-black items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-white uppercase">
                                    Kabgayi
                                </Link>
                            </li>
                            <li className="font-medium">
                                <Link to="#link" className="flex text-white hover:text-black items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-white uppercase">
                                    Ruhengeri
                                </Link>
                            </li>
                            <li className="font-medium">
                                <Link to="#link" className="flex text-white hover:text-black items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-white uppercase">
                                    Kibungo
                                </Link>
                            </li>
                            <li className="font-medium">
                                <Link to="#link" className="flex text-white hover:text-black items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-white uppercase">
                                    Gikongoro
                                </Link>
                            </li>
                            <li className="font-medium">
                                <Link to="#link" className="flex text-white hover:text-black items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-white uppercase">
                                    Cyangugu
                                </Link>
                            </li>
                            <li className="font-medium">
                                <Link to="#link" className="flex text-white hover:text-black items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-white uppercase">
                                    Byumba
                                </Link>
                            </li>
                            <li className="font-medium">
                                <Link to="#link" className="flex text-white hover:text-black items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-white uppercase">
                                    Butare
                                </Link>
                            </li>
                            <li className="font-medium">
                                <Link to="#link" className="flex text-white hover:text-black items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-white uppercase">
                                    Nyundo
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <ul
                className={
                    !isOpen
                        ? 'hidden'
                        : 'absolute bg-white dark:bg-dark-bg w-1/8 justify-end px-8 m-1 right-0 lg:hidden'
                }
                onClick={handleClick}
            >
                <li className="p-2 w-full mt-2 dark:text-dark-text-fill text-primary">
                    <Link to="/">{t('Home')}</Link>
                </li>
                <li className="p-2 w-full dark:text-dark-text-fill">
                    <Link to="/">
                        {t("Home")}
                    </Link>
                </li>

                <li className="p-2 w-full dark:text-dark-text-fill">
                    <Link to="/news" className="w-full">
                        {t("News")}
                    </Link>
                </li>
                <li className="p-2 w-full dark:text-dark-text-fill">
                    <Link to="/chart" className="w-full">
                        {t("ChartRooms")}
                    </Link>
                </li>
                <li className="p-2 w-full dark:text-dark-text-fill">
                    <Link to="/history" className="w-full">
                        {t("History")}
                    </Link>
                </li>
                <li className="p-2 w-full dark:text-dark-text-fill">
                    <Link to="/gallery" className="w-full">
                        {t("Gallery")}
                    </Link>
                </li>
                <li className="p-2 w-full dark:text-dark-text-fill">
                    <Link to="/register" className="w-full">
                        {t("Register/Login")}
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
