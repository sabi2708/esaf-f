import React, { useRef, useEffect } from "react";
import "../Seal28/styles28.css";

function Seal28() {
  const nameRef = useRef(null);

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus(); // Auto-focus on load
    }
  }, []);

  return (
    <div className="seal-container">
      <div className="seal28stamp">
        <span
          className="seal28name"
          contentEditable
          suppressContentEditableWarning
          ref={nameRef}
          onInput={(e) => {
            // Preserve cursor position
            const range = document.createRange();
            const selection = window.getSelection();
            range.selectNodeContents(e.target);
            range.collapse(false);
            selection.removeAllRanges();
            selection.addRange(range);
          }}
        >
          Enter Name
        </span>
        <div className="seal28emp-id">Emp. Id. 12859</div>
      </div>
    </div>
  );
}

export default Seal28;
