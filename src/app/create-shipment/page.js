"use client"
import React, { useState } from "react";

const CreateShipments = () => {
    const [customername, setCustomername] = useState('')
    const [shipmentstatus, setShipmentstatus] = useState('')
    const [destinationaddress, setDestinationaddress] = useState('')
    const [driverid, setDriverid] = useState('')
    const [planneddeliverydate, setPlanneddeliverydate] = useState('')

    const shipment = async () => {
        let response = await fetch("/api/create-shipment", {
            method: 'Post',
            body: JSON.stringify({  customername, shipmentstatus, destinationaddress, driverid, planneddeliverydate })

        });
        response = await response.json();
        if (response.success) {
            alert('New Shipment added....')
        }
        else {
            alert('Error...')
        }
        console.log(response)
    }

    return (
        <div className=" min-h-screen bg-gray-200">
            <div className="flex  max-w-md mx-auto bg-white rounded shadow-lg">
                <div className="my-5  font-semibold mb-4 text-center">
                    <h1 className="text-indigo-950 text-xl font-bold">New Shipment</h1>
                    
                    <div className="my-7">
                        <div>
                        </div>
                        <div>
                           
                            <input
                                type="text"
                                name="customername"
                                value={customername}
                                placeholder="Customer Name"
                                className="w-96 border border-gray-600 rounded px-3 py-4 mt-1 mx-9 my-2 focus:outline-none focus:ring focus:border-blue-300"
                                onChange={(e) => setCustomername(e.target.value)} >
                            </input>
                        </div>
                        <div>
                            
                            <select
                                value={shipmentstatus}
                                name="shipmentstatus"
                                className="w-96 border border-gray-600 rounded px-3 py-4 mt-1 mx-9 my-2 focus:outline-none focus:ring focus:border-blue-300"
                                onChange={(e) => setShipmentstatus(e.target.value)}>
                                <option value="" >select status</option>
                                <option value="intransit">In Transit</option>
                                <option value="pending">Pending</option>
                                <option value="delivered">Delivered</option>
                            </select>
                        </div>
                        <div>
                            
                            <input
                                type="text"
                                value={destinationaddress}
                                name="destinationaddress"
                                placeholder="Destination Address"
                                className="w-96 border rounded border-gray-600 px-3 py-4 mt-1 my-2 mx-9 focus:outline-none focus:ring focus:border-blue-300"
                                onChange={(e) => setDestinationaddress(e.target.value)}>
                            </input>
                        </div>
                        
                        <input
                            type="number"
                            name="driverId"
                            value={driverid}
                            placeholder="Driver ID"
                            className="w-96 border border-gray-600 rounded px-3 py-4 mt-1 mx-9 my-2 focus:outline-none focus:ring focus:border-blue-300"
                            onChange={(e) => setDriverid(e.target.value)}>
                        </input>
                    </div>
                    <div>
                        <label>Planned Delivery Date</label>
                        <input
                            type="date"
                            name="planneddeliverydate"
                            value={planneddeliverydate}
                            placeholder="Planned Delivery Date"
                            className="w-96 border border-gray-600 rounded px-3 py-2 mt-1 mx-9 my-2 focus:outline-none focus:ring focus:border-blue-300"
                            onChange={(e) => setPlanneddeliverydate(e.target.value)}></input>
                    </div>
                    {/* Submit button */}
                    <button className="max-w-screen-2xl text-lg px-5 py-3 mx-2 my-2 bg-indigo-800 text-white font-bold rounded hover:bg-blue-600 transition duration-300"
                        onClick={shipment}>
                        Submit
                    </button>

                </div>
            </div>

        </div>
    )
}

export default CreateShipments;