import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { MailIcon } from '@heroicons/react/outline'
import { Zoom } from 'react-reveal';
import { ToastContainer } from "react-toastify";
import Notify from "../functions/Notify";
import { axiosRequest } from '../api/index'
const Contact_URL = "message"

const ContactSection = () => {
    const { t } = useTranslation();

    const [fullName, setFullName] = useState("")
    const [country, setCountry] = useState("")
    const [diosece, setDiosece] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const onSubmit = () => {
        const Credentials = { fullName, email, message, phone, country, diosece }
        axiosRequest.post(Contact_URL, Credentials)
            .then(response => {
                const result = response.data;
                // Notify(result.message, "success");
                const { status, message, data } = result;
                if (status !== 'SUCCESS') {
                    setFullName(" ");
                    setCountry(" ")
                    setDiosece(" ")
                    setEmail(" ");
                    setMessage(" ");
                    setPhone(" ")

                }
                else {
                    console.log(message)
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

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

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
        <div className="relative mx-auto w-full py-8 md:px-24 max-w-7xl bg-white text-gray-700">
            <Zoom>
                <h1 className="text-center py-9 font-serif font-bold md:text-3xl text-xl uppercase">{t("WEHAPPYHEAR")}</h1>
            </Zoom>
            <div className="grid grid-cols-2">
                <div className="order-3 md:order-2 col-span-full md:col-span-1 py-5 md:py-10 px-6">
                    <form action="" className="mx-auto max-w-xl space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                type="text"
                                {...register('name', { required: 'Name is required' })}
                                id="name"
                                name="name"
                                placeholder="Name"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <div>
                            {errors.name && (
                                <small className="text-red-600">
                                    {errors.name.message}
                                </small>
                            )}
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                type="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email',
                                    },
                                })}
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            {errors.email && (
                                <small className="text-red-600">
                                    {errors.email.message}
                                </small>
                            )}
                        </div>
                        <div>
                            <input
                                 type="text"
                                {...register('country', { required: 'Country is required' })}
                                id="country"
                                name="country"
                                placeholder="Country"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </div>
                        <div>
                            {errors.country && (
                                <small className="text-red-600">
                                    {errors.country.message}
                                </small>
                            )}
                        </div>
                        <div>
                            <input
                                 type="number"
                                // {...register('number', { required: 'Telephone number is required' })}
                                id="telephone"
                                name="telephone"
                                placeholder="telephone number"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                value={phone}
                                 onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div>
                            {errors.number && (
                                <small className="text-red-600">
                                    {errors.number.message}
                                </small>
                            )}
                        </div>
                        <div>
                            <input
                                 type="text"
                                {...register('diosece', { required: 'Diosece is required' })}
                                id="diosece"
                                name="diosece"
                                placeholder="Diosece"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                value={diosece}
                                 onChange={(e) => setDiosece(e.target.value)}
                            />
                        </div>
                        <div>
                            {errors.diosece && (
                                <small className="text-red-600">
                                    {errors.diosece.message}
                                </small>
                            )}
                        </div>
                        <div className="col-span-full">
                            <textarea
                                name="message"
                                {...register('message', { required: "It can't be empty" })}
                                id="message"
                                cols="30"
                                rows="4"
                                placeholder="Let know more from you?"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FF3D3D] focus:border-[#FF3D3D] block w-full p-2.5"
                                value={message}
                                 onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <div>
                            {errors.message && (
                                <small className="text-red-600">
                                    {errors.message.message}
                                </small>
                            )}
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="py-2.5 px-6 rounded-lg bg-[#FF3D3D] hover:bg-transparent border border-[#FF3D3D] hover:text-black text-base text-white font-semibold uppercase">
                                {t("SendMessage")}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="order-2 md:order-3 col-span-full md:col-span-1 py-5 md:py-10 px-6">
                    <div className="mx-auto max-w-xl flex flex-col space-y-5">
                        <h2 className="text-4xl font-oswald uppercase font-sans">{t("Contactus")}</h2>
                        <p className="text-sm text-gray-500">
                            {t("contactMessage")}
                        </p>
                        <a href="#mail" className="inline-flex items-center text-sm text-blue-400 font-semibold hover:text-blue-500">
                            <MailIcon className="mr-2 w-5 text-gray-400" />
                            mail-contact@cyifuzo.com
                        </a>
                        <p className="text-sm text-gray-500 leading-6">18 Avenue des Champs-Élysées, <br /> 75008 Kigali <br /> Rwanda</p>
                        <div className="flex items-center">
                            <a href="#twitter" className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-[#1DA1F2] text-white filter hover:brightness-125" style={{ backgroundColor: "#1DA1F2" }}>
                                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="#facebook" className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-[#4267B2] text-white filter hover:brightness-125" style={{ backgroundColor: "#4267B2" }}>
                                <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z" />
                                </svg>
                            </a>
                            <a href="#instagrap" className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white filter hover:brightness-125">
                                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ContactSection
