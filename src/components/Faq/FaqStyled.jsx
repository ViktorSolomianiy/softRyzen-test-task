import styled from "styled-components";

export const Container = styled.div`
  margin-top: 36px;
`;

export const Title = styled.h2`
  font-family: var(--oswald-font);
  font-size: 28px;
  line-height: 28px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--text-color);
`;

export const FaqList = styled.ul`
  margin-top: 16px;
`;

export const QuestionContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
`;

export const OpenCloseIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

export const FaqTitle = styled.h3`
  font-family: var(--fira-sans-font);
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  letter-spacing: -0.04em;
  color: var(--text-color);
  text-align: justify;
`;

export const FaqText = styled.p`
  font-family: var(--fira-sans-font);
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  letter-spacing: -0.04em;
  margin-top: 16px;
  color: var(--text-color);
  text-align: justify;
  padding-left: 24px;
`;

export const HelpText = styled.p`
  font-family: var(--fira-sans-font);
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  letter-spacing: -0.04em;
  color: var(--text-color);
  text-align: center;
  margin-top: 36px;
`;

export const ButtonContainer = styled.div`
  display: grid;
  margin: 0 auto;
  width: fit-content;
  margin-top: 12px;
`;

export const Line = styled.div`
  width: 100%;
  border: 1px solid var(--primary-color);
  margin-top: 24px;
`;

export const FaqLine = styled.div`
  width: 100%;
  border: 1px solid var(--primary-color);
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const LastFaqLine = styled.div`
  display: none;
`;
