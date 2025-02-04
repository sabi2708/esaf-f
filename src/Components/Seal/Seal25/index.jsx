import React from "react";
import { useEffect } from 'react';
function Seal25({ branchName }) {
  useEffect(() => {
    import('../Seal25/styles25.css');
  }, []);

  return (
    <div className="seal25box">
      <div className="seal25stamp">
        <div className="seal25branch-name">
          ESAF Small Finance Bank Ltd.
          <p>Kuzhalmannam Branch</p>
        </div>
        <div className="seal25pay">PAY HALF VALUE</div>
        <div className="seal25officer">Prescribed Officer</div>
      </div>
      
    </div>
  );
}


export default Seal25;
