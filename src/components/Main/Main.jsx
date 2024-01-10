import { useMediaQuery } from "react-responsive";

import { Button } from "common/Button/Button";

import {
  Container,
  Title,
  Paragraph,
  ButtonContainer,
  Line,
  AddressTextContainer,
  AddressText,
  Image,
  GridContainer,
  GridParagraphContainer,
} from "./MainStyled";

import imgHero1x1 from "../../images/mobile-hero.jpg";
import imgHero1x2 from "../../images/mobile-hero@2x.jpg";
import imgHero1x3 from "../../images/mobile-hero@3x.jpg";

import imgHero2x1 from "../../images/tablet-hero.jpg";
import imgHero2x2 from "../../images/tablet-hero@2x.jpg";
import imgHero2x3 from "../../images/tablet-hero@2x.jpg";

import imgHero3x1 from "../../images/desktop-hero.jpg";
import imgHero3x2 from "../../images/desktop-hero@2x.jpg";
import imgHero3x3 from "../../images/desktop-hero@3x.jpg";

export const Main = () => {
  const IsMobile = useMediaQuery({
    query: "(min-width: 360px) and (max-width: 767px)",
  });
  const IsTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1279px)",
  });
  const IsDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  return (
    <Container>
      <GridContainer>
        <Title>RENEWABLE ENERGY For any task</Title>

        <GridParagraphContainer>
          <Paragraph>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </Paragraph>

          <ButtonContainer>
            <Button>Load more</Button>
          </ButtonContainer>
        </GridParagraphContainer>
      </GridContainer>

      <Line></Line>

      <AddressTextContainer>
        <AddressText>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </AddressText>
        <AddressText>office@ecosolution.com</AddressText>
        {IsTablet && <AddressText>ecosolution © 2023</AddressText>}
      </AddressTextContainer>

      {IsMobile && (
        <Image
          srcSet={`${imgHero1x1} 1x, ${imgHero1x2} 2x, ${imgHero1x3} 3x`}
          alt="hero"
        />
      )}

      {IsTablet && (
        <Image
          srcSet={`${imgHero2x1} 1x, ${imgHero2x2} 2x, ${imgHero2x3} 3x`}
          alt="hero"
        />
      )}

      {IsDesktop && (
        <Image
          srcSet={`${imgHero3x1} 1x, ${imgHero3x2} 2x, ${imgHero3x3} 3x`}
          alt="hero"
        />
      )}
    </Container>
  );
};
