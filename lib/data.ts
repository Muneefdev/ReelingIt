import "server-only";
import sql from "@/db/postgres";
import { Movie } from "@/types";

export async function getMovies(limit: number = 10): Promise<Movie[]> {
  let movies: Movie[] = [];
  try {
    movies = await sql!<Movie[]>`
      SELECT id, name, CAST(date AS VARCHAR)
      FROM movies 
      WHERE date IS NOT NULL
      ORDER BY date DESC
      LIMIT ${limit}`;
  } catch (error) {
    console.error(`#GET_MOVIES - ${error}`);
  }

  return movies;
}

export async function getMovieByYear(year: number): Promise<Movie[]> {
  let movies: Movie[] = [];
  try {
    movies = await sql!<Movie[]>`
      SELECT id, name, CAST(date AS VARCHAR)
      FROM movies 
      WHERE date IS NOT NULL
      AND DATE_PART('year', date) = ${year}
      ORDER BY date DESC`;
  } catch (error) {
    console.error(`#GET_MOVIE_BY_YEAR - ${error}`);
  }
  return movies;
}

export async function getMoviesWeeksTopTen(): Promise<Movie[]> {
  let movies: Movie[] = [];
  try {
    movies = await sql!<Movie[]>`
      SELECT id, name, CAST(date AS VARCHAR)
      FROM movies 
      WHERE date IS NOT NULL
      AND date >= CURRENT_DATE - INTERVAL '7 days'`
  } catch (error) {
    console.error(`#GET_MOVIES_WEEKS_TOP_TEN - ${error}`);
  }
  return movies;
}
