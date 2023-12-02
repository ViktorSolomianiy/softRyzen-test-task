import Icons from "../../images/sprite.svg";
import { ButtonStyled, IconButton, Svg } from "./ButtonStyled";

export const Button = ({ children }) => {
  return (
    <ButtonStyled>
      {children}
      <IconButton>
        <Svg>
          <use href={`${Icons}#icon-arrow-right`}></use>
        </Svg>
      </IconButton>
    </ButtonStyled>
  );
};
