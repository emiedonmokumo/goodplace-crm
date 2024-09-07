'use client'
import LoginForm from '@/components/LoginForm'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn } from 'next-auth/react';


const page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams()
    const isSignup = searchParams.get('signup')

    useEffect(() => {
        if (isSignup) {
            toast.success('Signup Successful'); // Perform any action if signup is true
        }
    }, [isSignup]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle login logic here
        await signIn('credentials', {
            email,
            password,
            redirect: true,
            callbackUrl: '/dashboard'
        });
    };
    return (
        <Suspense fallback={<h1 className='text-xl font-bold'>Loading...</h1>}>
            <ToastContainer />
            <LoginForm email={email} password={password} setPassword={setPassword} setEmail={setEmail} handleSubmit={handleSubmit} />
        </Suspense>
    )
}

export default page
