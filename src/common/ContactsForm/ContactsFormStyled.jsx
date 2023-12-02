import { Form, Field } from "formik";
import styled from "styled-components";

export const FormStyled = styled(Form)`
  height: 560px;
  margin-top: 24px;
  padding: 36px 12px;
  background-color: var(--second-background-color);
`;

export const FieldStyled = styled(Field)`
  font-family: var(--fira-sans-font);
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  letter-spacing: -0.04em;
  width: 100%;
  border: 0;
  outline: 0;
  padding: 10px 2px;
  border-bottom: 1px solid var(--primary-color);
  color: var(--text-color);
  background-color: var(--second-background-color);
`;

export const TextareaStyled = styled(Field)`
  height: 174px;
  font-family: var(--fira-sans-font);
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  letter-spacing: -0.04em;
  width: 100%;
  border: 0;
  outline: 0;
  padding: 10px 2px;
  resize: none;
  border-bottom: 1px solid var(--primary-color);
  color: var(--text-color);
  background-color: var(--second-background-color);
`;

export const FieldsContainer = styled.div`
  display: grid;
  grid-row-gap: 28px;
  margin-bottom: 16px;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: end;
  align-content: end;
`;

export const FieldName = styled.p`
  font-family: var(--fira-sans-font);
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  letter-spacing: -0.04em;
  color: var(--text-color);
  text-align: justify;
  margin-bottom: 4px;
`;
