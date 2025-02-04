import React from "react";

import { useEffect } from 'react';
function Seal27({ branchName }) {
  useEffect(() => {
    import('../Seal27/styles27.css');
  }, []);
  return (
    <div className="seal27box">
      <div className="seal27stamp">
        <div className="seal27branch-name">
          ESAF Small Finance Bank Ltd.
          <p>Kuzhalmannam Branch</p>
        </div>
        <div className="seal27reject">REJECT</div>
        <div className="seal27officer">Prescribed Officer</div>
      </div>
      
      </div>
    
  );
}

export default Seal27;
