import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { GiBookmarklet } from 'react-icons/gi'
import { ToastContainer } from 'react-toastify';
import { axiosRequest } from '../api/index';
import Notify from "../functions/Notify";
const Message_URL = "message"


const Messages = () => {
  const [deleMessageModel, setDeleMESSAGEModel] = useState(false);
  const [viewModel, setViewModel] = useState(false);
  const [loading, setLoading] = useState(false)
  const [Delete, setDelete] = useState(false)
  const [RowData, SetRowData] = useState([])
  const [Data, setData] = useState([]);
  const [id, setId] = useState("");

  console.log(Data)
  const removeDeleteModel = () => {
    let newState = !deleMessageModel;
    setDeleMESSAGEModel(newState);
  }

  const viewMessageModel = () => {
    let newState = !viewModel;
    setViewModel(newState);
  };

  const GetMessage = () => {
    axiosRequest.get(Message_URL)
      .then(response => {
        const result = response.data;
        const { status, message, data } = result;
        if (status !== 'SUCCESS') {
          setData(data)
        }
        else {
          setData(data)
        }
      })
      .catch(error => {
        if (error.code !== "ERR_NETWORK") {
          // Notify(error.response.data.message, "error");
        }
        else {
          Notify(error.message, "error");
        }
      })
  }

  const handleDelete = (e) => {
    e.preventDefault()
    const url = `message/${id}`
    setLoading(true)
    axiosRequest.delete(url)
      .then(response => {
        setLoading(false)
        const result = response.data;
        // Notify(result.message, "success");
        const { status, message } = result;
        if (status !== 'SUCCESS') {
          GetMessage();
          setDeleMESSAGEModel(false)
        }
        else {
          console.log(message)
        }
      })
      .catch(error => {
        setLoading(false)
        if (error.code !== "ERR_NETWORK") {
          // Notify(error.response.data.message, "error");
        }
        else {
          // Notify(error.message, "error");
        }
      })
  }

  useEffect(() => {
    GetMessage();
  }, [])
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* =========================== Start::  deleteMessageModel =============================== */}
      <div className={`min-h-full w-screen z-30 bg-gray-500 bg-opacity-30 backdrop-blur-sm fixed flex items-center justify-center px-4 ${deleMessageModel === true ? 'block' : 'hidden'}`}>
        <div className="bg-white w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h1 className='font-bold text-sm text-center w-11/12'>
              Delete  Message
            </h1>
            <hr className=' bg-primary border-b w-full' />
          </div>
          <div className="card-body">
            <form className=" px-8" >
              <div>
                <h2 className='text-base m-4'>Do you really want permanently delete <span className='italic text-black'>{RowData.fullName}</span> 's Message?</h2>
              </div>
              <div className="w-full flex justify-between">
                <button className='py-2 w-[40%] md:w-1/3 bg-transparent rounded border border-gray-800 font-sans text-sm' onClick={(e) => removeDeleteModel(e.preventDefault())}>Cancel</button>
                <button className='text-white py-2 w-[40%] md:w-1/3 bg-red-700 rounded' onClick={handleDelete}>remove</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  deleteMessageModel =============================== */}

      {/* =========================== Start::  viewMessageModel =============================== */}
      <div
        className={`min-h-full w-screen z-30 bg-gray-500 bg-opacity-30 backdrop-blur-sm fixed flex items-center justify-center px-4 ${viewModel === true ? 'block' : 'hidden'
          }`}
      >
        <div className="bg-white sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm text-gray-700 text-center w-11/12">
              <h6>Message from </h6>{RowData.fullName}
              <span><h5 className='uppercase'>Diosece</h5></span>{RowData.diosece}
              <span><h5 className='uppercase'>Country</h5></span>{RowData.country}
              <span><h5 className='uppercase'>Telephone</h5></span>{RowData.phone}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form>
              <div className="input my-3 h-32 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <textarea
                    type="text"
                    name="image"
                    value={RowData.message}
                    className="border pb-32 pt-2 rounded outline-none px-3 font-sans text-sm w-full"
                  />
                </div>
              </div>
              <div className="w-full flex justify-center pt-4">
                <button className='py-2 w-[40%] md:w-1/3 bg-transparent rounded border border-gray-800 font-sans text-sm text-gray-900'
                  onClick={(e) => {
                    e.preventDefault();
                    setViewModel(false)
                  }}>Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  viewMessageModel =============================== */}

      <div className="bg-[#F5F5F5] pb-10 pt-28 min-h-screen lg:ml-44">
        <div className="px-3 md:px-6 lg:px-28">
          <div className="bg-white shadow-lg px-5 py-8 rounded-md w-full  lg:w-full ">
            <div className=" flex items-center justify-between pb-6">
              <div>
                <h2 className="font-sans text-gray-700 text-xl font-semibold px-1 hover:underline">Available Messages</h2>
              </div>
            </div>
            <div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block lg:min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                  <thead>
                      <tr>
                        <th
                          className="font-serif p-6 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                          names
                        </th>
                        <th
                          className="font-serif px-5  border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                          Email
                        </th>
                        <th
                          className="font-serif px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                          messages
                        </th>
                        <th
                          className="font-serif px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                          date
                        </th>
                        <th
                          className="font-serif px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Data.map((item) => (
                        <tr key={item._id}>
                         <td className="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                            <h2 className="text-gray-900 whitespace-no-wrap">{item.fullName}</h2>
                          </td>
                          <td className="p-3 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              <div>
                                <p className="text-gray-900 whitespace-no-wrap line-clamp-3 font-serif">
                                  {item.email}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap line-clamp-4">{item.message}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              <div>
                                <p className="w-28 text-gray-900 whitespace-no-wrap">
                                  {item.createdAt}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 text-gray-500 bg-white text-lg">
                            <div className='flex'>
                              <div className="cursor-pointer mr-2 text-blue-800" onClick={() => { viewMessageModel(SetRowData(item)) }}>
                                <GiBookmarklet />
                              </div>
                              <div className="cursor-pointer text-[#FF3D3D]" onClick={() => { removeDeleteModel(SetRowData(item), setId(item._id), setDelete(true)) }}>
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

export default Messages
