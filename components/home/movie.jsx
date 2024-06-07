"use client";

import Image from "next/image";
import styles from "./movie.module.scss";
import { useRouter } from "next/navigation";

const Movie = ({ movie }) => {
	const router = useRouter();

	const routeToMovie = (id) => {
		router.push(`/movies/${id}`);
	};

	return (
		<div className={styles.movie} onClick={() => routeToMovie(movie.id)}>
			<div className={styles.moviePoster}>
				<Image
					width={250}
					height={400}
					src={movie.poster_path}
					alt={`${movie.title} Poster`}
				/>
			</div>
			<p className={styles.movieTitle}>{movie.title}</p>
		</div>
	);
};

export default Movie;
