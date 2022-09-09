import React from 'react'
import Slider from './Slider/Slider'
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();
    return (
        
        <div className='flex'>
            <div className='w-3/5'>
        <Slider />
            </div>
            <div className='w-2/5 justify-center text-2xl py-5 items-center uppercase text-center'>
                <h1 className='font-serif font-bold'>{t("Lessonoftheday")}</h1>
                <div className='py-4'>
                    <img className='px-4' src="https://cdn.pixabay.com/photo/2022/07/08/01/17/mother-7308238__340.jpg" alt="" />
                    <h5 className='text-lg text-left p-4 font-sans'>
                        Pixabay is a vibrant community of creatives,sharing copyright free images, videos and music.All contents are released under the Pixabay License,which makes them safe to use without asking for permission
                        </h5>
                    <p className='text-sm text-left px-4'>
                        In publishing and graphic design, Lorem ipsum is a 
                        placeholder text commonly used to demonstrate the 
                        visual form of a document or a typeface without relying on 
                        meaningful content. Lorem ipsum may be used as a placeholder before 
                        final copy is available.
                        In publishing and graphic design, Lorem ipsum is a 
                        placeholder text commonly used to demonstrate the
                        
                        </p>
                </div>
            </div>
        </div>
        
    )
}

export default Home
