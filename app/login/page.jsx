'use client';
import { Suspense } from 'react';
import LoginForm from '@/components/LoginForm';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn } from 'next-auth/react';

const PageContent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const searchParams = useSearchParams();
    const isSignup = searchParams.get('signup');

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
        <>
            <ToastContainer />
            <LoginForm email={email} password={password} setPassword={setPassword} setEmail={setEmail} handleSubmit={handleSubmit} />
        </>
    );
};

const Page = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PageContent />
        </Suspense>
    );
};

export default Page;
