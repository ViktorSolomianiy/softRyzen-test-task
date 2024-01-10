import styled from "styled-components";

export const Container = styled.div`
  margin-top: 146px;

  @media screen and (min-width: 768px) {
    margin-top: 164px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 200px;
  }
`;

export const GridContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const GridParagraphContainer = styled.div`
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-rows: 1fr auto;
  }
`;

export const Title = styled.h1`
  font-family: var(--oswald-font);
  font-size: 36px;
  line-height: 36px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--text-color);

  @media screen and (min-width: 768px) {
    width: 300px;
    font-size: 48px;
    line-height: 48px;
    grid-column: 1 / span 1;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    font-size: 64px;
    line-height: 64px;
    grid-column: 1 / span 1;
  }
`;

export const Paragraph = styled.p`
  font-family: var(--fira-sans-font);
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  letter-spacing: -0.04em;
  margin-top: 24px;
  margin-bottom: 24px;
  color: var(--text-color);

  @media screen and (min-width: 360px) and (max-width: 767px) {
    text-align: justify;
  }

  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 43px;
  }

  @media screen and (min-width: 1280px) {
    grid-column: 2 / span 1;
    margin: 0;
  }
`;

export const ButtonContainer = styled.div`
  display: grid;

  margin: 0 auto;
  width: fit-content;

  @media screen and (min-width: 768px) {
    grid-column: 2;
    margin: 0;
  }
`;

export const Line = styled.div`
  width: 100%;
  border: 1px solid var(--primary-color);
  margin-top: 24px;
`;

export const AddressTextContainer = styled.div`
  display: grid;
  place-items: center;
  grid-gap: 8px;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    margin-top: 16px;
    grid-gap: 0;
  }
`;

export const AddressText = styled.p`
  font-family: var(--fira-sans-font);
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.04em;
  font-weight: 400;
  color: var(--text-color);
  white-space: nowrap;
`;

export const Image = styled.img`
  width: 100%;
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 36px;
  }
`;
