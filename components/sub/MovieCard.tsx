"use client"
import type { Movie } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";


type MovieCardProps = Movie;

export default function MovieCard({ id, name, date, poster }: MovieCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/movie/${id}`);
  }

  return (
    <div onClick={handleClick} className="w-[110px] mr-2 h-[205px] hover:scale-110 transition cursor-pointer">
      <div className="w-full">
        <Image
          src={poster ?? "/images/interstellar.jpeg"}
          alt={`${name} movie poster`}
          width={110}
          height={180}
          className="rounded-lg"
        />
      </div>
      <p className="text-center text-[#ccc] text-[12px] mt-1 leading-none">
        {name.length > 20 ? name.slice(20) : name} ({date.toString().split("-")[0]})
      </p>
    </div>
  )
}
