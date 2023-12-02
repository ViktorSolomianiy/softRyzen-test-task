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
  text-align: center;
`;

export const ContactUsContainer = styled.div`
  margin-top: 24px;
`;

export const Text = styled.p`
  font-family: var(--fira-sans-font);
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  letter-spacing: -0.04em;
  color: var(--text-color);
  text-align: justify;
  margin-top: 24px;
`;

export const ContactText = styled.p`
  font-family: var(--fira-sans-font);
  font-size: 20px;
  line-height: 14px;
  font-weight: 400;
  letter-spacing: -0.04em;
  color: var(--text-color);
  text-align: justify;
`;

export const LinkPhoneContainer = styled.div`
  display: grid;
  grid-row-gap: 12px;
  margin-top: 8px;
`;

export const LinkContainer = styled.div`
  margin-top: 8px;
`;

export const NetworksContainer = styled.div`
  display: grid;
  margin-top: 20px;
`;

export const NetworksLinksContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 24px;
  margin-top: 20px;
  margin-left: 12px;
  margin-bottom: 12px;
`;

export const Link = styled.a`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 8px;
  align-items: center;
  font-family: var(--fira-sans-font);
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: -0.04em;
  color: var(--text-color);
  text-align: justify;
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--icon-color);
  stroke: var(--icon-color);
`;

export const Line = styled.div`
  width: 100%;
  border: 1px solid var(--primary-color);
  margin-top: 36px;
`;
