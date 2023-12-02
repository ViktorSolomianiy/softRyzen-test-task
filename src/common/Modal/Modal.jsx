import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { Overlay, ModalStyled, ModalContainer } from "./ModalStyled";

const modalRoot = document.getElementById("modal-root");

export const Modal = ({
  animationModalOnSubmit,
  children,
  onCloseModal,
  isOpened,
}) => {
  const [animationModal, setAnimationModal] = useState(isOpened);

  const closeModal = useCallback(() => {
    setAnimationModal(false);

    setTimeout(() => {
      onCloseModal();
    }, 250);
  }, [onCloseModal]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [closeModal]);

  const handleOverlayClick = ({ currentTarget, target }) => {
    if (currentTarget !== target) {
      return;
    }

    closeModal();
  };

  return createPortal(
    <Overlay
      animationModal={animationModal}
      animationModalOnSubmit={animationModalOnSubmit}
    >
      <ModalContainer onClick={handleOverlayClick}>
        <ModalStyled>{children}</ModalStyled>
      </ModalContainer>
    </Overlay>,

    modalRoot
  );
};
