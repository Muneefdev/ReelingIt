import { MoviesDataAPI } from "@/lib/data";
import MovieGallery from "../components/MovieGallery";
import MovieActorsAndAbstract from "../components/MovieActorsAndAbstract";

type MovieInfoProps = {
   params: {
      id: string;
   }
}

export default async function MovieInfo({ params }: MovieInfoProps) {
   const [movie, actors] = await Promise.all([
      MoviesDataAPI.getMovieById(+params.id),
      MoviesDataAPI.getActorsByMovieId(+params.id),
   ]);

   return (
      <div className="container h-full text-white">
         <MovieGallery movie={movie} />
         <MovieActorsAndAbstract movieId={params.id} actors={actors} />
      </div>
   )
}
