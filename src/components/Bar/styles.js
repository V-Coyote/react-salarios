import styled from 'styled-components';

export const BarPercentage = styled.div.attrs((props) => ({
  salary: props.liquid,
  inss: props.inss,
  irrf: props.irrf,
}))`
  display: flex;
  flex-direction: row;

  height: 24px;
  border-radius: 100px;

  div:nth-child(1) {
    position: unset;
    width: ${(props) => props.inss}%;
    height: 100%;
    left: unset;
  }

  div:nth-child(2) {
    position: unset;
    width: ${(props) => props.irrf}%;
    height: 100%;
    left: unset;
  }

  div:nth-child(3) {
    position: unset;
    width: ${(props) => props.salary}%;
    height: 100%;
    left: unset;
    right: 0;
  }
`;
