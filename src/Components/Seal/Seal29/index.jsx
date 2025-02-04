import React, { useState } from "react";

import { useEffect } from 'react';
function Seal29({ branchName }) {
  useEffect(() => {
    import('../Seal29/styles.css');
  }, []);
  const [role, setRole] = useState("");

  return (
    <div>
      <div className="seal29stamp">
        <span
          className="seal29role"
          contentEditable
          suppressContentEditableWarning
          onInput={(e) => setRole(e.currentTarget.textContent)}
        >
          {role || "Enter name"}
        </span>
        <div className="seal29bank-name">Esaf Bank Anakkatty</div>
        <div className="seal29branch">Branch: 92880 92671</div>
      </div>
      
    </div>
  );
}

export default Seal29;
