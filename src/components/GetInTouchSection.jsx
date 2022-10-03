import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Zoom } from 'react-reveal';
import { axiosRequest } from '../api';
import { TeamData } from '../dummyData/Data';

const leader_URL = "leader"

const GetInTouchSection = () => {
    const { t } = useTranslation();
    const [Data, setData] = useState([]);
    console.log("dadadada", Data)

    const GetLeader = () => {
        axiosRequest.get(leader_URL)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                if (status !== 'SUCCESS') {
                    setData(data)
                }
                else {
                    setData(data)
                }
            })
            .catch(error => {
                if (error.code !== "ERR_NETWORK") {
                    // Notify(error.response.data.message, "error");
                }
                else {
                    // Notify(error.message, "error");
                }
            })
    }

    useEffect(() => {
        GetLeader();
    }, [])

    return (
        <div className="bg-[#EFEFEF] mx-auto px-4 py-20 md:px-44">
            <Zoom>
                <div className='text-center pb-12'>
                    <h1 className='font-serif font-bold md:text-3xl text-xl uppercase'>{t("GETINTOUCH")}</h1>
                </div>
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {Data.map((item) => (
                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-[20%]" key={item._id}>
                            <article className="overflow-hidden rounded-lg shadow-lg">
                                    <img alt="Placeholder" className="block h-auto w-full object-cover" src={item.image} />
                                <header className="flex flex-col items-left justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg font-serif">
                                        <h1 className="no-underline text-2xl text-black">
                                            {item.fullName}
                                        </h1>
                                    </h1>
                                    <span className="text-lg font-serif">
                                        <h4 className="no-underline text-black">
                                            {item.email}
                                        </h4>
                                    </span>
                                    <span className="text-lg font-serif">
                                        <h3 className="no-underline text-black">
                                            <span>Diocese:</span> {item.diocese}
                                        </h3>
                                    </span>
                                </header>
                                <footer className="flex flex-col items-left justify-between leading-none p-2 md:p-4">
                                    <a href={item.fbLink} target="_blank" rel="noreferrer" className="flex  items-left no-underline hover:underline text-black">
                                        <span className="ml-2 text-sm"> Facebook</span>
                                    </a>
                                    <a href={item.twLink} target="_blank" rel="noreferrer" className="flex  items-left no-underline hover:underline text-black">
                                        <span className="ml-2 text-sm">Twitter</span>
                                    </a>
                                </footer>
                            </article>
                        </div>
                    ))}
                </div>
            </Zoom>
        </div >
    )
}

export default GetInTouchSection
