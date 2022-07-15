import { AppContext } from "./Context";
import { useGlobalContext } from "./Context";
import { useContext } from "react";
import MovieCard from "./MovieCard";
import Search from "./Search";
import { NavLink } from "react-router-dom";
const Home = () => {
  const { movies , loading, isError} = useGlobalContext();
  if(loading && !isError){
    return(
      <h1>Loading...</h1>
    )
  }
  

    return (
      
      <div style={{ border: "1px solid red", textAlign: "center" }}>
        <Search />
       
        <div
          className="allMovies"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            margin: "auto",
            width: "1200px",
            border: "1px solid red",
          }}
        >
          {movies.map((e) => {
            return (
              <NavLink to={`movie/${e.imdbID}`} key={e.imdbID}>
                <MovieCard data={e} />
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  
};

export default Home;
