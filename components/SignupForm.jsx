import { useRef } from 'react';

// Personal Information
export const BioForm = ({ bioForm, setBioForm }) => {
    return (
        <div className='my-5'>
            <div className='pb-5'>
                <h1 className='text-lg font-bold pb-1 sm:text-sm'>Personal Information</h1>
                <p className='text-sm font-medium sm:text-xs'>Complete your sign up process and get started with a 1 month free trial</p>
            </div>
            <div className='flex flex-col space-y-3'>
                <div className="flex lg:flex-row sm:flex-col lg:space-x-2">
                    <div className='flex flex-col w-full'>
                        <label htmlFor="" className='text-sm sm:text-xs pb-1'>First Name</label>
                        <input
                            type="text"
                            className='border p-1 border-[#D9D9D9] rounded-md'
                            value={bioForm.firstName}
                            onChange={(e) => setBioForm({ ...bioForm, firstName: e.target.value })}
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="" className='text-sm sm:text-xs pb-1'>Last Name</label>
                        <input
                            type="text"
                            className='border p-1 border-[#D9D9D9] rounded-md'
                            value={bioForm.lastName}
                            onChange={(e) => setBioForm({ ...bioForm, lastName: e.target.value })}
                        />
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="" className='text-sm sm:text-xs pb-1'>Title</label>
                    <input
                        type="text"
                        className='border p-1 border-[#D9D9D9] rounded-md'
                        value={bioForm.title}
                        onChange={(e) => setBioForm({ ...bioForm, title: e.target.value })}
                    />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="" className='text-sm sm:text-xs pb-1'>Email</label>
                    <input
                        type="email"
                        className='border p-1 border-[#D9D9D9] rounded-md'
                        value={bioForm.email}
                        onChange={(e) => setBioForm({ ...bioForm, email: e.target.value })}
                    />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="" className='text-sm sm:text-xs pb-1'>Phone Number</label>
                    <input
                        type="tel"
                        className='border p-1 border-[#D9D9D9] rounded-md'
                        value={bioForm.phone}
                        onChange={(e) => setBioForm({ ...bioForm, phone: e.target.value })}
                    />
                </div>
                <div className="flex lg:flex-row sm:flex-col lg:space-x-2">
                    <div className='flex flex-col w-full'>
                        <label htmlFor="" className='text-sm sm:text-xs pb-1'>LinkedIn</label>
                        <input
                            type="text"
                            className='border p-1 border-[#D9D9D9] rounded-md'
                            value={bioForm.linkedIn}
                            onChange={(e) => setBioForm({ ...bioForm, linkedIn: e.target.value })}
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="" className='text-sm sm:text-xs pb-1'>X</label>
                        <input
                            type="text"
                            className='border p-1 border-[#D9D9D9] rounded-md'
                            value={bioForm.x}
                            onChange={(e) => setBioForm({ ...bioForm, x: e.target.value })}
                        />
                    </div>
                </div>
                <div className="flex lg:flex-row sm:flex-col lg:space-x-2">
                    <div className='flex flex-col w-full'>
                        <label htmlFor="" className='text-sm sm:text-xs pb-1'>Country</label>
                        <select
                            className='border p-1 text-sm sm:text-xs border-[#D9D9D9] rounded-md'
                            value={bioForm.country}
                            onChange={(e) => setBioForm({ ...bioForm, country: e.target.value })}
                        >
                            <option value="">Select Country</option>
                            <option value="ireland">Ireland</option>
                        </select>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="" className='text-sm sm:text-xs pb-1'>City</label>
                        <select
                            className='border p-1 text-sm sm:text-xs border-[#D9D9D9] rounded-md'
                            value={bioForm.city}
                            onChange={(e) => setBioForm({ ...bioForm, city: e.target.value })}
                        >
                            <option value="">Select City</option>
                            <option value="dublin">Dublin</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="" className='text-sm sm:text-xs pb-1'>Address</label>
                    <input
                        type="text"
                        className='border p-1 border-[#D9D9D9] rounded-md'
                        value={bioForm.address}
                        onChange={(e) => setBioForm({ ...bioForm, address: e.target.value })}
                    />
                </div>
            </div>
        </div>
    );
};

