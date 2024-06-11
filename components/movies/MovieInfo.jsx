import Image from "next/image";
import styles from "./MovieInfo.module.scss";

const MovieInfo = async ({ id }) => {
	const movie = await getMovie(id);
	return (
		<div className={styles.movieInfo}>
			<div className={styles.movieInfoPoster}>
				<Image
					src={movie.poster_path}
					alt={`${movie.title} Poster`}
					width={350}
					height={500}
					priority
				/>
			</div>
			<div className={styles.movieInfoContent}>
				<h1 className={styles.movieTitle}>{movie.title}</h1>
				<h3 className={styles.movieVoteAverage}>
					⭐️ {movie.vote_average.toFixed(2)}
				</h3>
				<p className={styles.movieOverview}>{movie.overview}</p>
				<a
					className={styles.movieHomepage}
					href={movie.homepage}
					target="_blank"
				>
					HomePage &rarr;
				</a>
			</div>
		</div>
	);
};

export const getMovie = async (id) => {
	// await new Promise((resolve) => {
	// 	setTimeout(resolve, 5000);
	// });
	const response = await fetch(`${process.env.API_URL}/${id}`);
	return response.json();
};

export default MovieInfo;
