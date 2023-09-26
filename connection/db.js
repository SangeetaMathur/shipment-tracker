import { Pool } from "pg";

// Create a PostgreSQL database connection pool

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "shipments",
    password: "sangeeta67",
    port: 5432,
    idleTimeoutMillis: 1,
    max: 10,
    connectionTimeoutMillis: 2000,

});

module.exports = pool;
