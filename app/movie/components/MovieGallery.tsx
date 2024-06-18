import { MoviesDataAPI } from "@/lib/data";
import type { Movie } from "@/types";
import Image from "next/image";

type MovieGalleryProps = {
   movie: Movie
}

export default async function MovieGallery({ movie }: MovieGalleryProps) {
   const categories = await MoviesDataAPI.getMovieCategories(movie.id);
   return (
         <section className="max-w-[1000px] mx-auto mt-8">
            <h3>{movie.name.toUpperCase()}</h3>
            <div className="flex gap-3 mt-2">
               <div className="basis-[25%]">
                  <Image
                     className="rounded-lg w-full h-full object-cover"
                     src={movie.poster ?? "/images/interstellar.jpeg"}
                     alt={movie.name}
                     width={200}
                     height={300}
                  />
               </div>
               <div className="basis-[60%]">
                  <Image
                     className="rounded-lg w-full h-full object-cover"
                     src={movie.poster ?? "/images/interstellar_landscape.webp"}
                     alt={movie.name}
                     width={500}
                     height={300}
                  />
               </div>
               <div className="basis-[15%] flex flex-col gap-2">
                  <div className="basis-[40%]">
                     <ul className="[&>li]:p-1 [&>li]:text-[10px] text-black [&>li]:rounded-lg space-y-1.5">
                        <li className="bg-gradient-to-r from-teal-300 to-white">
                           <img className="inline w-5 mx-2" src="/icons/IMDB icon.svg" /> IMDB
                        </li>
                        <li className="bg-gradient-to-r from-teal-300 to-white">
                           <img className="inline w-5 mx-2" src="/icons/Rotten icon.svg" /> Rotten Tomatoes
                        </li>
                        <li className="bg-gradient-to-r from-teal-300 to-white">
                           <img className="inline w-5 mx-2" src="/icons/Movie Pilot icon.svg" /> MoviePilot
                        </li>
                        <li className="bg-gradient-to-r from-teal-300 to-white">
                           <img className="inline w-5 mx-2" src="/icons/Wikidata icon.svg" /> Wikidata
                        </li>
                     </ul>
                  </div>
                  <div className="basis-[75%]">
                     <div className="rounded-lg bg-[#333] h-full w-full text-xs flex items-center justify-center" >
                        <img src="/icons/Image-stack.svg" />
                        99+ Photos
                     </div>
                  </div>
               </div>
            </div>
            <footer className="mt-2">
               <ul className="flex gap-3 [&>li]:px-2 [&>li]:py-1 [&>li]:bg-[#333] [&>li]:rounded-lg [&>li]:text-[10px] items-center">
                  {categories.map((c) => <li key={c.id}>{c.name}</li>)}
                  <span className="text-[#333]">|</span>
                  <li>United States</li>
               </ul>
            </footer>
         </section>
   )
}
