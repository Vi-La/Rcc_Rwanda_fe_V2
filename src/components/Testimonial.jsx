import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { TestimonialData } from '../dummyData/Data';
import Zoom from 'react-reveal/Zoom';
import { useState } from 'react';
import { axiosRequest } from '../api/index'

const testmonialURL = 'testimonial'


const Testimonial = () => {
    const { t } = useTranslation();

    const [loading, setLoading] = useState(false)
    const [Data, setData] = useState([]);

    const GetTestimonial = () => {
        setLoading(true)
        axiosRequest.get(testmonialURL)
            .then(response => {
                setLoading(false)
                const result = response.data.data;
                setData(result)

            })
            .catch(error => {
                setLoading(false)
                console.log(error.message, "error");
            })
    }

    useEffect(() => {
        GetTestimonial();
    }, [])

    return (
        <section className="testimonials relative py-20 min-h-fit overflow-hidden">
            <div className="container mx-auto xl:px-24 px-4 h-full">
                <Zoom>
                    <h2 className="mb-5 max-w-2xl mx-auto font-serif font-bold text-center md:text-3xl text-lg sm:text-3xl text-white pb-16 uppercase">{t("TESTIMONIALS")}</h2>
                    <div className="flex flex-wrap -m-5">
                        {Data.map((item) => (
                            <div className="w-full md:w-1/3 p-5" key={item._id}>
                                <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000" >
                                    <div className="h-full px-7 w-full py-8 bg-white rounded-lg">
                                        <img className="mb-8 h-20 w-20 rounded-full object-cover" src={item.image} alt="tesimonialImage" />
                                        <p className="mb-8 text-lg text-gray-900">&ldquo;{item.message}&rdquo;</p>
                                        <h3 className="mb-1.5 font-sans font-bold text-lg text-gray-900">{item.name}</h3>
                                        <p className="text-sm text-gray-600">{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Zoom>
            </div>
        </section>
    )
}

export default Testimonial
