'use client'
import { useState } from 'react';
import Navbar from '@/components/navbar';
import Abstract from '../../public/abstract_figures.png';
import Link from 'next/link'; // Make sure to import Link
import Image from 'next/image';

export default function Login() {
    const handleLogin = () => {
        // Add your login logic here
    }

    const handleInputChange = (e) => {
        // Handle input change
    }

    const formData = {
        email: '', // Initialize with default values
        password: '', // Initialize with default values
    };

    return (
        <div>
            <Navbar />
            <div className="bg-gradient-to-b from-[#181616] to-[#052A4D] flex min-h-screen flex-col items-center justify-center overflow-hidden">
                <div className="flex flex-col md:flex-row justify-center items-center w-screen h-screen gap-x-[10%] px-10 z-1">
                    <div className="hidden md:block">
                        <Image src={Abstract} className="LOGOO" id="LOGO" alt="Logo" />
                    </div>

                    {/* Login form */}

                    <section className="font-poppins rounded-lg w-[450px] z-10">
                        <div className="flex flex-col items-center justify-center px-6 py-8  mx-auto md:h-[50%] rounded-lg lg:py-0">
                            <div className="w-full md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl text-white">
                                        LOGIN
                                    </h1>
                                    <form className="space-y-4 md:space-y-6">
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-bold text-white">Email</label>
                                            <input type="email" name="email" id="email" className="bg-[#3A6A70] text-white placeholder-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter your email" required="" />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-bold text-white">Password</label>
                                            <input type="password" name="password" id="password" placeholder="Enter your password" className="bg-[#3A6A70] text-white placeholder-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                                        </div>

                                        <button type="submit" className="w-[50%] bg-white text-black font-bold rounded-md py-2 mt-7 px-3 sm:px-4 duration-50 text-sm sm:text-base font-poppins hover:bg-gray-300 hover:cursor-pointer transition duration-300 ease-in-out">Log In</button>
                                    </form>
                                    <p className="font-poppins text-center mt-2 pt-5">
                                        Don&apos;t have an account?{" "}
                                    </p>
                                    <Link href="/register">
                                        <p className="font-poppins text-center z-10">
                                            <span className="text-[#3AE7FF] hover:cursor-pointer hover:underline" style={{ zIndex: 10 }}>
                                                Register Now!
                                            </span>
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
