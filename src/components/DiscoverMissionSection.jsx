import React from 'react'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';
import { MissionData } from '../dummyData/Data';


const DiscoverMissionSection = () => {
  const { t } = useTranslation();
  return (
    <div className='min-h-fit py-20 xl:px-44 md:px-20 px-6 hero'>
      <Zoom>
        <h1 className='font-serif font-bold md:text-3xl text-xl uppercase text-center text-white pb-12'>{t("DiscoverMession")}</h1>
      </Zoom>
      <Fade right>
        <p className='text-lg text-left text-white py-4 '>
          {t("missionMessage")}
        </p>
      </Fade>
      <Fade left>
        <div className='block xl:flex text-white'>
          {MissionData.map((item) => (
            <div className='text-left w-full xl:w-1/4 py-6' key={item.id}>
              <h1>{item.number}</h1>
              <h1 className='font-sans text-2xl py-4'>{item.title}</h1>
              <p className='text-left'>{item.content}</p>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  )
}

export default DiscoverMissionSection
