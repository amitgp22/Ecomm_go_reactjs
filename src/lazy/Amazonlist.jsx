import React, { useState, useEffect } from "react";

function Amazonlist() {
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");

  const products = [
    "iPhone 15",
    "Samsung Galaxy",
    "MacBook Air",
    "Dell Laptop",
    "Sony Headphones",
    "Apple Watch",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(search);
      console.log("Debounced Value:", search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const filteredProducts = products.filter((item) =>
    item.toLowerCase().includes(debounced.toLowerCase())
  );
console.log("Filtered Products:", filteredProducts);
  return (
    <div>
      <input
        type="text"
        placeholder="Search Amazon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredProducts.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Amazonlist;