import React from 'react'
import Actor from './Actor'

export default function MovieActors() {
   return (
      <article className="max-w-[700px] mx-auto mt-8">
         <div className=" p-4 bg-[#333] rounded-md">
            <p className="text-[10px]">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore
               culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
               Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.
               Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia
               dolor Lorem duis laboris cupidatat officia voluptate.</p>
         </div>
         <div className="grid grid-cols-2 gap-y-8 mt-8">
            <Actor />
            <Actor />
            <Actor />
            <Actor />
            <Actor />
            <Actor />
            <Actor />
            <Actor />
         </div>
      </article>
   )
}
