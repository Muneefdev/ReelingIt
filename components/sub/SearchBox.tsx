import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBox() {
   const searchParams = useSearchParams();
   const router = useRouter();

   const handleSearch = useDebouncedCallback((movie: string) => {
      const param = new URLSearchParams(searchParams);
      movie ? param.set("search", movie) : param.delete("search");
      router.replace(`/${'?'+param}`);
   }, 500);

   return (
      <div className="flex items-center rounded-md border border-[#ccc] bg-[#222] px-2 py-1">
         <input
            className="bg-transparent text-sm text-[#ccc] outline-none"
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
            placeholder="search anything"
         />
         <MagnifyingGlassIcon className="h-4 w-4 text-[#ccc]" />
      </div>
   );
}
