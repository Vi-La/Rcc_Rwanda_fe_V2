import React from 'react'

const DiscoverMissionSection = () => {
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
      <h1 className='font-serif font-bold sm:text-3xl uppercase text-center text-white pb-12'>Discover our Mession</h1>
      <p className='text-lg text-left text-white py-4 '>
      We are The Rwandan Charismatics,it's very greatfull Join us right now,
          are you looking for the place where you can find charismatic units?
          Don't worry! here we go!, this is where you are looking for!. in God
          we believe, in Jesus we trust, Holy spirit our pariticularity and we
          can't also forget Holy Mary. you are most welcome.you can't realy
          understannd how very exciting we are to have you joining us to pray!.
          let's get into action These are the steps.
      </p>
      <div className='flex text-white'>
          {data.map((item)=>(
          <div className='text-left w-1/4   py-6' key={item.id}>
              <h1>{item.number}</h1>
              <h1 className='font-sans  text-2xl py-4'>{item.title}</h1>
              <p className='text-left '>{item.content}</p>
          </div>
          ))}
          
      </div>
    </div>
  )
}

export default DiscoverMissionSection
