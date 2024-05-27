import { API_URL } from "../../../(home)/page";

const MovieDetails = async ({ params: { id } }) => {
	console.log("start");
	const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
	console.log("end");
	return (
		<div>
			<h2>Movie {id}</h2>
			<h1>{movie.title}</h1>
		</div>
	);
};

const getMovie = async (id) => {
	console.log(`Fetching: ${Date.now()}`);
	await new Promise((resolve) => {
		setTimeout(resolve, 2000);
	});
	const response = await fetch(`${API_URL}/${id}`);
	return response.json();
};

const getVideos = async (id) => {
	console.log(`Fetching: ${Date.now()}`);
	await new Promise((resolve) => {
		setTimeout(resolve, 2000);
	});
	const response = await fetch(`${API_URL}/${id}/videos`);
	return response.json();
};

export default MovieDetails;
