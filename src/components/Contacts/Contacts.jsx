import Icons from "../../images/sprite.svg";

import { ContactsForm } from "common/ContactsForm/ContactsForm";

import {
  Container,
  Title,
  ContactUsContainer,
  LinkPhoneContainer,
  LinkContainer,
  NetworksContainer,
  NetworksLinksContainer,
  Text,
  Link,
  Svg,
  Line,
} from "./ContactsStyled";

export const Contacts = () => {
  return (
    <Container>
      <Title>Contact us</Title>

      <ContactUsContainer>
        <Text>Phone:</Text>

        <LinkPhoneContainer>
          <Link href=":tel">
            <Svg>
              <use href={`${Icons}#icon-call`}></use>
            </Svg>
            <p>38 (098) 12 34 567</p>
          </Link>
          <Link href=":tel">
            <Svg>
              <use href={`${Icons}#icon-call`}></use>
            </Svg>
            <p>38 (098) 12 34 567</p>
          </Link>
        </LinkPhoneContainer>

        <Text>E-mail:</Text>

        <LinkContainer>
          <Link href="mailto: office@ecosolution.com">
            <Svg>
              <use href={`${Icons}#icon-sms`}></use>
            </Svg>
            <p>office@ecosolution.com</p>
          </Link>
        </LinkContainer>

        <Text>Address:</Text>

        <LinkContainer>
          <Link href="https://maps.app.goo.gl/R4C7wde5yyejfcPf8">
            <Svg>
              <use href={`${Icons}#icon-map`}></use>
            </Svg>
            <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
          </Link>
        </LinkContainer>

        <NetworksContainer>
          <Text>Social Networks:</Text>

          <NetworksLinksContainer>
            <Link href="*">
              <Svg>
                <use href={`${Icons}#icon-facebook`}></use>
              </Svg>
            </Link>
            <Link href="*">
              <Svg>
                <use href={`${Icons}#icon-instagram`}></use>
              </Svg>
            </Link>
          </NetworksLinksContainer>
        </NetworksContainer>

        <ContactsForm />

        <Line />
      </ContactUsContainer>
    </Container>
  );
};
