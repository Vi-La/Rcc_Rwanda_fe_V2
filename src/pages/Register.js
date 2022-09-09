import React from 'react'
import { useForm } from 'react-hook-form';
import SignupSvg from './../assets/SignUp.svg'
import FooterSection from '../components/FooterSection'
import Navbar from '../components/Navbar';

const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = () => {
        reset();
    };

    return (
        <>
            <Navbar />
            <section className="signup bg-gray-50 dark:bg-gray-900">
                <h1 className="font-serif font-bold sm:text-3xl uppercase text-center pt-16 -mb-20 leading-tight tracking-tight text-gray-900 ">
                    Register now
                </h1>
                <div className="flex flex-warp items-center min-h-screen justify-center px-6 py-8 mx-auto lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-4 sm:p-12">
                            <form className="space-y-4 md:space-y-2" action="#" onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <input
                                        type="text"
                                        {...register('fname', { required: 'First Name is required' })}
                                        name="fname"
                                        id="fname"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="First Name" />
                                </div>
                                <div>
                                    {errors.fname && (
                                        <small className="text-red-600 -mt-96">
                                            {errors.fname.message}
                                        </small>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        {...register('lname', { required: 'Last Name is required' })}
                                        name="lname"
                                        id="lname"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Last Name" />
                                </div>
                                <div>
                                    {errors.lname && (
                                        <small className="text-red-600">
                                            {errors.lname.message}
                                        </small>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Invalid email',
                                            },
                                        })}
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Email" />
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
                                        name="country"
                                        id="country"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Country" />
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
                                        type="text"
                                        {...register('diosece', { required: 'Diosece is required' })}
                                        name="diosece"
                                        id="diosece"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Diosece" />
                                </div>
                                <div>
                                    {errors.diosece && (
                                        <small className="text-red-600">
                                            {errors.diosece.message}
                                        </small>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        {...register('phone', { required: 'Telephone is required' })}
                                        name="telephone"
                                        id="telephone"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Telephone Number" />
                                </div>
                                <div>
                                    {errors.phone && (
                                        <small className="text-red-600">
                                            {errors.phone.message}
                                        </small>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        {...register('pass', { required: 'Password is required' })}
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                </div>
                                <div>
                                    {errors.pass && (
                                        <small className="text-red-600">
                                            {errors.pass.message}
                                        </small>
                                    )}
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="terms"
                                            aria-describedby="terms"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#b">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-1/2 text-white bg-[#FF3D3D] hover:bg-transparent border border-[#FF3D3D] hover:text-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-base uppercase px-5 py-2.5 text-center">
                                    Register
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a href="#bn" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                    <div className='w-1/2 -mr-32'>
                        <img
                            className=""
                            src={SignupSvg}
                            alt="svg"
                        />
                    </div>
                </div>
            </section>
            <FooterSection />
        </>
    )
}

export default Register
