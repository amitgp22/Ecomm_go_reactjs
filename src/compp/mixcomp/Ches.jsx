import { useEffect, useState } from "react";

export default function Ches() {
  const [row, setRow] = useState("8");
  const [column, setColumn] = useState("8");

  const handleKnight = (value) => {
    if (value === "Knight") {
      console.log("knight");
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input placeholder="Row " onChange={(e) => setRow(e.target.value)} />
      <input placeholder="column" onChange={(e) => setColumn(e.target.value)} />
      <br />
      <br />
      {row && column && (
        <table style={{ width: "100%" }}>
          {/* <thead>
            {[...Array(Number(column))].map((_, index) => {
              return (
                <th style={{ border: "1px solid green", width: "40px" }}>
                  {`Head ${index + 1}`}
                </th>
              );
            })}
          </thead> */}
          <tbody>
            {[...Array(Number(row))].map((_, outerIndex) => {
              return (
                <tr key={outerIndex}>
                  {[...Array(Number(column))].map((_, innerIndex) => {
                    let text;
                    if ([0, 7].includes(outerIndex)) {
                      if ([1, 6].includes(innerIndex)) {
                        text = "Knight";
                      }
                    }
                    return (
                      <td
                        onClick={(e) => {
                          handleKnight(text);
                        }}
                        key={innerIndex}
                        style={{
                          border: "1px dashed blue",
                          width: "40px",
                          height: "40px",
                          color: "red",
                          backgroundColor:
                            (Number(outerIndex) + Number(innerIndex)) % 2 == 0
                              ? "black"
                              : "white",
                        }}
                      >
                        {text}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}