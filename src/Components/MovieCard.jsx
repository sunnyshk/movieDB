import { useGlobalContext } from "./Context";

const MovieCard = ({ data }) => {
  // const {movies} = useGlobalContext();
  return (
    <div
      style={{
        width: "200px",
        height: "400px",
        margin: "auto",
        alignItems: "center",
      }}
    >
      <img style={{ width: "100%" }} src={data.Poster} alt="movie_poster" />
      <h2>{data.Title}</h2>
    </div>
  );
};

export default MovieCard;
