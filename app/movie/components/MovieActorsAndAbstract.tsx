import { Actor } from '@/types'
import ActorCard from './ActorCard'
import { MoviesDataAPI } from '@/lib/data'

type MovieActorsProps = {
   actors: Actor[]
   movieId: string
}

export default async function MovieActorsAndAbstract({ movieId, actors }: MovieActorsProps) {
   let abstract = await MoviesDataAPI.getMovieAbstract(+movieId);
   return (
      <article className="max-w-[700px] mx-auto mt-8">
         <div className=" p-4 bg-[#333] rounded-md">
            <p className="text-[10px]">{abstract ?? "This movie has no description."}</p>
         </div>
         <div className="grid grid-cols-2 gap-y-8 mt-8">
            {actors.map(actor => <ActorCard key={actor.id} actor={actor} />)}
         </div>
      </article>
   )
}
