import postgres from "postgres";

let sql: postgres.Sql<{}> | undefined;

  if (sql === undefined) {
    sql = postgres(process.env.database_connection!,
      { max: 5, idle_timeout: 60 }
    );
  }

export default sql;

