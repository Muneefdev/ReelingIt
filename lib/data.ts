import "server-only";
import sql from "@/db/postgres";
import type { Movie, Actor } from "@/types";

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

async function getActorsByMovieId(id: number): Promise<Actor[]> {
   let actors: Actor[] = [];
   try {
      actors = await sql!<Actor[]>`
      SELECT p.id, p.name
      FROM people p
      INNER JOIN casts c
      ON p.id = c.person_id
      INNER JOIN movies m
      ON m.id = c.movie_id
      WHERE m.id = ${id}
      ORDER BY p.name
      LIMIT 8`
   } catch (error) {
      console.error(`#GET_ACTORS_BY_MOVIE_ID - ${error}`);
   }
   return actors;
}

async function getMovieAbstract(id: number): Promise<string | null> {
   let rows: { abstract: string }[] = [];
   try {
      rows = await sql!`
      SELECT abstract
      FROM movie_abstracts_en
      WHERE movie_id = ${id}`
   } catch (error) {
      console.error(`#GET_MOVIE_ABSTRACT - ${error}`);
   }

   if (rows.length === 0) return null;
   return rows[0].abstract;
}

async function getMovieCategories(id: number): Promise<{ id: number, name: string }[]> {
   let categories: { id: number, name: string }[] = [];
   try {
      categories = await sql!`
      SELECT c.id, c.name
      FROM movie_keywords mk
      INNER JOIN movies m
      ON m.id = mk.movie_id
      INNER JOIN categories c
      ON c.id = mk.category_id
      WHERE m.id = ${id}
      LIMIT 5`
   } catch (error) {
      console.error(`#GET_MOVIE_CATEGORIES - ${error}`);
   }
   return categories;
}

export const MoviesDataAPI = {
   getMovies,
   getMovieByYear,
   getMoviesWeeksTopTen,
   getMoviesBySearch,
   getMovieById,
   getActorsByMovieId,
   getMovieAbstract,
   getMovieCategories
};
