import { useState } from "react";
import { cn } from "@/lib/utils";
import MoviesDropDown from "./MoviesDropDown";

export default function NavMenu() {
  const [isDropDown, setIsDrowDown] = useState(false)

  return (
    <nav>
      <ul className={"flex space-x-4 text-[#838981] text-sm font-semibold cursor-pointer [&>li]:px-2 [&>li]:py-1 "}>
        <li
          className={cn("relative transition", isDropDown && "text-[#fff] bg-[#222] rounded-md")}
          onMouseEnter={() => setIsDrowDown(true)}
          onMouseLeave={() => setIsDrowDown(false)}
        >
          Movies
          {isDropDown && <MoviesDropDown />}
        </li>

        <li>TV Shows</li>
        <li>Actors</li>
      </ul>
    </nav >
  );
}
