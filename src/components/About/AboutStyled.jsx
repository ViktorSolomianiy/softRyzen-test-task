import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 120px;
  }
`;

export const GridContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-family: var(--oswald-font);
  font-size: 28px;
  line-height: 28px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--text-color);

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 36px;
  }

  @media screen and (min-width: 1280px) {
    width: 365px;
    font-size: 48px;
    line-height: 48px;
  }
`;

export const VerticalLine = styled.div`
  height: 90%;
  border-left: 1px solid var(--primary-color);
  margin-right: 11px;

  @media screen and (min-width: 1280px) {
    margin-right: auto;
    margin-left: auto;
  }
`;

export const Paragraph = styled.p`
  font-family: var(--fira-sans-font);
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  margin-top: 24px;
  color: var(--text-color);
  text-align: justify;

  @media screen and (min-width: 768px) {
    margin: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 465px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const BlockList = styled.ul`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: 1fr 1fr;

    .image:nth-child(3) {
      grid-column: 3 / span 2;
      grid-row: 1 / 1;
    }

    .image:nth-child(4) {
      grid-column: 1 / span 2;
      grid-row: 2 / 2;
    }
  }

  @media screen and (min-width: 1440px) {
    grid-gap: 48px;
  }
`;

export const Block = styled.li`
  max-width: 100%;
  min-height: 197px;
  height: 100%;
  background-color: var(--second-background-color);

  @media screen and (min-width: 768px) {
    min-width: 159px;
  }
`;

export const GridBlockContainer = styled.div`
  padding-left: 12px;
  padding-right: 12px;

  @media screen and (min-width: 1440px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const BlockContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  grid-column-gap: 8px;
  margin-top: 13px;

  @media screen and (min-width: 1440px) {
    margin-top: 48px;
  }
`;

export const BlockTitle = styled.h3`
  font-family: var(--oswald-font);
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: var(--text-color);
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
    line-height: 48px;
  }
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

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 19px;
    margin-top: 24px;
  }
`;

export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: var(--text-color);

  @media screen and (min-width: 1280px) {
    width: 24px;
    height: 24px;
  }
`;

export const Line = styled.div`
  width: 100%;
  border: 1px solid var(--primary-color);
  margin-top: 33px;

  @media screen and (min-width: 768px) {
    margin-top: 51px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 94px;
  }
`;
