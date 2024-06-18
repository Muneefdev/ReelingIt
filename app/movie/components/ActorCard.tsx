import { Actor } from "@/types"

type ActorCardProps = {
   actor: Actor
};

export default function ActorCard({ actor }: ActorCardProps) {
   return (
      <figure className="flex items-center w-[200px]">
         <div className='basis-[40%]'>
            <img className="rounded-lg w-[70px] h-[70px] object-cover" src={actor.image ?? "/actors/actor.png"} alt={actor.name} />
         </div>
         <div className="basis-[60%]">
            <h4>{actor.name}</h4>
            <p className="text-[#ccc] text-[10px]">Character Name</p>
         </div>
      </figure>
   )
}
