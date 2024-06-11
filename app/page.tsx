import MoviesSlider from "@/components/main/MoviesSlider";
import { getMovieByYear, getMovies, getMoviesWeeksTopTen } from "@/lib/data";

export default async function Home() {
  const [movies, moviesByYear, moviesTopTen] = await Promise.all([
    getMovies(),
    getMovieByYear(2021),
    getMoviesWeeksTopTen()
  ]);

  return (
    <section className="min-h-screen  max-h-[1000px] max-w-[850px] w-[850px] mx-auto mt-12 space-y-4">
      <MoviesSlider label="THIS WEEK'S TOP 10" movies={moviesTopTen} />
      <MoviesSlider label="2021 BEST HITS" movies={moviesByYear} />
      <MoviesSlider label="BASED ON TRUE STORIES" movies={movies} />
    </section >

  );
}
