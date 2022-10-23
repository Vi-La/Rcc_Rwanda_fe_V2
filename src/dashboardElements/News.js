import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Notify from "../functions/Notify";
import { Button, Spinner } from 'react-bootstrap';
import Axios from 'axios'
import { axiosRequest } from '../api';
const News_URL = "news"


const News = () => {
  const [createCohortModel, setCreateCohortModel] = useState(false);
  const [deleteCohortModel, setDeleteCohortModel] = useState(false);
  const [updateNewsModel, setUpdateNewsModel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [Delete, setDelete] = useState(false)
  const [RowData, SetRowData] = useState([])
  const [Data, setData] = useState([]);
  const [id, setId] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: ""
  })

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")

  const removeModel = () => {
    let newState = !createCohortModel;
    setCreateCohortModel(newState);
  }

  const removeDeleteModel = () => {
    let newState = !deleteCohortModel;
    setDeleteCohortModel(newState);
  }

  const removeUpdateModel = () => {
    let newState = !updateNewsModel;
    setUpdateNewsModel(newState);
  }

  const GetNews = () => {
    axiosRequest.get(News_URL)
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
          // Notify(error.message, "error");
        }
      })
  }

  const handleSubmite = (e) => {
    e.preventDefault()
    const url = 'news'
    const formData = new FormData()
    formData.append("file", image)
    formData.append("upload_preset", "msr09nn2")
    setLoading(true)
    Axios.post("https://api.cloudinary.com/v1_1/andela-rwanda-kigali/image/upload", formData).then((response) => {
      setLoading(false)
      setImage(response.data.secure_url)
      const protifolioImage = response.data.secure_url
      const Credentials = { title, description, image: protifolioImage }
      setLoading(true)
      axiosRequest.post(url, Credentials)
        .then(response => {
          setLoading(false)
          const result = response.data;
          // Notify(result.message, "success");
          const { status, message, data } = result;
          if (status !== 'SUCCESS') {
            GetNews();
            setCreateCohortModel(false)
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
    })
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    const url = `news/${id}`
    setLoading(true)
    axiosRequest.put(url, formData)
      .then(response => {
        setLoading(false)
        const result = response.data;
        // Notify(result.message, "success");
        const { status, message } = result;
        if (status !== 'SUCCESS') {
          GetNews();
          setUpdateNewsModel(false)
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

  const handleDelete = (e) => {
    e.preventDefault()
    const url = `news/${id}`
    setLoading(true)
    axiosRequest.delete(url)
      .then(response => {
        setLoading(false)
        const result = response.data;
        // Notify(result.message, "success");
        const { status, message } = result;
        if (status !== 'SUCCESS') {
          GetNews();
          setDeleteCohortModel(false)
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
    GetNews();
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

      {/* =========================== Start:: CreateCohortModel =============================== */}
      <div className={`min-h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm fixed flex items-center justify-center px-4 ${createCohortModel === true ? 'block' : 'hidden'}`}>
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className='font-bold text-sm text-center w-11/12 uppercase'>
              Add a News
            </h3>
            <hr className=' bg-primary border-b my-3 w-full' />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8" >

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg font-sans text-xs py-2 w-full"
                    placeholder="title"
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg font-sans text-xs py-2 w-full"
                    placeholder="description"
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="file"
                    onChange={(e) => {
                      setImage(e.target.files[0])
                    }}
                    className=" border border-primary py-2 dark:bg-dark-frame-bg rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder="image"
                  />
                </div>
              </div>
              <div className="w-full flex justify-between">
                <button className='py-2 w-[40%] md:w-1/3 bg-transparent rounded border border-[#31699C] font-sans text-sm text-gray-900' onClick={(e) => removeModel(e.preventDefault())}>Cancel</button>
                {loading ? (
                  <Button variant="dark" disabled className='w-[40%] md:w-1/2'>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="false"
                      animation="border" />
                    Processing...
                  </Button>
                ) : (
                  <button className='py-2 w-[40%] md:w-1/3 rounded  bg-[#31699C] hover:bg-transparent border text-white border-gray-800 hover:bg-green-500 focus:ring-4 focus:outline-none'
                    onClick={handleSubmite}
                  >
                    Save
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  CreateCohortModel =============================== */}

      {/* =========================== Start::  deletePortfolioModel =============================== */}
      <div className={`h-screen w-screen bg-gray-600 bg-opacity-30 backdrop-blur-sm fixed flex items-center justify-center px-4 ${deleteCohortModel === true ? 'block' : 'hidden'}`}>
        <div className="bg-white w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className='font-bold text-sm text-center w-11/12 uppercase'>
              Remove News
            </h3>
            <hr className=' bg-primary border-b my-3 w-full' />
          </div>
          <div className="card-body">
            <form className=" px-8" >
              <div>
                <h2 className='text-base m-4'>Do you really want to remove this <span className='italic text-black'>News</span> from the List?</h2>
              </div>
              <div className="w-full flex justify-between">
                <button className='py-2 w-[40%] md:w-1/3 bg-transparent rounded border border-gray-800 font-sans text-sm' onClick={(e) => removeDeleteModel(e.preventDefault())}>Cancel</button>
                {loading ? (
                  <Button variant="dark" disabled className='w-[40%] md:w-1/2'>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="false"
                      animation="border" />
                    Processing...
                  </Button>
                ) : (
                  <button
                    className='text-white py-2 w-[40%] md:w-1/3 bg-red-700 rounded'
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  deletePortfolioModel =============================== */}

      {/* =========================== Start::  updateTeamModel =============================== */}
      <div className={`h-screen w-screen bg-gray-600 bg-opacity-30 backdrop-blur-sm fixed flex items-center justify-center px-4 ${updateNewsModel === true ? 'block' : 'hidden'}`}>
        <div className="bg-white w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className='font-bold text-sm text-center w-11/12 uppercase'>
              Update News
            </h3>
            <hr className=' bg-primary border-b my-3 w-full' />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8" >
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="title"
                    defaultValue={formData.title}
                    onChange={(e) => setFormData({
                      ...formData,
                      title: e.target.value
                    })}
                    className="border border-gray-300 rounded outline-none px-2 pb-10 font-sans text-xs py-2 w-full"
                    placeholder="Title"
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <textarea
                    type="text"
                    name="desc"
                    defaultValue={formData.description}
                    onChange={(e) => setFormData({
                      ...formData,
                      description: e.target.value
                    })}
                    className="border border-gray-300 py-2 pb-10 rounded outline-none px-2 font-sans text-xs w-full"
                    placeholder="Description"
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="file"
                    name="image"
                    defaultValue={formData.image}
                    disabled
                    className="border py-2 rounded outline-none px-2 font-sans text-xs w-full"
                  />
                </div>
              </div>
              <div className="w-full flex justify-between">
                <button className='py-2 w-[40%] md:w-1/3 bg-transparent rounded border border-gray-800 font-sans text-sm text-gray-900'
                  onClick={(e) => {
                    e.preventDefault();
                    setUpdateNewsModel(false)
                  }}>Cancel
                </button>
                {loading ? (
                  <Button variant="dark" disabled className='w-[40%] md:w-1/2'>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="false"
                      animation="border" />
                    Processing...
                  </Button>
                ) : (
                  <button
                    className='py-2 w-[40%] md:w-1/3 rounded  bg-[#31699C] hover:bg-transparent border border-[#31699C] text-white hover:bg-green-500 focus:ring-4 focus:outline-none'
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  updateTeamModel =============================== */}

      <div className="bg-[#F5F5F5] pb-10 min-h-screen lg:ml-44">
        <div className="flex items-left px-7 lg:px-28 pt-14 pb-8">
          <div className="space-x-8">
            <button className="text-white font-serif bg-[#FF3D3D] hover:bg-transparent border border-[#FF3D3D] hover:text-black focus:ring-4 focus:outline-none  font-medium rounded-lg text-base uppercase px-5 py-2.5 mt-8 text-center mr-3 md:mr-0 cursor-pointer" onClick={removeModel}>News +</button>
          </div>
        </div>
        <div className="px-3 md:px-6 lg:px-28">
          <div className="bg-white shadow-lg px-5 py-8 rounded-md w-full lg:w-[100%] ">
            <div className=" flex items-center justify-between pb-6">
              <div>
                <h2 className="font-sans text-xl font-semibold px-10 hover:underline">Available News</h2>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap ml-0 xl:ml-10 overflow-x-auto">
                {Data.map((item) => (
                  <div className="w-full sm:w-[40%] md:w-[28%] bg-white rounded-lg border border-gray-200 md:mx-2 xl:mr-10 mx-2 mb-4 shadow-md" key={item._id}>
                    <div className="flex flex-col items-left pb-6">
                      <img className="mb-3 rounded-lg shadow-lg h-[200px] object-cover sm:h-[150px] xl:h-[300px]" src={item.image} alt="Bonniimage" />
                      <h6 className="py-2 text-xl  font-bold font-sans px-3">{item.title}</h6>
                      <span className="text-sm text-gray-800 text-left px-3 font-bold font-sans">{item.description}</span>

                      <div className='px-2'>

                        <div className="flex mt-4 justify-between space-x-3 lg:mt-6">
                          <Link to="#link" className="inline-flex items-center py-2 px-3  text-xs font-medium text-center hover:bg-transparent hover:text-black border text-black bg-gray-300 rounded-lg"
                            onClick={() => removeUpdateModel(setFormData(item), setId(item._id))}
                          >
                            Edit
                          </Link>
                          <Link to="#link" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-black font-serif bg-red-500 hover:bg-transparent border border-red-500 hover:text-red-500 hover:bg-white rounded"
                            onClick={() => { removeDeleteModel(SetRowData(item), setId(item._id), setDelete(true)) }}
                          >
                            Delete
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default News
