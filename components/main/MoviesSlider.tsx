"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import MovieCard from "@/components/sub/MovieCard";

interface MoviesSliderProps {
  label: string;
}
export default function MoviesSlider({ label }: MoviesSliderProps) {
  return (
    <div>
      <h2 className="text-[#ccc] text-sm mb-1 tracking-tight">{label}</h2>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1.3/3"><MovieCard title="Interstellar" year={2014} /></CarouselItem>
          <CarouselItem className="basis-1.3/5"><MovieCard title="Interstellar" year={2014} /></CarouselItem>
          <CarouselItem className="basis-1.3/5"><MovieCard title="Interstellar" year={2014} /></CarouselItem>
          <CarouselItem className="basis-1.3/5"><MovieCard title="Interstellar" year={2014} /></CarouselItem>
          <CarouselItem className="basis-1.3/5"><MovieCard title="Interstellar" year={2014} /></CarouselItem>
          <CarouselItem className="basis-1.3/5"><MovieCard title="Interstellar" year={2014} /></CarouselItem>
          <CarouselItem className="basis-1.3/5"><MovieCard title="Interstellar" year={2014} /></CarouselItem>
          <CarouselItem className="basis-1.3/5"><MovieCard title="Interstellar" year={2014} /></CarouselItem>
          <CarouselItem className="basis-1.3/5"><MovieCard title="Interstellar" year={2014} /></CarouselItem>
          <CarouselItem className="basis-1.3/5"><MovieCard title="Interstellar" year={2014} /></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}


