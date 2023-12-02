import styled from "styled-components";

export const Container = styled.div`
  margin-top: 36px;
`;

export const Title = styled.h2`
  font-family: var(--oswald-font);
  font-size: 28px;
  line-height: 28px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  color: var(--text-color);
`;

export const Kilowatts = styled.p`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 8px;
  align-items: center;
  justify-content: center;
  font-family: var(--oswald-font);
  font-size: 48px;
  line-height: 48px;
  margin-top: 24px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: var(--primary-color);
`;

export const Kwh = styled.span`
  font-family: var(--oswald-font);
  font-size: 24px;
  line-height: 24px;
  font-weight: 400;
  text-align: center;
  color: var(--text-color);
`;

export const Line = styled.div`
  height: 48px;
  border-left: 1px solid var(--primary-color);
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
`;
