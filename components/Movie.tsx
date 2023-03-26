import Image from "next/image";
import Link from "next/link";

export default function Movie({ movie }: any) {
  const { title, release_date, poster_path, id } = movie;
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={800}
          height={800}
          alt={title}
          priority
        />
      </Link>
    </div>
  );
}
