'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [role,setRole] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
 
    const userData = { username, password};
          
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      console.log(response,"Got response");
      if (response.status === 201 ) {
        console.log(response.data);
        // Login successful
        const data = await response.json();
        console.log('Login successfully',data);

        const userRole = data.role;
        
        // Checking if user is admin or not
        if (userRole === "admin") {
          router.push('/admin-dashboard')
        }
        else {
          console.log("User login");
          router.push('/dashboard');
        }
       
      } else {
        // Handle login failure
        const data = await response.json();
        console.error('Login failed:', data.error);

      }
    } catch (error) {
      console.error('Error during Login:', error);
    }
  };


  return (

    <div className='bg-gray-200  flex min-h-screen flex-col items-center justify-between p-12'>
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow-2xl " >
      <h2 className="text-3xl font-extrabold mb-4 text-center">Login</h2>
      <label className="block mb-2">
        <span className="text-gray-700 font-bold text-lg">Username</span>
        <input
          className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      
      <label className="block mb-2">
        <span className="text-gray-700 font-bold text-lg">Password</span>
        <input
          className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button
        className="w-full bg-indigo-800 text-white rounded px-3 py-2 mt-4 hover:bg-blue-600 transition duration-300"
        onClick={handleLogin}
      >
        Login
      </button>
      <Link href="/register" className="text-center block mt-2 text-indigo-800 hover:underline">
        Register Here
      </Link>
    </div>
    </div>
  );
}