
interface MovieInfoProps {
  params: {
    id: string;
  }
}

export default function MovieInfo({ params }: MovieInfoProps) {

  return (
    <section className="h-full">
      <h4>Movie Name</h4>
    </section>
  )
}
