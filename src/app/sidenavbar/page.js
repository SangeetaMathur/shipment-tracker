import Link from "next/link";


export default function Sidenavbar () {
    return (
        <div className="my-20 p-6 w-1/2 h-screen bg-slate-400  z-20 fixed top-0 left-96 lg:w-60 lg:left-0 peer-focus:left-0  peer:transition ease-out dealy-150 duration-200">
            <div className="flex flex-col justify-start items-center ">
                <h1 className="text-base text-center cursor-pointer font-bold text-black border-b border-gray-600 pb-4 w-full">
                    Admin Dashboard
                </h1>
                
                <div className="flex mb-2 justify-start items-start gap-4 pl-5 hover:bg-gray-400 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <Link href="/admin-dashboard" className="text-base text-gray-950 group-hover:text-white font-semibold">Home</Link>

                </div>
                <div className="flex mb-2 justify-start items-start gap-4 pl-5 hover:bg-gray-400 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <Link href="/displayshipments" className="text-base text-gray-950 group-hover:text-white font-semibold">Manage Shipments</Link>

                </div>
                <div className="flex mb-2 justify-start items-start gap-4 pl-5 hover:bg-gray-400 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <Link href="/displayusers" className="text-base text-gray-950 group-hover:text-white font-semibold">Manage Drivers</Link>

                </div>
                
                

                {/* Logout section */}
                <div className="my-60 ">
                    <div className="flex justify-start items-center gap-4 px-5 hover:bg-slate-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        <h3 className="text-base text-gray-950 group-hover:text-white font-semibold">Logout</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}