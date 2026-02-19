import React, { useLayoutEffect, useRef, useState } from "react";

function Box() {
  const boxRef = useRef();
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(boxRef.current.offsetWidth);
    setWidth(boxRef.current.height)
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{ width: "200px", height: "100px", background: "skyblue" }}
      >
        Box
      </div>
      <p>Box width: {width}px</p>
    </div>
  );
}

export default Box;
