import React, { useState } from 'react'
import { FaFacebook, FaTwitter, FaInstagramSquare, FaEdit, FaTrash } from 'react-icons/fa'


const History = () => {
  const [createCohortModel, setCreateCohortModel] = useState(false);
  const [deleteCohortModel, setDeleteCohortModel] = useState(false);
  const [showActions, setShowActions] = useState(false)

  const removeModel = () => {
    let newState = !createCohortModel;
    setCreateCohortModel(newState);
  }

  const handleShowActions = () => {
    setShowActions(!showActions)
  }

  const removeDeleteModel = () => {
    let newState = !deleteCohortModel;
    setDeleteCohortModel(newState);
  }

  const data = [
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866572__480.jpg",
      names: "EUCR-Rwanda",
      members: "8000 Members",
      activity: "Pray, Help, etc..."
    },
    {
      id: 2,
      image: "https://cdn.pixabay.com/photo/2016/06/27/22/14/man-1483479__480.jpg",
      names: "EUCR-Rwanda",
      members: "8000 Members",
      activity: "Pray, Help, etc..."
    },
    {
      id: 3,
      image: "https://cdn.pixabay.com/photo/2017/03/01/19/34/man-2109428__480.jpg",
      names: "EUCR-Rwanda",
      members: "8000 Members",
      activity: "Pray, Help, etc..."
    },
    {
      id: 4,
      image: "https://cdn.pixabay.com/photo/2016/03/26/22/13/man-1281562__480.jpg",
      names: "EUCR-Rwanda",
      members: "8000 Members",
      activity: "Pray, Help, etc..."
    }
  ]
  return (
    <>
      {/* =========================== Start:: CreateCohortModel =============================== */}
      <div className={`h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${createCohortModel === true ? 'block' : 'hidden'}`}>
        <div className="bg-white w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
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
                    className="border border-primary rounded outline-none px-5 pb-10font-sans text-xs py-2 w-full"
                    placeholder="name"
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" border border-primary py-2 pb-10rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder="Coordinator"
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className="border border-primary py-2 pb-10rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder="Phase"
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="date"
                    name="name"
                    className="border border-primary py-2 pb-10rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder="StartingDate"
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="date"
                    name="name"
                    className=" border border-primary py-2 pb-10rounded outline-none px-5 font-sans text-xs w-full"
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
        <div className="bg-white w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
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

      <div className="bg-[#F5F5F5] pb-10 min-h-screen lg:ml-44">
        <div className="flex items-left px-7 lg:px-28 pt-14 pb-8">
          <div className="space-x-8">
            <button className="text-white font-serif font-semibold bg-blue-700 hover:bg-transparent border border-blue-700 hover:text-black focus:ring-4 focus:outline-none rounded-lg text-base uppercase px-5 py-2.5 mt-8 text-center mr-3 md:mr-0 cursor-pointer" onClick={removeModel}>History +</button>
          </div>
        </div>
        <div className="px-3 md:px-28">
          <div className="bg-white shadow-lg px-5 py-8 rounded-md w-full  lg:w-full ">
            <div className=" flex items-center justify-between pb-6">
              <div>
                <h2 className="font-sans text-xl text-gray-700 font-semibold px-1 hover:underline">Passed events</h2>
              </div>
            </div>
            <div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block w-full lg:min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th
                          className="font-serif px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                          Image
                        </th>
                        <th
                          className="font-serif p-6 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                          Community Name
                        </th>
                        <th
                          className="font-serif px-5  border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                          members
                        </th>
                        <th
                          className="font-serif px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                          Activities
                        </th>
                        <th
                          className="font-serif px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                          Social media
                        </th>
                        <th
                          className="font-serif px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item) => (
                        <tr key={item.id}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <img className="w-10 h-10 rounded-full shadow-lg" src={item.image} alt="Bonnie" />
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              <div>
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {item.names}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{item.members}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {item.activity}
                            </p>
                          </td>

                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className='flex'>
                              <div className="cursor-pointer mr-4 text-blue-800">
                                <FaFacebook />
                              </div>
                              <div className="cursor-pointer mr-4 text-blue-800">
                                <FaTwitter />
                              </div>
                              <div className="cursor-pointer mr-4 text-blue-800">
                                <FaInstagramSquare />
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 text-gray-500 cursor-pointer bg-white text-lg">
                            <div className='flex'>
                              <div className="cursor-pointer mr-2 text-blue-700" onClick={() => { handleShowActions() }}>
                                <FaEdit />
                              </div>
                              <div className="cursor-pointer text-[#FF3D3D]" onClick={() => { handleShowActions() }}>
                                <FaTrash />
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default History
