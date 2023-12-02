import { useFormik, Formik } from "formik";

import { Button } from "common/Button/Button";

import {
  FormStyled,
  FieldsContainer,
  FieldStyled,
  TextareaStyled,
  FieldName,
  ButtonContainer,
} from "./ContactsFormStyled";

export const ContactsForm = () => {
  const { handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  return (
    <Formik>
      <FormStyled onSubmit={handleSubmit}>
        <FieldsContainer>
          <div>
            <FieldName>* Full Name:</FieldName>
            <FieldStyled
              as="input"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>

          <div>
            <FieldName>* E-mail:</FieldName>
            <FieldStyled
              as="input"
              type="email"
              name="email"
              placeholder="E-mail"
            />
          </div>

          <div>
            <FieldName>* Phone:</FieldName>
            <FieldStyled as="input" type="tel" name="tel" placeholder="Phone" />
          </div>

          <div>
            <FieldName>* Message:</FieldName>
            <TextareaStyled
              as="textarea"
              type="text"
              name="message"
              placeholder="My message...."
            />
          </div>
        </FieldsContainer>

        <ButtonContainer>
          <Button>Send</Button>
        </ButtonContainer>
      </FormStyled>
    </Formik>
  );
};
