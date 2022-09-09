import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const News = () => {
  const [createCohortModel, setCreateCohortModel] = useState(false);
  const [deleteCohortModel, setDeleteCohortModel] = useState(false);

  const removeModel = () => {
    let newState = !createCohortModel;
    setCreateCohortModel(newState);
  }
  const removeDeleteModel = () => {
    let newState = !deleteCohortModel;
    setDeleteCohortModel(newState);
  }

  const data =[
    {
      id:1,
      image:"https://cdn.pixabay.com/photo/2022/07/16/15/34/kid-7325370__340.jpg",
      tittle:"Bonnie Green",
      content:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },
    {
      id:2,
      image:"https://cdn.pixabay.com/photo/2022/07/08/01/17/mother-7308238__340.jpg",
      tittle:"Bonnie Green",
      content:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },
    {
      id:3,
      image:"https://cdn.pixabay.com/photo/2022/05/22/16/34/woman-7213852__340.jpg",
      tittle:"Bonnie Green",
      content:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },
    {
      id:4,
      image:"https://cdn.pixabay.com/photo/2012/04/24/14/21/car-40241__480.png",
      tittle:"Bonnie Green",
      content:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },
    {
      id:5,
      image:"https://cdn.pixabay.com/photo/2019/09/04/02/52/forest-4450611__340.jpg",
      tittle:"Bonnie Green",
      content:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },
  ]
  return (
    <>
      {/* =========================== Start:: CreateCohortModel =============================== */}
      <div className={`min-h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${createCohortModel === true ? 'block' : 'hidden'}`}>
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className='font-bold text-sm text-center w-11/12 uppercase'>
              AddCohort
            </h3>
            <hr className=' bg-primary border-b my-3 w-full' />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8" >

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className="border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg font-sans text-xs py-2 w-full"
                    placeholder="name"
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" border border-primary py-2 dark:bg-dark-frame-bg rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder="Coordinator"
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className="border border-primary py-2 dark:bg-dark-frame-bg rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder="Phase"
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="date"
                    name="name"
                    className="border border-primary py-2 dark:bg-dark-frame-bg rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder="StartingDate"
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="date"
                    name="name"
                    className=" border border-primary py-2 dark:bg-dark-frame-bg rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder="ClosingDate"

                  />
                </div>
              </div>
              <div className="w-full flex justify-between">

                <button className='py-2 w-[40%] md:w-1/3 bg-[#31699C] rounded font-sans text-sm text-white' data-testid="remove" onClick={(e) => removeModel()}>Cancel</button>
                <button className='text-white py-2 w-[40%] md:w-1/3 bg-primary rounded'>Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  CreateCohortModel =============================== */}

      {/* =========================== Start::  delete Session Model =============================== */}
      <div className={`min-h-full w-screen z-30 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${deleteCohortModel === true ? 'block' : 'hidden'}`}>
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className='font-bold text-sm text-center w-11/12'>
              DeleteCohort
            </h3>
            <hr className=' bg-primary border-b my-3 w-full' />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8" >
              <div>
                <h2 className='text-base m-4'>reallyRemoveCohort</h2>
              </div>
              <div className="w-full flex justify-between">
                <button className='py-2 w-[40%] md:w-1/3 bg-[#31699C] rounded font-sans text-sm text-white' data-testid="delete" onClick={(e) => removeDeleteModel()}>Cancel</button>
                <button className='text-white py-2 w-[40%] md:w-1/3 bg-red-700 rounded'>Delete</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  delete Session Model =============================== */}

      <div className="bg-[#F5F5F5] min-h-screen pb-10 lg:ml-44">
        <div className="flex items-left px-7 lg:px-28 pt-14 pb-8">
          <div className="space-x-8">
            <button className="text-white font-serif font-semibold bg-blue-700 hover:bg-transparent border border-blue-700 hover:text-black focus:ring-4 focus:outline-none  font-medium rounded-lg text-base uppercase px-5 py-2.5 mt-8 text-center mr-3 md:mr-0 uppercase cursor-pointer" onClick={removeModel}>news +</button>
          </div>
        </div>
        <div className="px-3 md:px-28">
          <div className="bg-white shadow-lg px-5 py-8 rounded-md w-full lg:w-full ">
            <div className=" flex items-center justify-between pb-6">
              <div>
                <h2 className="font-sans text-xl text-gray-700 font-semibold px-10 hover:underline">Available News</h2>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap ml-10 overflow-x-auto">
                {data.map((item)=>(
                <div className="w-2/5 bg-white rounded-lg border border-gray-200 mr-14 mb-4 shadow-md" key={item.id}>
                  <div className="flex flex-col items-center pt-6 pb-6">
                    <img className="mb-3 h-44 rounded-lg shadow-lg" src={item.image} alt="Bonniimage" />
                    <h5 className="py-4 text-2xl font-medium font-serif">{item.tittle}</h5>
                    <span className="text-sm text-gray-800 text-left px-4">{item.content}</span>
                    <div className="flex mt-4 space-x-3 lg:mt-6">
                      <Link to="#link" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center hover:bg-transparent hover:text-black border border-blue-700 text-white bg-blue-700 rounded-lg focus:ring-4 focus:outline-none ">Edit</Link>
                      <Link to="#link" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border border-blue-700 hover:border-none hover:text-white hover:bg-[#FF3D3D] focus:ring-4 focus:outline-none focus:ring-gray-200">Delete</Link>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default News
