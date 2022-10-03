import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { axiosRequest } from '../api';
import Zoom from 'react-reveal/Zoom';
const comm_URL = "community"

const CommunitySection = () => {
    const { t } = useTranslation();
    const [Data, setData] = useState([]);

    console.log("<<<>>>", Data)

    const GetCommunity = () => {
        axiosRequest.get(comm_URL)
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
                    //   Notify(error.message, "error");
                }
            })
    }

    useEffect(() => {
        GetCommunity();
    }, [])

    return (
        <div className="container my-12 mx-auto px-4 py-8 md:px-24">
            <Zoom>
                <div className='text-center pb-12'>
                    <h1 className='font-serif font-bold xl:text-3xl text-xl uppercase'>{t("OURCOMMUNITY")}</h1>
                </div>
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {Data?.map((item) => (
                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4" key={item._id}>
                            <article className="overflow-hidden rounded-lg shadow-lg">
                                <a href="#link">
                                    <img alt="Placeholder" className="block h-auto w-full object-cover" src={item.image} />
                                </a>
                                <header className="block flex-wrap items-center justify-between leading-tight p-2 md:p-4">
                                    <span className="text-lg font-serif">
                                        <a className="no-underline hover:underline text-black text-2xl" href="#j">
                                            {item.name}
                                        </a>
                                    </span>
                                    <h1 className="text-lg">
                                        <a className="no-underline hover:underline text-black" href="#link">
                                            {item.diocese}
                                        </a>
                                    </h1>
                                    <span className="text-lg font-serif">
                                        <a className="no-underline hover:underline text-black" href="#jk">
                                            {item.member}
                                        </a>
                                    </span>
                                </header>
                                <footer className="flex flex-col items-left justify-between leading-none p-2 md:p-4">
                                    <div className="flex  items-left no-underline hover:underline text-black">
                                        <a href={item.fbLink}> <span className="ml-2 text-sm">Facebook</span></a>
                                    </div>
                                    <div className="flex  items-left no-underline hover:underline text-black" >
                                        <a href={item.twLink}> <span className="ml-2 text-sm">Twitter</span></a>
                                    </div>
                                </footer>
                            </article>
                        </div>
                    ))}
                </div>
            </Zoom>
        </div>
    )
}

export default CommunitySection
