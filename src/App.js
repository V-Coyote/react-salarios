import React, { useState, useEffect } from 'react';

import Header from './components/Header/';
import Info from './components/Info/';

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
    if (!salary) {
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

    let baseIRRF = 0;
    let taxStealIRRF = 0;

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
  };

  const stealINSS = (value) => {
    let aliquota = 0;

    let [range1, range2, range3] = [78.38, 94.01, 125.37];

    if (value < 1046) {
      aliquota = range1.toFixed(2);
    } else if (value <= 2089.6) {
      let aux = (value - 1045) * 0.09;
      aliquota = (aux + range1).toFixed(2);
    } else if (value < 3134.4) {
      let aux = (value - 2089.61) * 0.12;
      aliquota = (aux + range1 + range2).toFixed(2);
    } else if (value < 6101.06) {
      let aux = (value - 3134.41) * 0.14;
      aliquota = (aux + range1 + range2 + range3).toFixed(2);
    } else {
      // let aux = (value - 3134.41) * 0.14;
      let aux = 713.1;
      // aliquota = (aux + range1 + range2 + range3).toFixed(2);
      aliquota = aux.toFixed(2);
    }

    return aliquota;
  };

  const taxIRRF = (value) => {
    let aliquota = 0;

    let [range1, range2, range3, range4] = [142.8, 354.8, 636.13, 869.36];

    if (value < 1903.99) {
      aliquota = 0.0;
    } else if (value < 2826.65) {
      let aux = value * 0.075;
      aliquota = (aux - range1).toFixed(2);
    } else if (value < 3751.05) {
      let aux = value * 0.15;
      aliquota = (aux - range2).toFixed(2);
    } else if (value < 4664.7) {
      let aux = value * 0.225;
      aliquota = (aux - range3).toFixed(2);
    } else {
      let aux = value * 0.275;
      aliquota = (aux - range4).toFixed(2);
    }

    aliquota = value - aliquota;

    return aliquota;
  };

  console.log(typeof salary);

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
      </Container>
    </>
  );
}

export default App;
