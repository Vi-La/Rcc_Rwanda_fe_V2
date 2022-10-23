import React, { useEffect, useState } from 'react'
import { FaFacebook, FaTwitter, FaInstagramSquare, FaEdit, FaTrash } from 'react-icons/fa'
import { axiosRequest } from '../api';
import Axios from 'axios'
import { getUser } from '../utils/Common';
import { Button, Spinner } from 'react-bootstrap';

const leader_URL = "leader"


const History = () => {
  const [createCohortModel, setCreateCohortModel] = useState(false);
  const [deleteCohortModel, setDeleteCohortModel] = useState(false);
  const [updateNewsModel, setUpdateNewsModel] = useState(false);

  const [loading, setLoading] = useState(false);
  const [Delete, setDelete] = useState(false)
  const [RowData, SetRowData] = useState([])
  const [Data, setData] = useState([]);
  const [id, setId] = useState("");
  const user = getUser()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    image: "",
    diocese: "",
    fbLink: "",
    twLink: ""
  })

  const [fullName, setFullName] = useState("")
  const [diocese, setDiocese] = useState("")
  const [email, setEmail] = useState("")
  const [image, setImage] = useState("")
  const [fbLink, setFbLink] = useState("")
  const [twLink, setTwLink] = useState("")

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

  const GetLeader = () => {
    axiosRequest.get(leader_URL)
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
    const url = 'leader'
    const formData = new FormData()
    formData.append("file", image)
    formData.append("upload_preset", "msr09nn2")
    setLoading(true)
    Axios.post("https://api.cloudinary.com/v1_1/andela-rwanda-kigali/image/upload", formData).then((response) => {
      setLoading(false)
      setImage(response.data.secure_url)
      const protifolioImage = response.data.secure_url
      const Credentials = { fullName, email, diocese, fbLink, twLink, image: protifolioImage }
      setLoading(true)
      axiosRequest.post(url, Credentials)
        .then(response => {
          setLoading(false)
          const result = response.data;
          // Notify(result.message, "success");
          const { status, message, data } = result;
          if (status !== 'SUCCESS') {
            GetLeader();
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
    const url = `leader/${id}`
    setLoading(true)
    axiosRequest.put(url, formData)
      .then(response => {
        setLoading(false)
        const result = response.data;
        // Notify(result.message, "success");
        const { status, message } = result;
        if (status !== 'SUCCESS') {
          GetLeader();
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
    const url = `leader/${id}`
    setLoading(true)
    axiosRequest.delete(url)
      .then(response => {
        setLoading(false)
        const result = response.data;
        // Notify(result.message, "success");
        const { status, message } = result;
        if (status !== 'SUCCESS') {
          GetLeader();
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
    GetLeader();
  }, [])

  return (
    <>
      {/* =========================== Start:: CreateCohortModel =============================== */}
      <div className={`min-h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm fixed flex items-center justify-center px-4 ${createCohortModel === true ? 'block' : 'hidden'}`}>
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className='font-bold text-sm text-center w-11/12 uppercase'>
              Add a Belige
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
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg font-sans text-xs py-2 w-full"
                    placeholder="Full Names"
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="member"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg font-sans text-xs py-2 w-full"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="diocese"
                    value={diocese}
                    onChange={(e) => setDiocese(e.target.value)}
                    className="border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg font-sans text-xs py-2 w-full"
                    placeholder="Diocese"
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="facebookLink"
                    value={fbLink}
                    onChange={(e) => setFbLink(e.target.value)}
                    className="border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg font-sans text-xs py-2 w-full"
                    placeholder="Facebook Link(https://www.facebook/...)"
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="twitterLink"
                    value={twLink}
                    onChange={(e) => setTwLink(e.target.value)}
                    className="border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg font-sans text-xs py-2 w-full"
                    placeholder="Twitter Link(https://www.twitter/...)"
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="file"
                    name="image"
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
              Remove {RowData.fullName}
            </h3>
            <hr className=' bg-primary border-b my-3 w-full' />
          </div>
          <div className="card-body">
            <form className=" px-8" >
              <div>
                <h2 className='text-base m-4'>Do you really want to remove <span className='italic text-black'>{RowData.fullName}</span> from the Team</h2>
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
              Update {RowData.name}
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
                    defaultValue={formData.fullName}
                    onChange={(e) => setFormData({
                      ...formData,
                      fullName: e.target.value
                    })}
                    className="border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg font-sans text-xs py-2 w-full"
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    defaultValue={formData.email}
                    onChange={(e) => setFormData({
                      ...formData,
                      email: e.target.value
                    })}
                    className="border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg font-sans text-xs py-2 w-full"
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    defaultValue={formData.diocese}
                    onChange={(e) => setFormData({
                      ...formData,
                      diocese: e.target.value
                    })}
                    className="border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg font-sans text-xs py-2 w-full"
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    defaultValue={formData.fbLink}
                    onChange={(e) => setFormData({
                      ...formData,
                      fbLink: e.target.value
                    })}
                    className="border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg font-sans text-xs py-2 w-full"
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    defaultValue={formData.twLink}
                    onChange={(e) => setFormData({
                      ...formData,
                      twLink: e.target.value
                    })}
                    className="border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg font-sans text-xs py-2 w-full"
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
          {user[0]?.userType === "Admin" ? (
            <div className="space-x-8">
              <button className="text-white font-serif font-semibold bg-[#FF3D3D] hover:bg-transparent border border-[#FF3D3D] hover:text-black focus:ring-4 focus:outline-none rounded-lg text-base uppercase px-5 py-2.5 mt-8 text-center mr-3 md:mr-0 cursor-pointer" onClick={removeModel}>Leaders +</button>
            </div>
          ) : ""}
        </div>
        <div className="px-3 md:px-6 lg:px-28">
          <div className="bg-white shadow-lg px-5 py-8 rounded-md w-full  lg:w-full ">
            <div className=" flex items-center justify-between pb-6">
              <div>
                <h2 className="font-sans text-xl text-gray-700 font-semibold px-1 hover:underline">Belige</h2>
              </div>
            </div>
            <div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block lg:min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th
                          className="font-serif px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                          Image
                        </th>
                        <th
                          className="font-serif p-6 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                          Names
                        </th>
                        <th
                          className="font-serif px-5  border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                          Email
                        </th>
                        <th
                          className="font-serif px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                          Diocese
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
                      {Data.map((item) => (
                        <tr key={item.id}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <img className="w-10 h-10 rounded-full shadow-lg object-cover" src={item.image} alt="Bonnie" />
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              <div>
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {item.fullName}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{item.email}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {item.diocese}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className='flex'>
                              <a href={item.fbLink} target="_blank" rel="noreferrer"><div className="cursor-pointer mr-4 text-blue-800">
                                <FaFacebook />
                              </div> </a>
                              <a href={item.twLink} target="_blank" rel="noreferrer"><div className="cursor-pointer mr-4 text-blue-800">
                                <FaTwitter />
                              </div></a>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 text-gray-500 cursor-pointer bg-white text-lg">
                            <div className='flex'>
                              <div className="cursor-pointer mr-2 text-blue-700"
                                onClick={() => removeUpdateModel(setFormData(item), setId(item._id))}
                              >
                                <FaEdit />
                              </div>
                              {user[0]?.userType === "Admin" ? (
                                <div className="cursor-pointer text-[#FF3D3D]"
                                  onClick={() => { removeDeleteModel(SetRowData(item), setId(item._id), setDelete(true)) }}
                                >
                                  <FaTrash />
                                </div>
                              ) : ""}
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