// Company Information
export const CompanyForm = ({ companyForm, setCompanyForm }) => {
    return (
        <div className='my-5'>
            <div className='pb-5'>
                <h1 className='text-lg font-bold pb-1 sm:text-sm'>Company Information</h1>
                <p className='text-sm font-medium sm:text-xs'>Complete your sign up process and get started with a 1 month free trial</p>
            </div>
            <div className='flex flex-col space-y-3 text-sm sm:text-xs'>
                <div className='flex flex-col w-full'>
                    <label htmlFor="" className='text-sm pb-1'>Company Name</label>
                    <input
                        type="text"
                        className='border p-1 border-[#D9D9D9] rounded-md'
                        value={companyForm.name}
                        onChange={(e) => setCompanyForm({ ...companyForm, name: e.target.value })}
                    />
                </div>
                <div className="flex lg:flex-row lg:space-x-2 sm:flex-col">
                    <div className='flex flex-col w-full'>
                        <label htmlFor="" className='text-sm pb-1'>Country</label>
                        <select
                            className='border p-1 border-[#D9D9D9] rounded-md text-sm'
                            value={companyForm.country}
                            onChange={(e) => setCompanyForm({ ...companyForm, country: e.target.value })}
                        >
                            <option value=""></option>
                            <option value="ireland">Ireland</option>
                        </select>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="" className='text-sm pb-1'>City</label>
                        <select
                            className='border p-1 border-[#D9D9D9] rounded-md text-sm'
                            value={companyForm.city}
                            onChange={(e) => setCompanyForm({ ...companyForm, city: e.target.value })}
                        >
                            <option value=""></option>
                            <option value="dublin">Dublin</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="" className='text-sm pb-1'>Email</label>
                    <input
                        type="email"
                        className='border p-1 border-[#D9D9D9] rounded-md'
                        value={companyForm.email}
                        onChange={(e) => setCompanyForm({ ...companyForm, email: e.target.value })}
                    />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="" className='text-sm pb-1'>Website</label>
                    <input
                        type="text"
                        className='border p-1 border-[#D9D9D9] rounded-md'
                        value={companyForm.website}
                        onChange={(e) => setCompanyForm({ ...companyForm, website: e.target.value })}
                    />
                </div>
                <div className="flex lg:flex-row lg:space-x-2 sm:flex-col">
                    <div className='flex flex-col w-full'>
                        <label htmlFor="" className='text-sm pb-1'>Founding Year</label>
                        <input
                            type="number"
                            className='border p-1 border-[#D9D9D9] rounded-md'
                            value={companyForm.foundingYear}
                            onChange={(e) => setCompanyForm({ ...companyForm, foundingYear: e.target.value })}
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="" className='text-sm pb-1'>Revenue (LTM, $K)</label>
                        <input
                            type="number"
                            className='border p-1 border-[#D9D9D9] rounded-md'
                            value={companyForm.revenue.ltm}
                            onChange={(e) => setCompanyForm({ ...companyForm, revenue: { ...companyForm.revenue, ltm: e.target.value } })}
                        />
                    </div>
                </div>
                <div className="flex lg:flex-row sm:flex-col lg:space-x-2">
                    <div className='flex flex-col w-full'>
                        <label htmlFor="" className='text-sm pb-1'>Revenue (Previous year, $K)</label>
                        <input
                            type="number"
                            className='border p-1 border-[#D9D9D9] rounded-md'
                            value={companyForm.revenue.previousYear}
                            onChange={(e) => setCompanyForm({ ...companyForm, revenue: { ...companyForm.revenue, previousYear: e.target.value } })}
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="" className='text-sm pb-1'>Gross profit(LTM, $K)</label>
                        <input
                            type="number"
                            className='border p-1 border-[#D9D9D9] rounded-md'
                            value={companyForm.grossProfit.ltm}
                            onChange={(e) => setCompanyForm({ ...companyForm, grossProfit: { ...companyForm.grossProfit, ltm: e.target.value } })}
                        />
                    </div>
                </div>
                <div className="flex lg:flex-row sm:flex-col lg:space-x-2">
                    <div className='flex flex-col w-full'>
                        <label htmlFor="" className='text-sm pb-1'>Gross profit (Previous year, $K)</label>
                        <input
                            type="number"
                            className='border p-1 border-[#D9D9D9] rounded-md'
                            value={companyForm.grossProfit.previousYear}
                            onChange={(e) => setCompanyForm({ ...companyForm, grossProfit: { ...companyForm.grossProfit, previousYear: e.target.value } })}
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="" className='text-sm pb-1'>EBITDA</label>
                        <input
                            type="number"
                            className='border p-1 border-[#D9D9D9] rounded-md'
                            value={companyForm.EBITDA.ltm}
                            onChange={(e) => setCompanyForm({ ...companyForm, EBITDA: { ...companyForm.EBITDA, ltm: e.target.value } })}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Team Information
export const TeamForm = ({ teamForm, setTeamForm }) => {
    return (
        <div className='my-5'>
            <div className='pb-5'>
                <h1 className='text-lg font-bold pb-1'>Team Information (Optional)</h1>
                <p className='text-sm font-medium'>Kindly complete the necessary fields to inform us about your team (2 users only)</p>
            </div>

            <div className="flex flex-col space-y-12">
                {/* Team Member 1 */}
                <div className='relative flex flex-col space-y-5 text-sm'>
                    <h3 className='absolute right-0'>Team Member 1</h3>
                    <div className="flex flex-col space-y-2">
                        <div className='flex flex-col'>
                            <label htmlFor="" className='text-sm pb-1'>Full Name</label>
                            <input
                                type="text"
                                className='border p-2 border-[#D9D9D9] sm:text-xs rounded-md'
                                value={teamForm.team1.fullName}
                                onChange={(e) => setTeamForm({ ...teamForm, team1: { ...teamForm.team1, fullName: e.target.value } })}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='text-sm pb-1'>Role</label>
                            <input
                                type='text'
                                className='border p-2 border-[#D9D9D9] sm:text-xs rounded-md text-sm'
                                value={teamForm.team1.role}
                                onChange={(e) => setTeamForm({ ...teamForm, team1: { ...teamForm.team1, role: e.target.value } })}
                            />
                        </div>
                    </div>
                </div>

                {/* Team Member 2 */}
                <div className='relative flex flex-col space-y-5 text-sm'>
                    <h3 className='absolute right-0'>Team Member 1</h3>
                    <div className="flex flex-col space-y-2">
                        <div className='flex flex-col'>
                            <label htmlFor="" className='text-sm pb-1'>Full Name</label>
                            <input
                                type="text"
                                className='border p-2 border-[#D9D9D9] rounded-md'
                                value={teamForm.team1.fullName}
                                onChange={(e) => setTeamForm({ ...teamForm, team1: { ...teamForm.team1, fullName: e.target.value } })}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='text-sm pb-1'>Role</label>
                            <input
                                type='text'
                                className='border p-2 border-[#D9D9D9] rounded-md text-sm'
                                value={teamForm.team1.role}
                                onChange={(e) => setTeamForm({ ...teamForm, team1: { ...teamForm.team1, role: e.target.value } })}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Login Credentials
export const Logins = ({ loginCredentials, setLoginCredentials }) => {
    return (
        <div className='my-5'>
            <div className='pb-5'>
                <h1 className='text-lg font-bold pb-1 sm:text-sm'>Login Credentials</h1>
                <p className='text-sm font-medium sm:text-xs'>Enter your team log in email and password to complete sign up process</p>
            </div>
            <div className='relative flex flex-col space-y-5 text-sm'>
                <div className="flex flex-col space-y-2">
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-sm pb-1'>Email</label>
                        <input
                            type="email"
                            className='border p-2 border-[#D9D9D9] rounded-md sm:text-xs'
                            value={loginCredentials.email}
                            onChange={(e) => setLoginCredentials({ ...loginCredentials, email: e.target.value })}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-sm pb-1'>Password</label>
                        <input
                            type='password'
                            className='border p-2 border-[#D9D9D9] rounded-md text-sm sm:text-xs'
                            value={loginCredentials.password}
                            onChange={(e) => setLoginCredentials({ ...loginCredentials, password: e.target.value })}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-sm pb-1'>Confirm Password</label>
                        <input
                            type='password'
                            className='border p-2 border-[#D9D9D9] rounded-md text-sm sm:text-xs'
                            value={loginCredentials.password2}
                            onChange={(e) => setLoginCredentials({ ...loginCredentials, password2: e.target.value })}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Email Verification
export const EmailVerification = ({ code, setCode, handleVerification }) => {
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const { value } = e.target;
        if (/[^0-9]/.test(value)) return; // Only allow digits

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        // Move to the next input if there is a value
        if (value && index < 4) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div>
            <div className='pb-10'>
                <h1 className='text-lg font-bold pb-1'>Email Verification</h1>
                <p className='text-sm font-medium'>Check your email for a 5 digits OTP , input them in the field below and verify your email</p>
            </div>
            <div className="flex flex-col space-y-4">
                <div className="flex justify-center lg:space-x-14 sm:space-x-4">
                    {code.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            ref={(el) => (inputRefs.current[index] = el)}
                            className="lg:w-12 lg:h-12 sm:w-8 sm:h-8 text-center text-2xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    ))}
                </div>
                <button
                    value="Complete"
                    onClick={handleVerification}
                    className="w-full py-2 bg-[#03AAC1] hover:bg-[#0691A5] text-white rounded cursor-pointer sm:text-sm">Complete</button>
            </div>
        </div>
    );
};
