import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

const MovieDetails = async ({ params: { id } }) => {
	return (
		<div>
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
