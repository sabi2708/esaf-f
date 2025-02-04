import React, { useState } from "react";

import { useEffect } from 'react';
function Seal29({ branchName }) {
  useEffect(() => {
    import('../Seal29/styles29.css');
  }, []);
  const [role, setRole] = useState("");

  return (
    <div>
      <div className="seal29stamp">
      <span
          className="seal29role"
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
        <div className="seal29bank-name">Esaf Bank Anakkatty</div>
        <div className="seal29branch">Branch: 92880 92671</div>
      </div>
      
    </div>
  );
}

export default Seal29;
