import { API_URL } from "../app/(home)/page";

const MovieInfo = async ({ id }) => {
	const movie = await getMovie(id);
	return <h6>{JSON.stringify(movie)}</h6>;
};

const getMovie = async (id) => {
	// await new Promise((resolve) => {
	// 	setTimeout(resolve, 5000);
	// });
	const response = await fetch(`${API_URL}/${id}`);
	return response.json();
};

export default MovieInfo;
