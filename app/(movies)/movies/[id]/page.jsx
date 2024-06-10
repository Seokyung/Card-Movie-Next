import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movies/MovieInfo";
import MovieVideos from "../../../../components/movies/MovieVideos";
import styles from "./movies.module.scss";

export const generateMetadata = async ({ params: { id } }) => {
	const movie = await getMovie(id);
	return {
		title: movie.title,
	};
};

const MovieDetails = async ({ params: { id } }) => {
	return (
		<div className={styles.movies}>
			{/* MovieInfo 컴포넌트 (로딩 상태일 경우 fallback이 띄워짐) */}
			<Suspense fallback={<h1>Loading Movie Info</h1>}>
				<MovieInfo id={id} />
			</Suspense>
			{/* MovieVideos 컴포넌트 (로딩 상태일 경우 fallback이 띄워짐) */}
			<Suspense fallback={<h1>Loading Movie Videos</h1>}>
				<MovieVideos id={id} />
			</Suspense>
		</div>
	);
};

export default MovieDetails;
