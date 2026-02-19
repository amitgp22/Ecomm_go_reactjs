import React, { useState } from "react";

function Search1() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div style={{ width: "250px", margin: "50px auto", textAlign: "center" }}>
      <input
        type="text"
        value={input}
        readOnly
        style={{ width: "100%", height: "40px", marginBottom: "10px" }}
      />

      <div>
        {[1,2,3,4,5,6,7,8,9,0].map((num) => (
          <button
            key={num}
            onClick={() => handleClick(num)}
            style={{ width: "60px", height: "40px", margin: "5px" }}
          >
            {num}
          </button>
        ))}
      </div>

      <div>
        {["+", "-", "*", "/"].map((op) => (
          <button
            key={op}
            onClick={() => handleClick(op)}
            style={{ width: "60px", height: "40px", margin: "5px" }}
          >
            {op}
          </button>
        ))}
      </div>

      <div>
        <button onClick={clearInput} style={{ margin: "5px" }}>
          C
        </button>

        <button onClick={calculate} style={{ margin: "5px" }}>
          =
        </button>
      </div>
    </div>
  );
}

export default Search1;
