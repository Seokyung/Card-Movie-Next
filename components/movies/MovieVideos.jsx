import { API_URL } from "../../app/(home)/page";
import styles from "./MovieVideos.module.scss";

const MovieVideos = async ({ id }) => {
	const videos = await getVideos(id);
	return (
		<div>
			<h4>▶️ Related Videos</h4>
			<div className={styles.movieVideos}>
				{videos.map((video) => (
					<iframe
						key={video.id}
						title={video.name}
						src={`https://youtube.com/embed/${video.key}`}
						className={styles.movieVideo}
						allowFullScreen
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					/>
				))}
			</div>
		</div>
	);
};

const getVideos = async (id) => {
	// await new Promise((resolve) => {
	// 	setTimeout(resolve, 3000);
	// });
	// throw Error("something broke...");
	const response = await fetch(`${API_URL}/${id}/videos`);
	return response.json();
};

export default MovieVideos;
