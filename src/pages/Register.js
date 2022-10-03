import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import SignupSvg from './../assets/SignUp.svg'
import FooterSection from '../components/FooterSection'
import Navbar from '../components/Navbar';
import { axiosRequest } from '../api';
import { useNavigate } from 'react-router';
import { setUserSession } from '../utils/Common';

const register_URL = "users"
const Login_URL = 'users/login'

const Register = () => {
    const [isSignup, setIsSignup] = useState(true)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [country, setCountry] = useState("")
    const [diocese, setDiocese] = useState("")
    const [telephone, setTelephone] = useState("")
    const navigate = useNavigate()

    const onSubmit = () => {
        const Credentials = { firstName, email, lastName, telephone, country, diocese }
        axiosRequest.post(register_URL, Credentials)
            .then(response => {
                const result = response.data;
                // Notify(result.message, "success");
                const { status, message, data } = result;
                if (status !== 'SUCCESS') {
                    setFirstName(" ");
                    setCountry(" ")
                    setDiocese(" ")
                    setEmail(" ");
                    setLastName(" ");
                    setTelephone(" ")

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

    const handleLogin = async (e) => {
        e.preventDefault()
        setError(null)
        setLoading(true)
        await axiosRequest.post(Login_URL, {
            email: email,
            password: password
        }).then(res => {
            setLoading(false)
            setEmail(" ")
            setPassword(" ")
            // Notify(res.message, "success");
            setUserSession(res.data.token, res.data.user)
            const userInfo = res.data.user[0].userType
            console.log("res.data.token, res.data.user", userInfo)
            if(userInfo === "Admin" || "Belige") {
                navigate("/dashboard")
            }else{
                navigate("/")
            }
        })
            .catch((error) => {
                setLoading(false)
                console.log(error)
            })
    }

    const switchMode = () => {
        setIsSignup((prev) => !prev)

        console.log(isSignup)
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <>
            <Navbar />
            <section className="signup bg-gray-50 dark:bg-gray-900">
                <h1 className="font-serif font-bold sm:text-3xl uppercase text-center pt-16 -mb-20 leading-tight tracking-tight text-gray-900">
                    {isSignup ? "Register now" : "Login now"}
                </h1>
                <div className="flex flex-warp items-center min-h-screen justify-center px-6 py-8 mx-auto lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-4 sm:p-12">
                            <form className="space-y-4 md:space-y-2" action="#" onSubmit={handleSubmit(onSubmit)}>
                                {isSignup && (<>
                                    <div>
                                        <input
                                            type="text"
                                            {...register('fname', { required: 'First Name is required' })}
                                            name="fname"
                                            id="fname"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="First Name"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
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
                                            placeholder="Last Name"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        {errors.lname && (
                                            <small className="text-red-600">
                                                {errors.lname.message}
                                            </small>
                                        )}
                                    </div>
                                </>)}
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
                                        placeholder="Email"
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
                                {isSignup && (<>
                                    <div>
                                        <input
                                            type="text"
                                            {...register('country', { required: 'Country is required' })}
                                            name="country"
                                            id="country"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="Country"
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
                                            type="text"
                                            {...register('diosece', { required: 'Diosece is required' })}
                                            name="diosece"
                                            id="diosece"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="Diosece"
                                            value={diocese}
                                            onChange={(e) => setDiocese(e.target.value)}
                                        />
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
                                            name="telephone"
                                            id="telephone"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="Telephone Number"
                                            value={telephone}
                                            onChange={(e) => setTelephone(e.target.value)}
                                        />
                                    </div>
                                </>)}
                                {!isSignup && (<>
                                    <div>
                                        <input
                                            type="password"
                                            {...register('pass', { required: 'Password is required' })}
                                            name="password"
                                            id="password"
                                            placeholder="Password"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        {errors.pass && (
                                            <small className="text-red-600">
                                                {errors.pass.message}
                                            </small>
                                        )}
                                    </div>
                                </>)}
                                {isSignup && (<>
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
                                </>)}
                                {isSignup && (<>
                                <button
                                    type="submit"
                                    className="w-1/2 text-white bg-[#FF3D3D] hover:bg-transparent border border-[#FF3D3D] hover:text-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-base uppercase px-5 py-2.5 text-center">
                                    Register
                                </button>
                                </>)}
                                {!isSignup && (<>
                                <button
                                    type="submit"
                                    className="w-1/2 text-white bg-[#FF3D3D] hover:bg-transparent border border-[#FF3D3D] hover:text-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-base uppercase px-5 py-2.5 text-center"
                                    onClick={handleLogin}
                                    >
                                    Login
                                </button>
                                </>)}
                                <div className="text-sm font-light text-gray-500">
                                    <span className="font-medium text-primary-600 cursor-pointer" onClick={switchMode}>
                                        {isSignup ? "Already have account? Login" : "Don't have account? Register"}
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='w-1/2 -mr-32 hidden xl:block'>
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
