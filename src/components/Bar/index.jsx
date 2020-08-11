import React, { useState, useEffect } from 'react';

import { BarPercentage } from './styles';

function Bar({ salary, taxINSS, taxIRRF }) {
  useEffect(() => {
    setSizeBar(salary);
    setINSS(taxINSS);
    setIRRF(taxIRRF);
  }, [salary, taxINSS, taxIRRF]);

  const [salaryBar, setSizeBar] = useState(0);
  const [inssBar, setINSS] = useState(0);
  const [irrfBar, setIRRF] = useState(0);

  return (
    <>
      <BarPercentage
        className="progress"
        liquid={salaryBar}
        inss={inssBar}
        irrf={irrfBar}
      >
        <div className="determinate orange darken-4"></div>
        <div className="determinate red darken-3"></div>
        <div className="determinate green"></div>
      </BarPercentage>
    </>
  );
}

export default Bar;
