import React, { useState } from 'react'
import { FaEllipsisV } from 'react-icons/fa'


const Dashboard = () => {
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
  return (
    <>
    {/* =========================== Start:: CreateCohortModel =============================== */}
    <div className={`h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${createCohortModel === true ? 'block' : 'hidden'}`}>
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

    <div className="bg-[#F5F5F5] dark:bg-dark-frame-bg  min-h-screen lg:ml-44">
      {/* <div className="flex items-left px-7 lg:px-28 pt-20 pb-8">
        <div className="space-x-8">
          <button className="text-white font-serif font-semibold bg-[#FF3D3D] hover:bg-transparent border border-[#FF3D3D] hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base uppercase px-5 py-2.5 mt-8 text-center mr-3 md:mr-0 uppercase cursor-pointer" onClick={removeModel}>Cohort +</button>
        </div>
      </div> */}
      <div className="px-3 md:px-28">
        {/* <div className="bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-full  lg:w-full ">
          <div className=" flex items-center justify-between pb-6">
            <div>
              <h2 className="font-sans font-semibold">CohortList</h2>
            </div>
          </div>
          <div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block w-full lg:min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        className="p-6 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                        name
                      </th>
                      <th
                        className="px-5  border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                        Coordinator
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                        Phase
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                        StartingDate
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                        ClosingDate
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                        <div className="flex items-center">
                          <div>
                            <p className="text-gray-900 whitespace-no-wrap">
                              Cohort 5
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">john doe</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Core Concept
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          1st Jan 2022
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          11th Dec 2022
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 text-gray-500 cursor-pointer bg-white dark:bg-dark-bg text-lg">
                        <div className='flex relative flex-row '>
                          <div className="cursor-pointer" onClick={() => { handleShowActions() }}>
                            <FaEllipsisV />
                          </div>
                          {showActions ? <div className='absolute top-0 bg-white z-20 dark:bg-dark-bg text-gray-500 ml-4 flex justify-center items-center border rounded dark:border-white'>
                            <div className=' px-3 cursor-pointer'>
                              <ul>
                                <li className='hover:text-primary'>
                                  Edit
                                </li>
                                <li className='hover:text-primary' onClick={() => removeDeleteModel()}>
                                  Delete
                                </li>
                              </ul>
                            </div>
                          </div> : ""}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                        <div className="flex items-center">
                          <div>
                            <p className="text-gray-900 whitespace-no-wrap">
                              Cohort 6
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">john doe</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Core Concept
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          1st Jan 2022
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          11th Dec 2022
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 text-gray-500 cursor-pointer bg-gray-100 text-lg">
                        <FaEllipsisV />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                        <div className="flex items-center">
                          <div>
                            <p className="text-gray-900 whitespace-no-wrap">
                              Cohort 7
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">john doe</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Core Concept
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          1st Jan 2022
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          11th Dec 2022
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 text-gray-500 cursor-pointer bg-white dark:bg-dark-bg text-lg">
                        <FaEllipsisV />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                        <div className="flex items-center">
                          <div>
                            <p className="text-gray-900 whitespace-no-wrap">
                              Cohort 8
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">john doe</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Core Concept
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          1st Jan 2022
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          11th Dec 2022
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 text-gray-500 cursor-pointer bg-gray-100 text-lg">
                        <FaEllipsisV />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                        <div className="flex items-center">
                          <div>
                            <p className="text-gray-900 whitespace-no-wrap">
                              Cohort 9
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">john doe</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Core Concept
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          1st Jan 2022
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          11th Dec 2022
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 text-gray-500 cursor-pointer bg-white dark:bg-dark-bg text-lg">
                        <FaEllipsisV />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> */}
        <h1 className='font-serif text-7xl pl-24 pt-24'>Main board isComming soon...</h1>
      </div>
    </div>
  </>
  )
}

export default Dashboard
