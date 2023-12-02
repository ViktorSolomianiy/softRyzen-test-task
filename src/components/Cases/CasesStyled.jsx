import styled from "styled-components";

export const Container = styled.div`
  margin-top: 36px;
`;

export const Title = styled.h2`
  font-family: var(--oswald-font);
  font-size: 28px;
  line-height: 28px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--text-color);
`;

export const CasesInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-top: 24px;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 12px;
`;

export const CountCases = styled.p`
  font-family: var(--fira-sans-font);
  font-size: 28px;
  line-height: 36px;
  font-weight: 400;
  color: var(--opacity-text-color);
  align-self: flex-end;
`;

export const Button = styled.button`
  display: grid;
  border: 1px solid var(--text-color);
  border-radius: 100px;
  padding: 15px;
  background-color: transparent;
`;

export const LeftArrow = styled.svg`
  width: 36px;
  height: 36px;
  stroke: var(--text-color);
`;

export const RightArrow = styled.svg`
  width: 36px;
  height: 36px;
  stroke: var(--text-color);
  transform: scaleX(-1);
`;

export const CasesList = styled.ul`
  margin-top: 26px;
`;

export const Case = styled.li`
  max-width: 100%;
  height: auto;
  background-color: var(--second-background-color);
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const CaseContainer = styled.div`
  margin-top: 24px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
`;

export const CaseInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-top: 12px;
`;

export const CaseTitle = styled.h3`
  font-family: var(--fira-sans-font);
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  letter-spacing: -0.04em;
  color: var(--text-color);
`;

export const CaseButton = styled.button`
  display: grid;
  border: 0;
  outline: 0;
  border-radius: 500px;
  padding: 18px;
  background-color: var(--primary-color);
`;

export const CaseIconArrow = styled.svg`
  width: 28px;
  height: 28px;
  stroke: var(--text-color);
`;

export const Line = styled.div`
  width: 100%;
  border: 1px solid var(--primary-color);
  margin-top: 21px;
`;

export const CaseText = styled.p`
  font-family: var(--fira-sans-font);
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  letter-spacing: -0.04em;
  color: var(--text-color);
`;
