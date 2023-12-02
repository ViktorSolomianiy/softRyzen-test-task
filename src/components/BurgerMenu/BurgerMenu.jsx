import { useState } from "react";
import Icons from "../../images/sprite.svg";

import { Modal } from "common/Modal/Modal";

import {
  Button,
  MenuIcon,
  Container,
  CloseButton,
  CloseIcon,
  CloseText,
  Line,
  Link,
  LinkList,
  ArrowIcon,
  NetworksLinksContainer,
  NetworksSvg,
} from "./BurgerMenuStyled";

export const BurgerMenu = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [animationModal, setAnimationModal] = useState(true);

  const handleToggleModal = () => setIsOpened(!isOpened);

  return (
    <div>
      <Button
        onClick={() => {
          setAnimationModal(true);
          handleToggleModal();
        }}
      >
        <MenuIcon width={16} height={16}>
          <use href={`${Icons}#icon-menu`}></use>
        </MenuIcon>
      </Button>

      {isOpened && (
        <Modal
          onCloseModal={handleToggleModal}
          isOpened={isOpened}
          animationModalOnSubmit={animationModal}
        >
          <Container>
            <CloseButton
              onClick={() => {
                setAnimationModal(false);
                handleToggleModal();
              }}
            >
              <CloseIcon>
                <use href={`${Icons}#icon-close`}></use>
              </CloseIcon>
              <CloseText>close</CloseText>
            </CloseButton>

            <Line />

            <LinkList>
              <li>
                <Link href="">
                  Main
                  <ArrowIcon>
                    <use href={`${Icons}#icon-top-right-arrow`}></use>
                  </ArrowIcon>
                </Link>
              </li>
              <li>
                <Link href="">
                  About
                  <ArrowIcon>
                    <use href={`${Icons}#icon-top-right-arrow`}></use>
                  </ArrowIcon>
                </Link>
              </li>
              <li>
                <Link href="">
                  Cases
                  <ArrowIcon>
                    <use href={`${Icons}#icon-top-right-arrow`}></use>
                  </ArrowIcon>
                </Link>
              </li>
              <li>
                <Link href="">
                  FAQ
                  <ArrowIcon>
                    <use href={`${Icons}#icon-top-right-arrow`}></use>
                  </ArrowIcon>
                </Link>
              </li>
              <li>
                <Link href="">
                  Contact Us
                  <ArrowIcon>
                    <use href={`${Icons}#icon-top-right-arrow`}></use>
                  </ArrowIcon>
                </Link>
              </li>
            </LinkList>
          </Container>

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
        </Modal>
      )}
    </div>
  );
};
