import MoviesSlider from "@/components/main/MoviesSlider";
import { getMovieByYear, getMovies, getMoviesWeeksTopTen } from "@/lib/data";

export default async function MainSliders() {
   const [movies, moviesByYear, moviesTopTen] = await Promise.all([
      getMovies(),
      getMovieByYear(2021),
      getMoviesWeeksTopTen(),
   ]);

   return (
      <section className="mx-auto mt-12 max-h-[1000px] min-h-screen w-[850px] max-w-[850px] space-y-4">
         <MoviesSlider label="THIS WEEK'S TOP 10" movies={moviesTopTen} />
         <MoviesSlider label="2021 BEST HITS" movies={moviesByYear} />
         <MoviesSlider label="BASED ON TRUE STORIES" movies={movies} />
      </section>
   );
}
