import Icons from "../../images/sprite.svg";
import { ButtonStyled, IconButton, Svg } from "./AnchorButtonStyled";

export const AnchorButton = ({ children }) => {
  return (
    <ButtonStyled>
      {children}
      <IconButton>
        <Svg>
          <use href={`${Icons}#icon-arrow-down`}></use>
        </Svg>
      </IconButton>
    </ButtonStyled>
  );
};
