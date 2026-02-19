import { useSearchParams } from "react-router-dom";

function SearchExample() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <h2>Search</h2>
      <p>Query: {searchParams.get("q")}</p>
      <button onClick={() => setSearchParams({ q: "react" })}>
        Search React
      </button>
    </>
  );
}

export default SearchExample;
