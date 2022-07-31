import React from 'react'
import { useTranslation } from 'react-i18next';
import Zoom from 'react-reveal/Zoom';


const Testimonial = () => {
    const { t } = useTranslation();
    const data = [
        {
            id:1,
            image:"https://cdn.pixabay.com/photo/2017/10/18/21/36/portrait-2865605__480.jpg",
            content:"You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
            name:"Darrell Steward",
            title:"Software Engineer"
        },
        {
            id:2,
            image:"https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072908__480.jpg",
            content:"You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
            name:"Darrell Steward",
            title:"Product Designer"
        },
        {
            id:3,
            image:"https://cdn.pixabay.com/photo/2019/09/20/13/10/indian-women-4491672__480.jpg",
            content:"Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
            name:"Darrell Steward",
            title:"Software Engineer"
        },
        {
            id:4,
            image:"https://cdn.pixabay.com/photo/2016/11/14/07/25/portrait-1822841__480.jpg",
            content:"You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
            name:"Darrell Steward",
            title:"Product Designer"
        },
        {
            id:5,
            image:"https://cdn.pixabay.com/photo/2020/03/26/09/08/girl-4969690__340.jpg",
            content:"Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
            name:"Darrell Steward",
            title:"Software Engineer"
        },
    ]
    return (
        <section className="testimonials relative py-20 min-h-fit overflow-hidden">
            <div className="container mx-auto px-24 h-full">
                <h2 className="mb-5 max-w-2xl mx-auto font-serif font-bold text-center text-6xl sm:text-3xl text-white pb-16 uppercase">{t("TESTIMONIALS")}</h2>
                <div className="flex flex-wrap -m-5">
                    {data.map((item)=>(
                        <Zoom>
                    <div className="w-full md:w-1/3 p-5" key={item.id}>
                        <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000" >
                            <div className="h-full px-7 py-8 bg-white rounded-lg">
                                <img className="mb-8 h-20 w-20 rounded-full" src={item.image} alt="" />
                                <p className="mb-8 text-lg text-gray-900">&ldquo;{item.content}&rdquo;</p>
                                <h3 className="mb-1.5 font-sans font-bold text-lg text-gray-900">{item.name}</h3>
                                <p className="text-sm text-gray-600">{item.title}</p>
                            </div>
                        </div>
                    </div>
                    </Zoom>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonial
