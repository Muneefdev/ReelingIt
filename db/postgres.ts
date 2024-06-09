import postgres from "postgres";

const sql = postgres(process.env.database_connection!) ;

export default sql;
