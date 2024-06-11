export default function MoviesDropDown() {
  return (
    <div
      className="absolute -left-[70px] top-8 bg-[#333] w-[375px] h-[230px] rounded-lg p-4 z-10"
    >
      <ul className="flex justify-between text-[11px] font-normal">
        <div>
          <li className="font-extrabold mb-2">GENRE</li>
          <div className="grid grid-cols-2 gap-3" >
            <li>Action & Adventure</li>
            <li>Comedy</li>
            <li>Drama</li>
            <li>Fantasy</li>
            <li>Horror</li>
            <li>Sci-fi</li>
            <li>Thriller</li>
          </div>
          <li className="mt-4 text-[#ccc]">All GENRES</li>
        </div>

        <div>
          <li className="font-extrabold mb-2">COUNTRY OF ORIGIN</li>
          <div className="[&>li]:py-[5px]">
            <li>United States</li>
            <li>Canada</li>
            <li>India</li>
            <li>South Korea</li>
          </div>
          <li className="mt-4 text-[#ccc]">All COUNTRIES</li>
        </div>
      </ul >
    </div >
  )
}
