'use client';
import React, { FormEvent, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        console.log(showPassword) 
        setShowPassword((prev) => !prev);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement | undefined>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");
        console.log( email, password);
       
    };

    return (
        <div className="bg-white h-screen">
            <div className="container mx-auto max-h-screen flex flex-col md:flex-row items-center justify-between gap-5 xl:gap-39 p-5 md:p-5 ">
                {/* Left Side - Image */}
                <figure className="w-full h-full ">
                <Image
                    src={"/images/login/login.jpg"}
                    alt="Login Image"  
                    className=" h-full w-full rounded-lg"
                    width={500}
                    height={500}
                    
                    />
                
                </figure>

                {/* Right Side - Login Form */}
                <div className="w-full md:flex items-center justify-center ">
                    <div className="xl:w-[440px] xl:h-[380px]   rounded-lg space-y-6">
                        <div className="flex flex-col items-center justify-between xl:h-[141px]">
                            <Image
                                src="/images/login/logo.png"
                                alt="Sendiate Logo"
                                width={234}
                                height={66}
                            />
                            <div>
                                <h2 className="text-[28px] font-medium text-gray-800  text-center">Welcome Back</h2>
                                <p className="text-[16px] text-gray-600 text-center">
                                    Enter your email & password to login
                                </p>
                            </div>
                     
                        </div>
                        <form onSubmit={handleSubmit} className="">
                            {/* Email Input */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Password Input */}
                            <div className="mb-6 relative">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div onClick={togglePasswordVisibility} className="absolute right-3 top-8 text-gray-500 cursor-pointer z-10">

                                    {
                                        showPassword ? (
                                            <EyeOff />
                                        ) : (
                                            <Eye  />
                                        )
                                    }
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your password"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                            >
                                Log in
                            </button>
                        </form>
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default LoginPage;