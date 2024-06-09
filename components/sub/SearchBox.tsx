import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBox() {
  return (
    <div className="flex items-center px-2 py-1 rounded-md border border-[#ccc] bg-[#222]">
      <input
        className="bg-transparent text-[#ccc] text-sm outline-none"
        type="text"
        placeholder="search anything"
      />
      <MagnifyingGlassIcon className="h-4 w-4 text-[#ccc]" />
    </div>
  );
}
