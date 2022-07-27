import React from 'react'

const GetInTouchSection = () => {
  const data=[
    {
        id:1,
        image:"https://cdn.pixabay.com/photo/2022/07/04/04/37/musician-7300353__340.jpg",
        title:"Community name",
        title1:"Community Member",
        title2:"Diocese",
        name1:"facebook",
        name2:"Twitter",
    },
    {
        id:2,
        image:"https://cdn.pixabay.com/photo/2022/05/22/16/34/woman-7213852__340.jpg",
        title:"Community name",
        title1:"Community Member",
        title2:"Diocese",
        name1:"facebook",
        name2:"Twitter",
    },
    {
        id:3,
        image:"https://cdn.pixabay.com/photo/2016/10/15/05/02/girls-1741925__340.jpg",
        title:"Community name",
        title1:"Community Member",
        title2:"Diocese",
        name1:"facebook",
        name2:"Twitter",
    },
    {
        id:4,
        image:"https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849821__480.jpg",
        title:"Community name",
        title1:"Community Member",
        title2:"Diocese",
        name1:"facebook",
        name2:"Twitter",
    },
    {
        id:5,
        image:"https://cdn.pixabay.com/photo/2018/04/01/17/00/mother-and-daughter-3281388__480.jpg",
        title:"Community name",
        title1:"Community Member",
        title2:"Diocese",
        name1:"facebook",
        name2:"Twitter",
    }
]
return (
    <div className="bg-[#EFEFEF] mx-auto px-4 py-20 md:px-44">
        <div className='text-center pb-12'>
            <h1 className='font-serif font-bold sm:text-3xl uppercase'>GET IN TOUCH WITH OUR TEAM</h1>
        </div>
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {data.map((item)=>(
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4" key={item.id}>
                <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                        <img alt="Placeholder" className="block h-auto w-full" src={item.image} />
                    </a>
                    <header className="flex flex-col items-left justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg font-serif">
                            <a className="no-underline hover:underline text-black" href="#">
                                {item.title}
                            </a>
                        </h1>
                        <span className="text-lg font-serif">
                            <a className="no-underline hover:underline text-black" href="#">
                                {item.title1}
                            </a>
                        </span>
                        <span className="text-lg font-serif">
                            <a className="no-underline hover:underline text-black" href="#">
                                {item.title2}
                            </a>
                        </span>
                    </header>
                    <footer className="flex flex-col items-left justify-between leading-none p-2 md:p-4">
                        <a className="flex  items-left no-underline hover:underline text-black" href="#">
                            <span className="ml-2 text-sm">
                                {item.name1}
                            </span>
                        </a>
                        <a className="flex  items-left no-underline hover:underline text-black" href="#">
                            <span className="ml-2 text-sm">
                                {item.name2}
                            </span>
                        </a>
                    </footer>
                </article>
            </div>
            ))}
            

        </div>
    </div>
)
}

export default GetInTouchSection
