import { NextResponse } from "next/server";
import pool from '../../../../connection/db';

export async function GET(request) {
  try {
    // Fetching data from database using SELECT query
    const selectQuery = `SELECT * FROM shipment`;

    // Executing the SELECT query
    const client = await pool.connect();
    const result = await client.query(selectQuery);

    // Check if there are results
    if (result.rows.length > 0) {
      return NextResponse.json({ data: result.rows, success: true }, { status: 200 });
    } else {
      return NextResponse.json({ result: "No data found", success: false }, { status: 404 });
    }
  } catch (error) {
    console.error("Error executing SQL query:", error);
    return NextResponse.json({ result: "Database error", success: false }, { status: 500 });
  }
}
