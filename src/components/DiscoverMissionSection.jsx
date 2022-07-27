import React from 'react'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';


const DiscoverMissionSection = () => {
  const { t } = useTranslation();
    const data=[
        {
            id:1,
            number:1,
            title: "Jesus Christ",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus libero culpa quos sunt in, ea deleniti."
        },
        {
            id:2,
            number:2,
            title: "Jesus Christ",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus libero culpa quos sunt in, ea deleniti."
        },
        {
            id:3,
            number:3,
            title: "Jesus Christ",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus libero culpa quos sunt in, ea deleniti."
        },
        {
            id:4,
            number:4,
            title: "Jesus Christ",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus libero culpa quos sunt in, ea deleniti."
        }
    ]
  return (
    <div className='min-h-fit py-20 px-44 hero'>
        <Zoom>
      <h1 className='font-serif font-bold sm:text-3xl uppercase text-center text-white pb-12'>{t("DiscoverMession")}</h1>

        </Zoom>
        <Fade right>
        <p className='text-lg text-left text-white py-4 '>
     {t("missionMessage")}
      </p>
        </Fade>
     
      <div className='flex text-white'>
          {data.map((item)=>(
              <Fade left>
          <div className='text-left w-1/4   py-6' key={item.id}>
              <h1>{item.number}</h1>
              <h1 className='font-sans  text-2xl py-4'>{item.title}</h1>
              <p className='text-left '>{item.content}</p>
          </div>
          </Fade>
          ))}
          
      </div>
    </div>
  )
}

export default DiscoverMissionSection
