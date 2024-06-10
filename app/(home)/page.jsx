import Movie from "../../components/home/Movie";
import styles from "./home.module.scss";

// metadata는 server-side components에서만 사용 가능함
export const metadata = {
	title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const Home = async () => {
	const movies = await getMovies();
	return (
		<div className={styles.home}>
			{movies.map((movie) => {
				return <Movie key={movie.id} movie={movie} />;
			})}
		</div>
	);
};

export default Home;

/**
 * 영화 목록 가져오기 (SSR)
 * @returns movies
 */
async function getMovies() {
	// 백엔드에서 데이터를 fetch하기 때문에 loading 상태가 안보이는 것처럼 동작함
	// await new Promise((resolve) => {
	// 	setTimeout(resolve, 1000);
	// });
	const res = await fetch(API_URL);
	const json = await res.json();
	return json;
}
