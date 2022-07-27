import React, { useEffect, useRef } from 'react'
import Logo from './../assets/logo.png'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import getLanguage from './../utils/getLanguage';

const FooterSection = () => {
    const { t } = useTranslation();
    const lan = getLanguage();
    const lanRef = useRef();

    const userLang = window.navigator.language;

    const handleLanChange =  (e)=> {
        const { value } = e.target;
        i18next.changeLanguage(value);
    };
    useEffect(() => {
        if (lanRef.current) {
            lanRef.current.value = lan;
        }
    }, []);
    return (
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl">
                <div className="md:flex md:justify-around">
                    <div className="mb-6 md:mb-0 px-20">
                        <a href="https://" className="flex items-center">
                            <img src={Logo} className="w-20 rounded h-20 mr-3" alt="Logo" />
                            <span className="self-center text-base font-semibold whitespace-nowrap text-white">RWANDA CHARISMATIQUE</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white font-serif">Resources</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="https://" className="hover:underline font-sans">Flowbite</a>
                                </li>
                                <li>
                                    <a href="https://" className="hover:underline font-sans">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white font-serif">Follow us</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="https://" className="hover:underline font-sans">Github</a>
                                </li>
                                <li>
                                    <a href="https://" className="hover:underline font-sans">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white font-serif">{t("Legal")}</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#privacy" className="hover:underline font-sans">{t("PrivacyPolicy")}</a>
                                </li>
                                <li>
                                    <a href="#terms" className="hover:underline font-sans">{t("TermsConditions")}</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <li className="flex flex-rows items-center">
                                <h2 className="mb-16 -mr-24 text-sm font-semibold text-white uppercase font-serif">{t("Languages")}</h2>
                                <select
                                    defaultValue={userLang}
                                    ref={lanRef}
                                    onChange={(e) => handleLanChange(e)}
                                    className="bg-white border px-2 h-8 rounded-md text-xs md:text-sm text-gray-600 outline-none"
                                >
                                    <option value="en">English</option>
                                    <option value="fr">Français</option>
                                    <option value="kn">Ikinyarwanda</option>
                                </select>
                            </li>
                            {/* <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white font-serif">Languages</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#english" className="hover:underline font-sans">English</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#french" className="hover:underline font-sans">French</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#kinya" className="hover:underline font-sans">Kinyarwanda</a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-center">
                    <span
                        className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        ©
                        {' '}
                        {new Date().getFullYear()}
                        {' '}
                        <a
                            href="https://.com"
                            className="hover:underline lowercase">
                            rwanda_CHARISMATIQUE
                        </a>.
                        {t("AllRightsReserved")}
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection
