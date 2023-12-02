import { useMediaQuery } from "react-responsive";
import Icons from "../../images/sprite.svg";

import { BurgerMenu } from "components/BurgerMenu/BurgerMenu";
import { AnchorButton } from "common/AnchorButton/AnchorButton";

import { Container, ButtonsContainer } from "./HeaderStyled";

export const Header = () => {
  const IsAnchorButton = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <header>
      <Container>
        <svg width={269} height={40}>
          <use href={`${Icons}#icon-full-logo`}></use>
        </svg>

        <ButtonsContainer>
          <BurgerMenu />
          {IsAnchorButton && <AnchorButton>Get in touch</AnchorButton>}
        </ButtonsContainer>
      </Container>
    </header>
  );
};

// {/* <LogoContainer>
//   <svg width={31} height={18}>
//     <use href={`${Icons}#icon-logo`}></use>
//   </svg>

//   <svg width={170} height={40}>
//     <use href={`${Icons}#icon-ecosolution`}></use>
//   </svg>

//   <svg width={60} height={18}>
//     <use href={`${Icons}#icon-greenercy`}></use>
//   </svg>
// </LogoContainer> */}
