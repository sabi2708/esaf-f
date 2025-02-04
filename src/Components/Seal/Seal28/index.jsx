import React, { useState, useRef } from "react";

function Seal28() {
  const [name, setName] = useState(""); 
  const spanRef = useRef(null); // ✅ Create a ref

  // Handle text input properly
  const handleInput = (e) => {
    setName(e.currentTarget.textContent);
  };

  // Clear placeholder when focused
  const handleFocus = () => {
    if (name === "Enter name") {
      setName(""); 
    }
  };

  // Restore placeholder if empty on blur
  const handleBlur = () => {
    if (name.trim() === "") {
      setName("Enter name");
    }
  };

  return (
    <span
      id="sealName"
      className="seal28name"
      contentEditable="true"
      ref={spanRef}  // ✅ Attach ref here
      suppressContentEditableWarning
      onInput={handleInput}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={{ direction: "ltr", unicodeBidi: "plaintext", textAlign: "left" }}
    >
      {name}
    </span>
  );
}

export default Seal28;
