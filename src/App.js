import React, { useState, useEffect } from 'react';

import Header from './components/Header/';
import Info from './components/Info/';
import Bar from './components/Bar/';

import { stealINSS, taxIRRF } from './utils/calcTax';

import { Container } from './styles/global';

function App() {
  const [salary, setSalary] = useState(0);
  const [taxINSS, setTaxINSS] = useState(0);
  const [inssPercentage, setINSSPercentage] = useState(0);
  const [irrf, setBaseIRRF] = useState(0);
  const [irrfTax, setTaxIRRF] = useState(0);
  const [irrfPercentage, setIRRFPercentage] = useState(0);
  const [finalSalary, setFinalSalary] = useState(0);
  const [salaryPercentage, setSalaryPercentage] = useState(0);

  useEffect(() => {
    if (salary < 1045) {
      setSalary(0);
      setTaxINSS(0);
      setINSSPercentage(0);
      setBaseIRRF(0);
      setTaxIRRF(0);
      setIRRFPercentage(0);
      setFinalSalary(0);
      setSalaryPercentage(0);
    }
  }, [salary]);

  const handleSalary = (event) => {
    let salaryValue = event.target.value;

    setSalary(salaryValue);
    discountINSS(salaryValue);
  };

  const discountINSS = (salaryValue) => {
    let value = parseFloat(salaryValue).toFixed(2);
    let [baseIRRF, taxStealIRRF] = [0, 0];

    if (value >= 1045) {
      baseIRRF = stealINSS(value);

      //base IRRF
      let stealOne = value - baseIRRF;

      //get percentage to INSS
      let percentINSS = 100 / (value / baseIRRF);

      //tax IRRF
      taxStealIRRF = taxIRRF(stealOne);

      //base IRRF
      let stealTwo = (stealOne - taxStealIRRF).toFixed(2);
      //get percentage to INSS
      let percentIRRF = 100 / (stealOne / stealTwo);

      //final Salary
      let salaryF = stealOne - stealTwo;
      //percentage salary
      let salaryP = 100 / (value / salaryF);

      setTaxINSS(baseIRRF);
      setINSSPercentage(percentINSS.toFixed(2));
      setBaseIRRF(stealOne);
      setTaxIRRF(stealTwo);
      setIRRFPercentage(percentIRRF.toFixed(2));

      setFinalSalary(salaryF);
      setSalaryPercentage(salaryP.toFixed(2));
    }
  };

  return (
    <>
      <Container>
        <h2>React Salário</h2>
        <Header salary={salary} onChangeSalary={handleSalary} />
        <Info
          salary={salary}
          inss={taxINSS}
          inssP={inssPercentage}
          irrf={irrf}
          irrfTax={irrfTax}
          irrfP={irrfPercentage}
          final={finalSalary}
          finalPercentage={salaryPercentage}
        />

        <Bar
          taxINSS={inssPercentage}
          taxIRRF={irrfPercentage}
          salary={salaryPercentage}
        />
      </Container>
    </>
  );
}

export default App;
