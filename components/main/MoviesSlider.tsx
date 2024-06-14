import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel";
import MovieCard from "@/components/sub/MovieCard";
import type { Movie } from "@/types";

type MoviesSliderProps = {
   label: string;
   movies: Movie[];
};

export default function MoviesSlider({ label, movies }: MoviesSliderProps) {
   return (
      <div>
         <h2 className="mb-1 text-sm tracking-tight text-[#ccc]">{label}</h2>
         <Carousel>
            <CarouselContent>
               {movies.map((movie) => (
                  <CarouselItem key={movie.id} className="basis-1.3/5">
                     <MovieCard {...movie} />
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
         </Carousel>
      </div>
   );
}
