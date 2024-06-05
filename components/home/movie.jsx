"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./movie.module.scss";
import { useRouter } from "next/navigation";

const Movie = ({ movie }) => {
	const router = useRouter();

	const routeToMovie = (id) => {
		router.push(`/movies/${id}`);
	};

	return (
		<div className={styles.movie}>
			<div className={styles.moviePoster}>
				<Image
					width={250}
					height={450}
					src={movie.poster_path}
					alt={`${movie.title} Poster`}
					onClick={() => routeToMovie(movie.id)}
				/>
			</div>
			<Link href={`/movies/${movie.id}`}>{movie.title}</Link>
		</div>
	);
};

export default Movie;
