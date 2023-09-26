"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

const ShipmentTable = () => {  
    
    const [shipments,setShipments] = useState([])
    
  useEffect(async() => {
    let data = await fetch("api/displayshipments")
    data = await data.json();
    setShipments(data.data||[]);
    console.log(data);
  }, []);

  return (
    <div className='bg-slate-200  flex min-h-screen flex-col items-center justify-between p-4'>
      <div className='bg-slate-100 text-center rounded-xl'>
      <h2 className='text-center text-4xl bg-stone-500 p-4 text-white rounded-xl '>List of Shipment</h2>
      
      <table className="border-separate [border-spacing:0.75rem]">
        <thead>
          <tr className='p-4 gap-4 '>
            <th className='col'>Shipment ID</th>
            <th className='col'>Customer Name</th>
            <th className='col'>Shipment Status</th>
            <th className='col'>Assigned Driver ID</th>
            <th className='col'>Planned Delivery Date</th>
            <th className='col'>Actual Delivery Date</th>
            <th className='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment) => (
            <tr key={shipment.shipmentid}>
              <td>{shipment.shipmentid}</td>
              <td>{shipment.customername}</td>
              <td>{shipment.shipmentstatus}</td>
              <td>{shipment.driverid}</td>
              <td>{shipment.planneddeliverydate}</td>
              <td>{shipment.actualdeliverydate}</td>
              <td>
                <Link href="/editshipment" className='text-red-500 m-1'>Edit</Link>
                <Link href="/deleteshipment" className='text-red-500 m-1'>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  );
};

export default ShipmentTable;