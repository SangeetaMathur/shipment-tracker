"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

const UsersTable = () => {
    const [users, setUsers] = useState([])

    useEffect(async () => {
        let data = await fetch("api/displayusers")
        data = await data.json();
        setUsers(data.data || []);
        console.log(data);
    }, []);

    return (
        <div className='bg-slate-200  flex min-h-screen flex-col items-center justify-between p-4 '>
            <div className='bg-slate-100 text-center items-center  rounded-xl w-full flex flex-col shadow-2xl'>
                <h2 className='text-center text-4xl w-full bg-stone-500 p-4 text-white rounded-xl '>List Of All Users</h2>
                <div className=''>
                <table className="border-separate [border-spacing:0.75rem] ">
                    <thead>
                        <tr className='p-4 gap-4 '>
                            <th className='col'>User ID</th>
                            <th className='col'>Username</th>
                            <th className='col'>Email</th>
                            {/* <th className='col'>password</th> */}
                            <th className='col'>Role</th>
                            <th className='col'>Driver ID</th>
                            <th className='col'>Vehicle No.</th>
                            <th className='col'>License No.</th>
                            <th className='col'>Contact No.</th>
                            <th className='col'>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.userid}>
                                <td>{user.userid}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                {/* <td>{user.password}</td> */}
                                <td>{user.role}</td>
                                <td>{user.driverid}</td>
                                <td>{user.vehicleno}</td>
                                <td>{user.licenseno}</td>
                                <td>{user.contactno}</td>
                                <td>
                                    <Link href="/edituser" className='text-red-500 m-1'>Edit</Link>
                                    <Link href="/deleteuser" className='text-red-500 m-1'>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
}

export default UsersTable;