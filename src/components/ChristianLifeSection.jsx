import React from 'react'
import { useTranslation } from 'react-i18next';
import { Zoom } from 'react-reveal';

export default function ChristianLifeSection() {
  const { t } = useTranslation();
  return (
    <div className='xl:px-44 px-10 text-center py-20'>
      <Zoom>
        <h1 className='pb-12 md:text-3xl text-xl font-serif uppercase font-bold'> {t("CHRISTIANLIFE")} </h1>
      </Zoom>
      <p className='text-left text-lg'>{t("message")}</p>
      <button
        type="button"
        className="text-white font-semibold bg-[#FF3D3D] hover:bg-transparent border border-[#FF3D3D] hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-base px-5 py-2.5 mt-8 text-center mr-3 md:mr-0 uppercase">
        {t("Register")}
      </button>
    </div>
  )
}
