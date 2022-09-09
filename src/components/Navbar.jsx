import React from 'react'
import Logo from './../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Navbar = () => {
    const { t } = useTranslation();
    return (
        <div>
            <nav className="bg-[#FF3D3D] border-gray-200 px-2 sm:px-4 py-4">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/">
                        <img src={Logo} className="mr-3 h-6 sm:h-12" alt="Logo" />
                    </Link>
                    <div className="flex md:order-2">
                        <button
                            type="button"
                            className="text-white bg-transparent border focus:ring-4 focus:outline-none font-sans focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 uppercase">
                            <Link to="/register">{t("Register/Login")}</Link>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
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
                                >
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
                </div>
            </nav>
        </div>
    )
}

export default Navbar
