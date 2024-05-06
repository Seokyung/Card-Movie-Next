"use client";

import { useEffect, useState } from "react";

// metadata는 server-side component에서만 사용 가능함
// export const metadata = {
// 	title: "Home",
// };

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [movies, setMovies] = useState([]);

	const getMovies = async () => {
		const res = await fetch(
			"https://nomad-movies.nomadcoders.workers.dev/movies"
		);
		const json = await res.json();
		setMovies(json);
		setIsLoading(false);
	};

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<div>
			<h1>Home Page</h1>
			<div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>
		</div>
	);
};

export default Home;
