import React, { useState } from "react";

import { useEffect } from 'react';
function Seal30({ branchName }) {
  useEffect(() => {
    import('../Seal30/styles30.css');
  }, []);

  const [name, setName] = useState("");

  return (
    <div className="seal30stamp-container">
      <span
          className="text seal30dynamic-name"
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
      <p className="text seal30designation">Manager</p>
      <p className="text seal30emp-no">Emp. No. 12859</p>
      <p className="text seal30branch">Anakkatty Branch</p>
      
    </div>
  );
}

export default Seal30;