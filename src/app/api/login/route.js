import { NextResponse } from "next/server";
import pool from "../../../../connection/db";

export async function POST(request) {
  let payload = await request.json();
  console.log(payload, 'payload');

  if (!payload.password || !payload.username) {
    return NextResponse.json({ result: "Required field not found", success: false }, { status: 400 });
  }

  try {
    const query = "SELECT * FROM users WHERE username = $1 AND password = $2";
    const values = [payload.username, payload.password];
    console.log(values, 'values');

    const client = await pool.connect();
    const result = await client.query(query, values);

    if (result.rows.length >= 1) {
      const user = result.rows[0];
      const userRole = user.role; 

      if (userRole === "admin") {
        return NextResponse.json(
          {
            data: user,
            result: "Admin Login Successfully",
            success: true
          },
          { status: 201 }
        );
      } else if (userRole === "driver" || userRole === "user") {
        return NextResponse.json(
          {
            data: user,
            result: "Driver Login Successfully",
            success: true
          },
          { status: 201 }
        );
      } else {
        return NextResponse.json(
          { result: "Unknown role", success: false },
          { status: 403 }
        ); // Forbidden
      }
    } else {
      return NextResponse.json(
        { result: "Invalid username or Password", success: false },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error executing SQL query:", error);
    return NextResponse.json({ result: "Database error", success: false }, { status: 500 });
  }
}
