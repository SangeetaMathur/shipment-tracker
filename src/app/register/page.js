"use client"
import React, { useState } from "react";
import { useRouter } from 'next/navigation'

const register = () => {

    const [username, setFullName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [role, setRole] = useState()
    const [vehicleno, setVehicleno] = useState()
    const [licenseno, setLicenseno] = useState()
    const [contactno, setContactno] = useState()
    const router = useRouter();

    const registerUser = async () => {
        debugger;
        let response = await fetch("/api/register", {
            method: 'Post',
            body: JSON.stringify({ username, email, password, role, vehicleno, licenseno, contactno })
        });
        response = await response.json();
        if (response.success) {
            alert("Registration Successful..")
            router.push('/login');
        } else {
            alert("Error....")
        }
        console.log(response)
    }

    if (role === 'driver') {

    }

    return (
        <main className="bg-gray-200  flex min-h-screen flex-col items-center justify-between p-12 ">

            <div className="bg-grey-lighter min-h-screen">
                <div className="container w-96 flex-1  items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-2xl  text-black w-full ">
                        <h1 className="mb-8 text-3xl text-center">Register</h1>
                        <div className="grid grid-cols-2">
                            <label className='px-2 text-slate-900 font-bold'>Username</label>
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="username"
                                value={username}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Username" required />

                            <label className='px-2 text-slate-900 font-bold'>Email</label>
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email" required />

                            <label className='px-2 text-slate-900 font-bold'>Password</label>
                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password" required />
                            <label className='px-2 text-slate-900 font-bold'>Role</label>
                            <select data-te-select-init className='mx-1 w-full h-9 block border border-grey-light rounded py-2' name="role" value={role}
                                onChange={(e) => setRole(e.target.value)}>
                                {/* <option value="" hidden selected></option> */}
                                <option className="block border border-grey-light w-full p-3 rounded mb-4">Select Role</option>

                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                                <option value="driver">Driver</option>
                            </select>

                            {role === 'driver' && (
                                <div htmlFor="driverinfo" className="my-4 grid grid-cols-2">
                                    
                                    <label className='px-2 text-slate-900 font-bold'>VehicleNo.</label>
                                    <input
                                        type="text"
                                        className="block border border-grey-light w-40 p-3 rounded mb-4 mx-20"
                                        name="vehicleno"
                                        value={vehicleno}
                                        onChange={(e) => setVehicleno(e.target.value)}
                                        placeholder="Vehicle No." />
                                    <label className='px-2 text-slate-900 font-bold'>LicenseNo.</label>
                                    <input
                                        type="text"
                                        className="block border border-grey-light  p-3 rounded mb-4 w-40 mx-20"
                                        name="licenseno"
                                        value={licenseno}
                                        onChange={(e) => setLicenseno(e.target.value)}
                                        placeholder="License No. " />
                                    <label className='px-2 text-slate-900 font-bold'>ContactNo.</label>
                                    <input
                                        type="number"
                                        className="block border border-grey-light p-3 rounded mb-4 w-40 mx-20"
                                        name="contactno"
                                        value={contactno}
                                        onChange={(e) => setContactno(e.target.value)}
                                        placeholder="Contact No." />
                                </div>
                            )}
                            </div>
                            <button className="bg-indigo-800 my-5 items-center hover:bg-indigo-900 text-white font-bold py-2 px-4 border border-blue-700 rounded "
                                onClick={registerUser}>
                                Submit
                            </button>
                        
                    </div>
                </div>
            </div>
        </main>
    )
}

export default register;