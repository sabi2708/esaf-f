import React from 'react';
import { useEffect } from 'react';

const Seal24 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal24/styles24.css');
  }, []);
  return (
    <div className="seal24box">
      <div className="seal24stamp">
        <div className="seal24branch-name">
          ESAF Small Finance Bank Ltd.
          <p>Kuzhalmannam Branch</p>
        </div>
        <div className="seal24pay">PAY</div>
        <div className="seal24officer">Prescribed Officer</div>
      </div>
      
    </div>
  );
};

export default Seal24;
