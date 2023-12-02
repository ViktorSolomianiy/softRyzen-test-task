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

export const Paragraph = styled.p`
  font-family: var(--fira-sans-font);
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  margin-top: 24px;
  color: var(--text-color);
  text-align: justify;
`;

export const BlockList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  margin-top: 36px;
`;

export const Block = styled.li`
  max-width: 100%;
  height: 197px;
  background-color: var(--second-background-color);
  padding-left: 12px;
  padding-right: 12px;
`;

export const BlockContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  grid-column-gap: 8px;
  margin-top: 13px;
`;

export const BlockTitle = styled.h3`
  font-family: var(--oswald-font);
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: var(--text-color);
  text-transform: uppercase;
`;

export const BlockText = styled.p`
  font-family: var(--fira-sans-font);
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  letter-spacing: -0.04em;
  margin-top: 12px;
  color: var(--text-color);
  text-align: justify;
`;

export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: var(--text-color);
`;

export const Line = styled.div`
  width: 100%;
  border: 1px solid var(--primary-color);
  margin-top: 33px;
`;
