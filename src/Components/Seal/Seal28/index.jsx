import React, { useState } from "react";
import "../Seal28/styles28.css";

function Seal28() {
  const [name, setName] = useState("");

  return (
    <div className="seal-container">
      <div className="seal28stamp">
        <span
          className="seal28name"
          contentEditable
          suppressContentEditableWarning
          onInput={(e) => setName(e.currentTarget.textContent)}
          style={{ display: "inline-block", minWidth: "100px" }}
        >
          {name.trim() ? name : ""}
        </span>
        <div className="seal28emp-id">Emp. Id. 12859</div>
      </div>
    </div>
  );
}

export default Seal28;
