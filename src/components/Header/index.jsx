import React from 'react';

// import { Container } from './styles';

function Header({ salary, onChangeSalary }) {
  return (
    <>
      <div className="input-field col s6">
        <input
          onChange={onChangeSalary}
          id="salario"
          type="number"
          className="validate"
          min="1045.00"
          step="100"
        />
        <label className="active" htmlFor="salario">
          Salário
        </label>
      </div>
    </>
  );
}

export default Header;
