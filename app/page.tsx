import MoviesSlider from "@/components/main/MoviesSlider";

export default async function Home() {
  return (
    <section className="min-h-screen  max-h-[1000px] max-w-[850px] w-[850px] mx-auto mt-12 space-y-4">
      <MoviesSlider label="THIS WEEK'S TOP 10" />
      <MoviesSlider label="2021 BEST HITS" />
      <MoviesSlider label="BASED ON TRUE STORIES" />
    </section >
    
  );
}
