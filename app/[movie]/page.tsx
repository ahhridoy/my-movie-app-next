import Image from "next/image";

export default async function MovieDetails({ params }: any) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=684bdc2b8e94baceadf935b3f38ee9cf`
  );
  const { title, release_date, runtime, status, backdrop_path, overview } =
    await data.json();

  return (
    <div>
      <div className="">
        <h2 className="text-4xl">{title}</h2>
        <h1 className="text-lg ">{release_date}</h1>
        <h2>Runtime: {runtime} minutes</h2>
        <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-lg text-sm">
          {status}
        </h2>
        <Image
          className="my-12 w-full"
          src={imagePath + backdrop_path}
          alt={title}
          width={1000}
          height={1000}
          priority
        />
      </div>
      <div className="my-4">
        <p className="text-lg">{overview}</p>
      </div>
    </div>
  );
}
