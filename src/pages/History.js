import React from 'react'
import Navbar from '../components/Navbar'

const History = () => {
    return (
        <>
            <Navbar />
            <div className='justify-center w-screen block'>
                <div className="hidden xl:flex text-center pt-6">
                    <div className="pb-8 animate-marquee">
                        <span className="mx-4 text-4xl">History of Charismatique in Rwanda from 1998 until now.</span>
                    </div>
                </div>
                <div className='block xl:flex p-12'>
                    <div className="flex-none xl:block xl:w-32 flex w-4 pb-8 mr-4">
                        <div className='flex text-center p-2 text-[#FF3D3D] cursor-pointer'>2022</div>
                        <div className='flex text-center p-2 cursor-pointer'>2021</div>
                        <div className='flex text-center p-2 cursor-pointer'>2020</div>
                        <div className='flex text-center p-2 cursor-pointer'>1999</div>
                        <div className='flex text-center p-2 cursor-pointer'>1998</div>
                    </div>
                    <div className="flex-initial w-full mr-6">
                        <div className=" flex items-center pb-12">
                            <div className="text-black py-1 md:px-6 md:mx-2">
                                <h4 className="text-xl font-semibold">Kigali Diocese</h4>
                                <hr className="text-gray-600" />
                                <p className="text-sm pt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat.
                                </p>
                            </div>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-2xl pb-4 uppercase'>Paruwasi</h1>
                            <div className="overflow-x-auto relative py-1 md:px-6 md:mx-2">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="py-3 px-6">
                                                Amazina
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                Umutagatifu yaragijwe
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                Padiri mukuru
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                Aderesi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b bg-gray-300 border-gray-900">
                                            <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                                RUHANGO
                                            </th>
                                            <td className="py-4 px-6 text-black text-sm">
                                                Jésus Miséricordieux Pallotins
                                            </td>
                                            <td className="py-4 px-6 text-black text-sm">
                                                Père Gasore Janvier, S.A.C
                                            </td>
                                            <td className="py-4 px-6 text-black text-sm">
                                                0789356199 hihigasore@gmail.com
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-gray-300 border-gray-900">
                                            <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                                NZUKI
                                            </th>
                                            <td className="py-4 px-6 text-black text-sm">
                                                St Jean Clergé diocésain
                                            </td>
                                            <td className="py-4 px-6 text-black text-sm">
                                                Abbé Hildebrand Karangwa
                                            </td>
                                            <td className="py-4 px-6 text-black text-sm">
                                                0788632388/0782188800
                                                karhildebrand@yahoo.fr
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-gray-300 border-gray-900">
                                            <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                                NYARUSANGE
                                            </th>
                                            <td className="py-4 px-6 text-black text-sm">
                                                St Joseph Clergé diocésain
                                            </td>
                                            <td className="py-4 px-6 text-black text-sm">
                                                Abbé Mathias Hategekimana
                                            </td>
                                            <td className="py-4 px-6 text-black text-sm">
                                                0788409300/0728409300
                                                hamath2001@yahoo.fr
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-gray-300 border-gray-900">
                                            <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                                NYABINYENGA
                                            </th>
                                            <td className="py-4 px-6 text-black text-sm">
                                                Notre Dame de Kibeho Clergé diocésain
                                            </td>
                                            <td className="py-4 px-6 text-black text-sm">
                                                Abbé Victor Amerika
                                            </td>
                                            <td className="py-4 px-6 text-black text-sm">
                                                0788548322 /0728548322
                                                Amevicky13@yahoo.fr
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-gray-300 border-gray-900">
                                            <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                                NYABINONI
                                            </th>
                                            <td className="py-4 px-6 text-black text-sm">
                                                Marie Mère du Verbe Clergé diocésain
                                            </td>
                                            <td className="py-4 px-6 text-black text-sm">
                                                Abbé Bizimana Jean Bosco
                                            </td>
                                            <td className="py-4 px-6 text-black text-sm">
                                                0788560098/0727971846
                                                boscobio@yahoo.fr
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="flex-initial w-1/2">
                        <img className='object-cover' src="https://eglisecatholiquerwanda.org/kn/local/cache-vignettes/L500xH667/arton10-75b5e.jpg?1642441850" alt="historyImage" />
                        <div className='text-center py-2 text-sm'>
                            <h1>Myr Smaragde MBONYINTEGE</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default History
