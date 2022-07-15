import App from "../App";
import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();
const API_URL = `http://www.omdbapi.com/?apikey=91aa0bbc`;

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [query, setQuery] = useState("titanic");

  useEffect(() => {
    let timeOut;
    timeOut = setTimeout(() => {
      getData(`${API_URL}&s=${query}`);
    }, 800);
    return () => clearTimeout(timeOut);
  }, [query]);
  const getData = async (url) => {
    setLoading(true)
    try {
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      if (data.Response == "True") {
        setLoading(false);
        setIsError({
          show:"false",
          msg:""
        })
        setMovies(data.Search);
      } else {
        setIsError({
          show: "true",
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider value={{ loading, setLoading, movies, isError, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
