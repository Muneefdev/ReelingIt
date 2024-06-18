import MovieActors from "../components/MovieActors";
import MovieGallery from "../components/MovieGallery";

interface MovieInfoProps {
   params: {
      id: string;
   }
}

export default async function MovieInfo({ params }: MovieInfoProps) {
   return (
      <div className="container h-full text-white">
         <MovieGallery id={params.id} />
         <MovieActors/>
      </div>
   )
}
