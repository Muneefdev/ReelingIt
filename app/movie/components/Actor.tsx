
export default function Actor() {
   return (
      <figure className="flex items-center w-[200px]">
         <div className='basis-[40%]'>
            <img className="rounded-lg w-[70px] h-[70px] object-cover" src="/actors/actor.png" alt="actor1" />
         </div>
         <div className="basis-[60%]">
            <h4>Actor 1</h4>
            <p className="text-[#ccc] text-[10px]">Character Name</p>
         </div>
      </figure>
   )
}
