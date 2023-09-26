"use client"

import Link from "next/link"


export default function Navbar() {
    return (
      
        <div className="w-full h-20 bg-violet-950 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
           <h2 className="text-white text-2xl">Shipment Tracker</h2>
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
              <Link href="/register">Register</Link>
              </li>
              <li>Contact Us</li>
            </ul>
        
          </div>
        </div>
      </div>
    )
}