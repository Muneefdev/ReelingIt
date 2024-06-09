import "server-only";
import sql from "@/db/postgres";

export async function getMovies() {
  const movies = await sql`SELECT * FROM movies LIMIT 5`;
  return movies;
}
getMovies();
