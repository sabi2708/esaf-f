import React, { useState } from "react";

import { useEffect } from 'react';
function Seal30({ branchName }) {
  useEffect(() => {
    import('../Seal30/styles30.css');
  }, []);

  const [name, setName] = useState("");

  return (
    <div className="seal30stamp-container">
      <p
        className="text seal30dynamic-name"
        contentEditable
        suppressContentEditableWarning
        onInput={(e) => setName(e.currentTarget.textContent)}
      >
        {name || "Enter name"}
      </p>
      <p className="text seal30designation">Manager</p>
      <p className="text seal30emp-no">Emp. No. 12859</p>
      <p className="text seal30branch">Anakkatty Branch</p>
      
    </div>
  );
}

export default Seal30;