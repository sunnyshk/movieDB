import { useGlobalContext } from "./Context";

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();
  return (
    <>
      <h1>Search Your Fav Movies</h1>
      <input
        type="text"
        value={query}
        placeholder="Search for movies here..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>{isError.show && isError.msg}</p>
    </>
  );
};

export default Search;
