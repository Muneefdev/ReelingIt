import MainSliders from "@/components/main/MainSliders";
import MovieCard from "@/components/sub/MovieCard";
import { getMoviesBySearch } from "@/lib/data";
import { Movie } from "@/types";

type HomeProps = {
   searchParams: { search: string };
};

export default async function Home({ searchParams }: HomeProps) {
   let moviesBySearch: Movie[] | null = [];
   if (searchParams.search !== "") {
      moviesBySearch = await getMoviesBySearch(searchParams.search);
   }

   return (
      <>
         {moviesBySearch.length > 0 && (
            <div className="container max-w-[1000px] mx-auto">
               <h1 className="text-white text-xl font-semibold my-8">
                  Search results for: <span className="text-red-400">{searchParams.search}</span>
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
