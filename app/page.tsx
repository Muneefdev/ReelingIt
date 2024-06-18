import MainSliders from "@/components/main/MainSliders";
import MovieCard from "@/components/sub/MovieCard";
import { MoviesDataAPI } from "@/lib/data";
import { Movie } from "@/types";

type HomeProps = {
   searchParams: { search: string };
};

export default async function Home({ searchParams }: HomeProps) {
   let moviesBySearch: Movie[] = [];
   if (searchParams.search !== "") {
      moviesBySearch = await MoviesDataAPI.getMoviesBySearch(searchParams.search);
   }

   return (
      <>
         {moviesBySearch.length > 0 && (
            <div className="container mx-auto max-w-[1000px]">
               <h1 className="my-8 text-xl font-semibold text-white">
                  Search results for:
                  <span className="text-red-400">{searchParams.search}</span>
               </h1>
               <div className="grid grid-cols-3 justify-items-center sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                  {moviesBySearch.map((movie) => (
                     <MovieCard key={movie.id} {...movie} />
                  ))}
               </div>
            </div>
         )}
         {moviesBySearch.length === 0 && <MainSliders />}
      </>
   );
}
