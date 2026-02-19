import React, { useState, useEffect } from "react";
import customDebouncing from "./customDebouncing";

function SearchComponent() {
  const [search, setSearch] = useState("");

  // 👇 Debounced value
  const debouncedSearch = customDebouncing(search, 500);

  useEffect(() => {
    if (debouncedSearch) {
      console.log("API Call with:", debouncedSearch);
      // fetchData(debouncedSearch)
    }
  }, [debouncedSearch]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchComponent;