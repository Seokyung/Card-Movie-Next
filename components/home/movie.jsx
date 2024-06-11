"use client";

import Image from "next/image";
import styles from "./movie.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
					height={400}
					src={movie.poster_path}
					alt={`${movie.title} Poster`}
					onClick={() => routeToMovie(movie.id)}
				/>
			</div>
			<Link prefetch href={`/movies/${movie.id}`} className={styles.movieTitle}>
				{movie.title}
			</Link>
		</div>
	);
};

export default Movie;
