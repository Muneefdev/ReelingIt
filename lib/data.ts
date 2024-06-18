import "server-only";
import sql from "@/db/postgres";
import { Movie } from "@/types";

/*
 * BIG NOTE:
 * Postgresjs driver gives the SQL`` function is a JavaScript tagged function.
 * It allow to write queries in a more readable way. It is a wrapper around the `pg` library.
 * So there is no SQL injection here, all parameters are escaped and sanitized
 * inside the function by the driver.
 */

async function getMovies(limit: number = 10): Promise<Movie[]> {
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

async function getMovieByYear(year: number): Promise<Movie[]> {
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

async function getMoviesWeeksTopTen(): Promise<Movie[]> {
   let movies: Movie[] = [];
   try {
      movies = await sql!<Movie[]>`
      SELECT id, name, CAST(date AS VARCHAR)
      FROM movies
      WHERE date IS NOT NULL
      AND date >= CURRENT_DATE - INTERVAL '7 days'`;
   } catch (error) {
      console.error(`#GET_MOVIES_WEEKS_TOP_TEN - ${error}`);
   }
   return movies;
}

async function getMoviesBySearch(name: string): Promise<Movie[]> {
   let movies: Movie[] = [];
   try {
      movies = await sql!<Movie[]>`
      SELECT id, name, CAST(date AS VARCHAR)
      FROM movies
      WHERE name ILIKE ${name + '%'}
      AND date IS NOT NULL
      LIMIT 20`;
   } catch (error) {
      console.error(`#GET_MOVIES_BY_SEARCH - ${error}`);
   }
   return movies;
}

async function getMovieById(id: number): Promise<Movie> {
   let movies: Movie[] = [];
   try {
      movies = await sql!<Movie[]>`
      SELECT id, name, CAST(date AS VARCHAR)
      FROM movies
      WHERE id = ${id}`;
   } catch (error) {
      console.error(`#GET_MOVIE_BY_ID - ${error}`);
   }
   return movies[0];
}

export const MoviesDataAPI = {
   getMovies,
   getMovieByYear,
   getMoviesWeeksTopTen,
   getMoviesBySearch,
   getMovieById,
};
