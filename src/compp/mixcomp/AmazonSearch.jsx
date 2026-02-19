import { useEffect, useState } from "react";

function AmazonSearchAPI() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim() === "") {
        setResults([]);
        return;
      }

      setLoading(true);

      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          const filtered = data.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
          );
          setResults(filtered);
          setLoading(false);
        })
        .catch(() => setLoading(false));

    }, 1000); // debounce delay

    return () => clearTimeout(timer); // cleanup
  }, [query]);

  return (
    <div style={{ width: "400px", margin: "40px auto" }}>
      <input
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "100%", padding: "8px" }}
      />

      {loading && <p>Loading...</p>}

      {results.length > 0 && (
        <ul style={{ border: "1px solid #ccc", marginTop: "5px" }}>
          {results.map((item) => (
            <li key={item.id} style={{ padding: "6px" }}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AmazonSearchAPI;
