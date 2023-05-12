import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  p {
    padding: 20px 0;
    font-size: 45px;
  }

  button {
    width: 200px;
    padding: 12px 0;
    border: 1px solid black;
    color: #000;
    font-size: 21px;
  }
`;
