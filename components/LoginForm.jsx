import React, { useState } from 'react';
import Link from 'next/link';

const LoginForm = ({ handleSubmit, email, setEmail, password, setPassword }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white border rounded-md">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/GoodPlace CRM - Logo-1 1.png" // Replace with your logo path
            alt="GoodPlace CRM"/>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
              Company email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-[#03AAC1] rounded-md hover:bg-[#0691A5] focus:outline-none focus:bg-teal-600"
          >
            Complete
          </button>
          <div className="flex items-center justify-between mt-4">
            <label className="inline-flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="text-teal-500 border-gray-300 rounded focus:ring-teal-500"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-sm text-teal-500 hover:underline">
              Forgot your password?
            </a>
          </div>
        </form>
        <div className="mt-6 text-center">
          <Link href="/signup" className="text-sm text-teal-500 hover:underline">
            Not a customer? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
