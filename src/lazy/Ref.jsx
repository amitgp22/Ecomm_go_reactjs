import React, { useRef, useEffect } from "react";

function Ref() {
  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  return <input ref={nameRef} placeholder="Enter name" />;
}

export default Ref;