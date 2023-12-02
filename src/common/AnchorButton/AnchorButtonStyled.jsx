import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  font-family: var(--fira-sans-font);
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  border: 1px solid var(--primary-color);
  outline: 0;
  border-radius: 500px;
  cursor: pointer;
  padding: 10px 16px 10px 16px;
  color: var(--text-color);
  background-color: var(--primary-color);
`;

export const IconButton = styled.div`
  border: 0;
  outline: 0;
  display: grid;
  place-items: center;
  justify-self: end;
  margin-left: 12px;
  background-color: var(--primary-hover-color);
  border-radius: 500px;
  padding: 3px;
`;

export const Svg = styled.svg`
  width: 8px;
  height: 8px;
  stroke: var(--text-color);
`;
