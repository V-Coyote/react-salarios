import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{ 
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root{
  height: 100%;
}

body{
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  color: #222;
}

button{
  cursor: pointer;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 800px;

  margin: 0 auto;
`;
