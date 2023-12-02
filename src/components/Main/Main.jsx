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

export const Main = () => {
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
      </AddressTextContainer>

      <Image
        srcSet={`${imgHero1x1} 1x, ${imgHero1x2} 2x, ${imgHero1x3} 3x`}
        alt="hero"
      />
    </Container>
  );
};
