'use client'
import React from 'react'
import { signOut } from 'next-auth/react';

const page = () => {
  return (
    <div className='flex justify-between items-center p-3 sm:flex-col my-8'>
      <div className='mb-8'>
        <h1 className="text-4xl font-bold text-center">Welcome to your Dashboard</h1>
        <h4>Dashboard page in progress..</h4>
      </div>
      <button onClick={() => signOut({ callbackUrl: '/login' })} className='bg-red-500 hover:bg-red-700 text-white rounded-md p-3 sm:text-sm'>Logout</button>
    </div>
  )
}

export default page
