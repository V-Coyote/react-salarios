export const stealINSS = (value) => {
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

export const taxIRRF = (value) => {
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
