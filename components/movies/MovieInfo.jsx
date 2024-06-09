import Image from "next/image";
import { API_URL } from "../../app/(home)/page";

const MovieInfo = async ({ id }) => {
	const movie = await getMovie(id);
	return (
		<div>
			<Image
				src={movie.poster_path}
				alt={`${movie.title} Poster`}
				width={350}
				height={500}
			/>
			<div>
				<h1>{movie.title}</h1>
				<h3>⭐️ {movie.vote_average.toFixed(2)}</h3>
				<p>{movie.overview}</p>
				<a href={movie.homepage} target="_blank">
					HomePage &rarr;
				</a>
			</div>
		</div>
	);
};

const getMovie = async (id) => {
	// await new Promise((resolve) => {
	// 	setTimeout(resolve, 5000);
	// });
	const response = await fetch(`${API_URL}/${id}`);
	return response.json();
};

export default MovieInfo;
