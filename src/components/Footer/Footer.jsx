import Icons from "../../images/sprite.svg";
import {
  FooterContainer,
  LogoContainer,
  IconButton,
  NetworksLinksContainer,
  Svg,
  NetworksSvg,
  InfoContainer,
  Link,
} from "./FooterStyled";

export const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <svg width={269} height={40}>
          <use href={`${Icons}#icon-full-logo`}></use>
        </svg>

        <IconButton>
          <Svg>
            <use href={`${Icons}#icon-arrow-top`}></use>
          </Svg>
        </IconButton>
      </LogoContainer>

      <NetworksLinksContainer>
        <a href="*">
          <NetworksSvg>
            <use href={`${Icons}#icon-facebook`}></use>
          </NetworksSvg>
        </a>
        <a href="*">
          <NetworksSvg>
            <use href={`${Icons}#icon-instagram`}></use>
          </NetworksSvg>
        </a>
      </NetworksLinksContainer>

      <InfoContainer>
        <Link href="https://maps.app.goo.gl/R4C7wde5yyejfcPf8">
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </Link>
        <Link href="mailto: office@ecosolution.com">
          office@ecosolution.com
        </Link>
        <Link href="*">ecosolution © 2023</Link>
      </InfoContainer>
    </FooterContainer>
  );
};
