import React from 'react';

import { formatNumber } from '../../helpers/formatHelpers';

// import { Container } from './styles';
import { Display, Label } from './styles';

function InputBase({ salary, nameLabel, color }) {
  return (
    <>
      <Display className="input-field col s6">
        <Label htmlFor="">{nameLabel}</Label>
        <input disabled type="number" className="validate" min="0" step="100" />
        <Label className={`active ${color}`} htmlFor="salario">
          {`${formatNumber(salary)}`}
        </Label>
      </Display>
    </>
  );
}

export default InputBase;
