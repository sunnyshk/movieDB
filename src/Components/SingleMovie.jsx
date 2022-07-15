import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";

const SingleMovie = () => {
  const {loading, setLoading} = useGlobalContext() 
  const { id } = useParams();
  let apiUrl = `http://www.omdbapi.com/?apikey=91aa0bbc&i=${id}`;
  const [single, setSingle] = useState([]);

  const getSingle = async (url) => {
    setLoading(true)
    try {
      let res = await fetch(url);
      let data = await res.json();
      if(data.Response=="True"){
        setLoading(false)
        console.log(data);
        setSingle(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingle(apiUrl);
  }, []);
  if(loading){
    return(
      <h1>Loadingg</h1>
    )
  }else{

    return (
      <div>
        <div className="img">
          <img src={single.Poster} alt="movie_poster" />
        </div>
        <div className="info">
          <h2>{single.Title}</h2>
        </div>
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    );
  }
};

export default SingleMovie;
