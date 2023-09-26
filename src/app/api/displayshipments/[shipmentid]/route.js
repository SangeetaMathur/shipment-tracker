import { NextResponse } from "next/server";
import pool from '../../../../../connection/db';


export async function GET(request) {
  const { shipmentid } = request.params; 

  try {
    // Fetching data for a particular shipment based on the provided shipmentId
    const selectQuery = `SELECT * FROM shipment WHERE shipmentid = $1`;

    // Executing the SELECT query with the shipmentId as a parameter
    const client = await pool.connect();
    const result = await client.query(selectQuery, [shipmentid]);
   
    // Check if there are results
    if (result.rows.length > 0) {
      return NextResponse.json({ data: result.rows[0], success: true }, { status: 200 }); 
    } else {
      return NextResponse.json({ result: "Shipment not found", success: false }, { status: 404 });
    }
  } catch (error) {
    console.error("Error executing SQL query:", error);
    return NextResponse.json({ result: "Database error", success: false }, { status: 500 });
  }
}
