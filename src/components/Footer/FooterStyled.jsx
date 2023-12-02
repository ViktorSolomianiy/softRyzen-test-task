import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin-top: 24px;
`;

export const LogoContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
`;

export const IconButton = styled.button`
  outline: 0;
  border: 0;
  display: grid;
  place-items: center;
  justify-self: end;
  margin-left: 12px;
  background-color: var(--primary-color);
  border-radius: 500px;
  padding: 8px;
`;

export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--text-color);
`;

export const NetworksLinksContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 8px;
  margin: 0 auto;
  margin-top: 24px;
  width: fit-content;
`;

export const NetworksSvg = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--icon-color);
  stroke: var(--icon-color);
`;

export const Link = styled.a`
  font-family: var(--fira-sans-font);
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  letter-spacing: -0.04em;
  color: var(--text-color);
  text-align: center;
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-row-gap: 16px;
  margin-top: 24px;
  margin-bottom: 24px;
`;
