import React from 'react';

import InputBase from '../Inputs/InputBase';
import InputDiscount from '../Inputs/InputDiscount';

import { Container } from './styles';

function Info({
  final,
  finalPercentage,
  salary,
  inss,
  inssP,
  irrf,
  irrfTax,
  irrfP,
}) {
  return (
    <>
      <Container>
        <InputBase
          salary={salary}
          nameLabel={'Base INSS:'}
          color={`black-text`}
        />
        <InputDiscount
          inss={inss}
          tax={inssP}
          nameLabel={'Desconto INSS:'}
          color={`orange-text text-darken-4`}
        />

        <InputBase
          salary={irrf}
          nameLabel={'Base IRRF:'}
          color={`black-text`}
        />

        <InputDiscount
          inss={irrfTax}
          tax={irrfP}
          nameLabel={'Desconto IRRF:'}
          color={`red-text text-darken-3`}
        />

        <InputDiscount
          inss={final}
          tax={finalPercentage}
          nameLabel={'Salário liquido:'}
          color={`green-text`}
        />
      </Container>
    </>
  );
}

export default Info;
