import { NextResponse } from "next/server";
import pool from '../../../../connection/db'

export async function POST(request) {
  let payload = await request.json();
  console.log(payload, 'registration details');

  // checking for role
  
  if(payload.role === 'driver')
  {
    if (!payload.username || !payload.email || !payload.password || !payload.role || !payload.vehicleno || !payload.licenseno || !payload.contactno) {
      return NextResponse.json({ result: "Enter all required fields", success: false }, { status: 400 })
  } 
  }else{
    if (!payload.username || !payload.email || !payload.password || !payload.role) {
      return NextResponse.json({ result: "Enter all required fields", success: false }, { status: 400 })
  } 
  }
   
  
   
  try {
    // inserting data into users table using insert query
    
    const insertQueryForUser = `INSERT INTO users (username, email, password, role, vehicleno, licenseno, contactno) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    
    // inserting data into drivers table using insert query 
    const insertQueryForDriver = `INSERT INTO drivers (driverid,vehicleno, licenseno, contactno) VALUES ($1,$2, $3, $4)`;
                                     
      //Executing insert query
      const client = await pool.connect();
      const userResult = await client.query(insertQueryForUser, [
        payload.username,
        payload.email,
        payload.password,
        payload.role,
        payload.vehicleno,
        payload.licenseno,
        payload.contactno
      ]);
        // Check if the user insertion was successful
    if (userResult.rowCount === 1) {
      // If the role is 'driver', execute the insert query for drivers
      if (payload.role === 'driver') {

        const selectQuery = `SELECT driverid from users WHERE username=$1`;
        const result = await client.query(selectQuery, [payload.username]);
        client.release();

    // Processing the query result
      const rows = result.rows;
      var columnValue;
      for (const row of rows) {
        columnValue = row.driverid; 
      }

        const driverResult = await client.query(insertQueryForDriver, [
          columnValue,
          payload.vehicleno,
          payload.licenseno,
          payload.contactno
        ]);

        if (driverResult.rowCount === 1) {
          return NextResponse.json({ result: "New driver registered...", success: true }, { status: 201 });
        } else {
          return NextResponse.json({ result: "Failed to register driver", success: false }, { status: 500 });
        }
      }

      return NextResponse.json({ result: "New user registered...", success: true }, { status: 201 });
    } else {
      return NextResponse.json({ result: "Failed to register user", success: false }, { status: 500 });
    }
      
    
} catch (error) {
  console.error("Error inserting user:", error);
  return NextResponse.json({ result: "Internal server error", success: false }, { status: 500 });
}
};

