import React, { useState } from "react";

function PaginationExample() {
  const data = [
    "Item1","Item2","Item3","Item4","Item5",
    "Item6","Item7","Item8","Item9","Item10"
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedData = data.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  console.log("totalPages", totalPages);

  return (
    <div>
      <h3>Pagination Example</h3>

      {selectedData.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <div>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PaginationExample;