import Movie from "@/components/Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=684bdc2b8e94baceadf935b3f38ee9cf`
  );
  const res = await data.json();
  return (
    <main>
      <div className="grid grid-cols-fluid gap-16">
        {res.results.map((movie: any) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
