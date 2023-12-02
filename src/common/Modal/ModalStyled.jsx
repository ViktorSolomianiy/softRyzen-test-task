import styled from "@emotion/styled";

import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
   from {
     opacity: 1;
   }
   to {
     opacity: 0;
   }
 `;

export const ModalContainer = styled.div`
  padding: 36px 20px;

  @media screen and (min-width: 480px) {
    display: grid;
    justify-content: end;
    padding: 36px 30px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  opacity: ${(props) =>
    props.animationModal && props.animationModalOnSubmit ? 1 : 0};
  visibility: ${(props) =>
    props.animationModal && props.animationModalOnSubmit
      ? "visible"
      : "hidden"};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--overlay);
  z-index: 1200;
  transition: opacity 300ms ease, visibility 300ms ease;
  animation: ${(props) =>
      props.animationModal && props.animationModalOnSubmit ? fadeIn : fadeOut}
    300ms ease;
`;

export const ModalStyled = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  border-radius: 25px;
  background-color: var(--modal-background-color);
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 480px) {
    width: 320px;
    margin: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 365px;
    height: 873px;
  }
`;
