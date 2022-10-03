import React, { useEffect, useState } from 'react'
import Slider from './Slider/Slider'
import { useTranslation } from 'react-i18next';
import { Fade, Zoom } from 'react-reveal';
import { axiosRequest } from '../api';
const Message_URL = "lesson"

const Home = () => {
    const { t } = useTranslation();
    const [Data, setData] = useState([]);

    const GetLesson = () => {
        axiosRequest.get(Message_URL)
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
        GetLesson();
      }, [])
    return (

        <div className='block xl:flex'>
            <div className='xl:w-3/5 w-[98%]'>
                <Slider />
            </div>
            <div className='w-full  xl:w-2/5 justify-center text-2xl xl:py-5 items-center uppercase text-center'>
                <Zoom>
                    <h1 className='font-serif font-bold'>{t("Lessonoftheday")}</h1>
                </Zoom>
                {Data.slice(0,1).map((item)=>(
                <div className='py-4' key={item._id}>
                    <img className='xl:px-4 md:px-44 px-6 object-cover h-[400px] w-[600px]' src={item.image} alt="slideImage" />
                    <Fade right>
                        <h5 className='text-lg xl:text-left text-start xl:p-4 p-6 font-sans'>
                           {item.title}
                        </h5>
                    </Fade>
                    <Fade left>
                        <p className='text-sm text-left xl:px-4 px-6'>
                            {item.description}
                        </p>
                    </Fade>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Home
