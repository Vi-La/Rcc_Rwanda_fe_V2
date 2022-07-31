import React from 'react'
import { useTranslation } from 'react-i18next';
import Zoom from 'react-reveal/Zoom';

const CommunitySection = () => {
    const { t } = useTranslation();
    const data=[
        {
            id:1,
            image:"https://cdn.pixabay.com/photo/2022/07/04/04/37/musician-7300353__340.jpg",
            title:"Community name",
            name:"Diocese ....",
            profile:"https://picsum.photos/32/32/?random"
        },
        {
            id:2,
            image:"https://cdn.pixabay.com/photo/2022/05/22/16/34/woman-7213852__340.jpg",
            title:"Community name",
            name:"Diocese ....",
            profile:"https://picsum.photos/32/32/?random"
        },
        {
            id:3,
            image:"https://cdn.pixabay.com/photo/2016/10/15/05/02/girls-1741925__340.jpg",
            title:"Community name",
            name:"Diocese ....",
            profile:"https://picsum.photos/32/32/?random"
        },
        {
            id:4,
            image:"https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849821__480.jpg",
            title:"Community name",
            name:"Diocese ....",
            profile:"https://picsum.photos/32/32/?random"
        },
        {
            id:5,
            image:"https://cdn.pixabay.com/photo/2018/04/01/17/00/mother-and-daughter-3281388__480.jpg",
            title:"Community name",
            name:"Diocese ....",
            profile:"https://picsum.photos/32/32/?random"
        },
        {
            id:6,
            image:"https://cdn.pixabay.com/photo/2022/07/08/01/17/mother-7308238__480.jpg",
            title:"Community name",
            name:"Diocese ....",
            profile:"https://picsum.photos/32/32/?random"
        },
        {
            id:7,
            image:"https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849821__480.jpg",
            title:"Community name",
            name:"Diocese ....",
            profile:"https://picsum.photos/32/32/?random"
        },
        {
            id:8,
            image:"https://cdn.pixabay.com/photo/2018/04/01/17/00/mother-and-daughter-3281388__480.jpg",
            title:"Community name",
            name:"Diocese ....",
            profile:"https://picsum.photos/32/32/?random"
        },
        {
            id:9,
            image:"https://cdn.pixabay.com/photo/2022/07/08/01/17/mother-7308238__480.jpg",
            title:"Community name",
            name:"Diocese ....",
            profile:"https://picsum.photos/32/32/?random"
        },
    ]
    return (
        <div className="container my-12 mx-auto px-4 py-8 md:px-24">
            <div className='text-center pb-12'>
                <h1 className='font-serif font-bold sm:text-3xl uppercase'>{t("OURCOMMUNITY")}</h1>
            </div>
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {data.map((item)=>(
                    <Zoom>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4" key={item.id}>
                    <article className="overflow-hidden rounded-lg shadow-lg">
                        <a href="#">
                            <img alt="Placeholder" className="block h-auto w-full" src={item.image} />
                        </a>
                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 className="text-lg">
                                <a className="no-underline hover:underline text-black" href="#">
                                    {item.title}
                                </a>
                            </h1>
                        </header>
                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-black" href="#">
                                <img alt="Placeholder" className="block rounded-full" src={item.profile} />
                                <p className="ml-2 text-sm">
                                    {item.name}
                                </p>
                            </a>
                        </footer>
                    </article>
                </div>
                </Zoom>
                ))}
                

            </div>
        </div>
    )
}

export default CommunitySection
