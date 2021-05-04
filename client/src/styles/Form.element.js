import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  input {
    width: 300px;
    height: 20px;
    font-size: 20px;
    padding: 1rem;
    margin: 1rem;
  }
  label {
    margin-bottom: -0.5rem;
  }

  button {
    background: lightcoral;
    &:hover {
      cursor: pointer;
    }
  }
`;
