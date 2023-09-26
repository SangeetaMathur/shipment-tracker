import { NextResponse } from "next/server";
import pool from '../../../../connection/db'

export async function POST(request) {
    let payload = await request.json();
    console.log(payload, "shipmentssssss");

    if ( !payload.customername || !payload.shipmentstatus || !payload.destinationaddress || !payload.driverid || !payload.planneddeliverydate){
        return NextResponse.json({ result: "Please enter all fields...", success: false }, { status: 400 })
    }
    // else{
    //     return NextResponse.json({ result:"Shipment created successfully...",success:true},{status:200})
    // }

    try {
        // inserting data using insert query
        const insertQuery = `Insert into shipment (customername,shipmentstatus,destinationaddress,driverid,planneddeliverydate) VALUES ($1, $2, $3, $4, $5)`;  

        const values = [
            payload.customername,
            payload.shipmentstatus,
            payload.destinationaddress,
            payload.driverid,
            payload.planneddeliverydate];

            console.log(values,"all values.....")

        //Executing insert query
        const client = await pool.connect();
        const result = await client.query(insertQuery,values);

        if (result.rowCount === 1) {
            return NextResponse.json({ result: "New shipment added...", success: true }, { status: 201 });
          } 
          else {
            return NextResponse.json({ result: "....error....", success: false }, { status: 404 });
          }
        } catch (error) {
          console.error("Error executing SQL query:", error);
          return NextResponse.json({ result: "Database error", success: false }, { status: 500 });
        }
}
