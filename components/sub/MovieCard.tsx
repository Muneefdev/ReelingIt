import Image from "next/image";

interface MovieCardProps {
  title: string;
  year: number;
  poster?: string;
}


export default function MovieCard({ title, year, poster }: MovieCardProps) {
  return (
    <div className="w-[110px] mr-2 h-[205px] hover:scale-110 transition cursor-pointer">
      <div className="w-full">
        <Image
          src={poster ?? "/images/interstellar.jpeg"}
          alt={`${title} movie poster`}
          width={110}
          height={180}
          className="rounded-lg"
        />
      </div>
      <p className="text-center text-[#ccc] text-[12px] mt-1 leading-none">
        {title} ({year})
      </p>
    </div>
  )
}
