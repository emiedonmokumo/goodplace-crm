'use client';
import { SignupNav, SignupNavMobile } from '@/components/SignupNav';
import { BioForm, CompanyForm, TeamForm, Logins, EmailVerification } from '@/components/SignupForm';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1);
  const [bioForm, setBioForm] = useState({
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phone: '',
    linkedIn: '',
    x: '',
    country: '',
    city: '',
    address: '',
  })

  const [companyForm, setCompanyForm] = useState({
    name: '',
    website: '',
    email: '',
    industry: '',
    foundingYear: '',
    revenue: {
      ltm: '',
      previousYear: ''
    },
    grossProfit: {
      ltm: '',
      previousYear: ''
    },
    EBITDA: {
      ltm: '',
      previousYear: ''
    },
    country: '',
    city: '',
  })

  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: '',
    password2: ''
  })

  // Team Information
  const [teamForm, setTeamForm] = useState({
    team1: {
      fullName: '',
      role: ''
    },
    team2: {
      fullName: '',
      role: ''
    },
  })

  // Email Verification
  const [code, setCode] = useState(['', '', '', '', '']);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    if (currentStep <= 4) {
      e.preventDefault();
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ bio: bioForm, company: companyForm, team: teamForm, credentials: loginCredentials })
      })

      if (response.ok) {
        console.log(await response.json())
        router.push('/dashboard')
      }

      setCurrentStep(5)
    }
  };

  // Function to go to the next step
  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Function to go to the previous step
  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleVerification = (e) => {
    e.preventDefault()
    console.log('working...')
    setCurrentStep(6)
  }

  // Function to render the current form step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BioForm bioForm={bioForm} setBioForm={setBioForm} />;
      case 2:
        return <CompanyForm companyForm={companyForm} setCompanyForm={setCompanyForm} />;
      case 3:
        return <TeamForm teamForm={teamForm} setTeamForm={setTeamForm} />;
      case 4:
        return <Logins loginCredentials={loginCredentials} setLoginCredentials={setLoginCredentials} />;
      case 5:
        return <EmailVerification code={code} setCode={setCode} handleVerification={handleVerification} />;
      default:
        return <BioForm bioForm={bioForm} setBioForm={setBioForm} />;
    }
  };

  return (
    <div className="flex">
      <SignupNav currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <SignupNavMobile currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <div className={`${currentStep == 6 && 'hidden'} sm:mt-14 lg:flex-1 flex items-center justify-center lg:ml-64 p-4 min-h-screen`}>
        <form className="lg:w-full lg:max-w-md" onSubmit={handleSubmit}>
          {renderStep()}

          <div className="flex justify-between mt-4">
            {/* Back Button */}
            {currentStep > 1 && currentStep < 4 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-300 rounded sm:text-xs">Back</button>
            )}

            {/* Next Button */}
            {currentStep < 4 && (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-[#03AAC1] text-white rounded sm:text-xs"
              >
                Next
              </button>
            )}
            {currentStep == 4 && (
              // Submit Button on the last step
              <input
                type="submit"
                value="Complete"
                className="px-4 w-full py-2 bg-[#03AAC1] hover:bg-[#0691A5] text-white rounded cursor-pointer sm:text-sm"
              />
            )}
          </div>
        </form>
      </div>
      {currentStep == 6 && (
        <div className='flex-1 flex items-center justify-center lg:ml-64 sm:ml-12 p-4 min-h-screen'>
          <form className='w-full max-w-md'>
            <h1>Subcription Plan</h1>
          </form>
        </div>
      )}
    </div>
  );
};

export default Page;
