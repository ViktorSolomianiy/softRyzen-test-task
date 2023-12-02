import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 24px;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: var(--second-color);
  border: 0;
  outline: 0;
  border-radius: 500px;
  cursor: pointer;
  padding: 12px 12px 12px 12px;
`;

export const MenuIcon = styled.svg`
  fill: var(--burger-menu-icon-color);
  stroke: var(--burger-menu-icon-color);
`;

export const CloseButton = styled.button`
  cursor: pointer;
  display: grid;
  grid-template-columns: auto auto;
  align-items: end;
  border: 0;
  outline: 0;
  background-color: transparent;
`;

export const CloseIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: #ffffff;
`;

export const CloseText = styled.p`
  font-family: var(--fira-sans-font);
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: -0.04em;
  color: #ffffff;
`;

export const LinkList = styled.ul`
  display: grid;
  grid-row-gap: 8px;
  margin-top: 24px;
`;

export const Link = styled.a`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 8px;
  align-items: center;
  font-family: var(--fira-sans-font);
  font-size: 24px;
  line-height: 29px;
  font-weight: 400;
  letter-spacing: -0.04em;
  color: #ffffff;
`;

export const Line = styled.div`
  width: 100%;
  border: 1px solid #ffffff;
  margin-top: 8px;
`;

export const ArrowIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #ffffff;
`;

export const NetworksLinksContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 8px;
  bottom: 24px;
  left: 24px;
`;

export const NetworksSvg = styled.svg`
  width: 24px;
  height: 24px;
  fill: #ffffff;
  stroke: #ffffff;
`;
