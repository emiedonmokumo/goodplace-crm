import React from 'react';
import Link from 'next/link';
import { FaUser, FaBuilding, FaUsers, FaEnvelope, FaCreditCard, FaKey } from 'react-icons/fa';

export const SignupNav = ({ currentStep, setCurrentStep }) => {
    const handleStepChange = (step) => {
        setCurrentStep(step);
    };

    return (
        <div className="sm:hidden relative">
            {/* Fixed sidebar */}
            <div className="bg-blue-300 p-5 fixed top-0 left-0 w-72 h-screen z-10">
                <img src="/GoodPlace CRM - Logo-1 1.png" className="lg:w-48 mb-8" alt="Logo" />

                {/* Nav List */}
                <ul className='flex flex-col ml-5 text-xs space-y-10'>
                    <li>
                        <button
                            className={`flex items-center space-x-2 w-full text-left ${currentStep === 1 ? 'font-bold text-[#00454F]' : ''}`}
                            onClick={() => handleStepChange(1)}
                            // disabled={currentStep => 5 && true}
                        >
                            <FaUser className='text-[18px]' />
                            <div className='flex-1'>
                                <h2>1 of 6</h2>
                                <h3>Personal Information</h3>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button
                            className={`flex items-center space-x-2 w-full text-left ${currentStep === 2 ? 'font-bold text-[#00454F]' : ''}`}
                            onClick={() => handleStepChange(2)}
                            // disabled={currentStep => 5 && true}
                        >
                            <FaBuilding className='text-[18px]' />
                            <div className='flex-1'>
                                <h2>2 of 6</h2>
                                <h3>Company Information</h3>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button
                            className={`flex items-center space-x-2 w-full text-left ${currentStep === 3 ? 'font-bold text-[#00454F]' : ''}`}
                            onClick={() => handleStepChange(3)}
                            disabled={currentStep => 5 && true}
                        >
                            <FaUsers className='text-[18px]' />
                            <div className='flex-1'>
                                <h2>3 of 6</h2>
                                <h3>Team Information</h3>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button
                            className={`flex items-center space-x-2 w-full text-left ${currentStep === 4 ? 'font-bold text-[#00454F]' : ''}`}
                            onClick={() => handleStepChange(4)}
                            // disabled={currentStep => 5 && true}
                        >
                            <FaKey className='text-[18px]' />
                            <div className='flex-1'>
                                <h2>4 of 6</h2>
                                <h3>Login Credentials</h3>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className={`flex items-center space-x-2 text-left ${currentStep === 5 ? 'text-[#00454F] font-bold' : ''}`} onClick={() => handleStepChange(5)}
                            >
                            <FaEnvelope className='text-[18px]' />
                            <div className='flex-1'>
                                <h2>5 of 6</h2>
                                <h3>Email Verification</h3>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className={`flex items-center space-x-2 text-left ${currentStep === 6 ? 'text-[#00454F] font-bold' : ''}`}>
                            <FaCreditCard className='text-[18px]' />
                            <div className='flex-1'>
                                <h2>6 of 6</h2>
                                <h3>Subscription Plan</h3>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>

            {/* Link positioned to the right */}
            <div className="fixed top-4 right-4 z-20">
                <Link href="/login" className="text-sm hover:underline">
                    Already a member? Sign in
                </Link>
            </div>
        </div>
    );
};

// Mobile Nav
export const SignupNavMobile = ({ currentStep, setCurrentStep }) => {
    const handleStepChange = (step) => {
        setCurrentStep(step);
    };

    return (
        <div className="lg:hidden fixed top-2 left-0 right-0 flex justify-center z-10 py-2 px-4 bg-white space-x-4">
            {/* Step icons */}
            <button
                onClick={() => handleStepChange(1)}
                className={`relative flex flex-col items-center p-2 rounded-full transition-all duration-300 ${currentStep === 1 ? 'bg-[#00454F] text-white' : 'bg-gray-100 text-gray-500'}`}
            >
                <FaUser className="text-[14px]" />
                {currentStep === 1 && <div className="absolute -bottom-1 w-2 h-2 bg-[#00454F] rounded-full"></div>}
            </button>

            <button
                onClick={() => handleStepChange(2)}
                className={`relative flex flex-col items-center p-2 rounded-full transition-all duration-300 ${currentStep === 2 ? 'bg-[#00454F] text-white' : 'bg-gray-100 text-gray-500'}`}
            >
                <FaBuilding className="text-[14px]" />
                {currentStep === 2 && <div className="absolute -bottom-1 w-2 h-2 bg-[#00454F] rounded-full"></div>}
            </button>

            <button
                onClick={() => handleStepChange(3)}
                className={`relative flex flex-col items-center p-2 rounded-full transition-all duration-300 ${currentStep === 3 ? 'bg-[#00454F] text-white' : 'bg-gray-100 text-gray-500'}`}
            >
                <FaUsers className="text-[14px]" />
                {currentStep === 3 && <div className="absolute -bottom-1 w-2 h-2 bg-[#00454F] rounded-full"></div>}
            </button>

            <button
                onClick={() => handleStepChange(4)}
                className={`relative flex flex-col items-center p-2 rounded-full transition-all duration-300 ${currentStep === 4 ? 'bg-[#00454F] text-white' : 'bg-gray-100 text-gray-500'}`}
            >
                <FaKey className="text-[14px]" />
                {currentStep === 4 && <div className="absolute -bottom-1 w-2 h-2 bg-[#00454F] rounded-full"></div>}
            </button>

            <button
                onClick={() => handleStepChange(5)}
                className={`relative flex flex-col items-center p-2 rounded-full transition-all duration-300 ${currentStep === 5 ? 'bg-[#00454F] text-white' : 'bg-gray-100 text-gray-500'}`}
            >
                <FaEnvelope className="text-[14px]" />
                {currentStep === 5 && <div className="absolute -bottom-1 w-2 h-2 bg-[#00454F] rounded-full"></div>}
            </button>

            <button
                onClick={() => handleStepChange(6)}
                className={`relative flex flex-col items-center p-2 rounded-full transition-all duration-300 ${currentStep === 6 ? 'bg-[#00454F] text-white' : 'bg-gray-100 text-gray-500'}`}
            >
                <FaCreditCard className="text-[14px]" />
                {currentStep === 6 && <div className="absolute -bottom-1 w-2 h-2 bg-[#00454F] rounded-full"></div>}
            </button>
        </div>
    );
};


