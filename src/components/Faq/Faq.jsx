import { useState } from "react";
import Icons from "../../images/sprite.svg";

import { AnchorButton } from "common/AnchorButton/AnchorButton";

import {
  Container,
  Title,
  FaqList,
  QuestionContainer,
  Button,
  OpenCloseIcon,
  FaqTitle,
  FaqText,
  HelpText,
  ButtonContainer,
  Line,
  FaqLine,
  LastFaqLine,
} from "./FaqStyled";

export const Faq = () => {
  const blocks = [
    {
      iconPlus: `${Icons}#icon-plus`,
      iconMinus: `${Icons}#icon-minus`,
      title:
        "How do wind turbines and solar panels work together in a renewable energy system?",
      text: "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    },
    {
      iconPlus: `${Icons}#icon-plus`,
      iconMinus: `${Icons}#icon-minus`,
      title:
        "What sets EcoSolution's renewable energy solutions apart from others on the market?",
      text: "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    },
    {
      iconPlus: `${Icons}#icon-plus`,
      iconMinus: `${Icons}#icon-minus`,
      title:
        "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",
      text: "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    },
    {
      iconPlus: `${Icons}#icon-plus`,
      iconMinus: `${Icons}#icon-minus`,
      title:
        "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
      text: "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    },
    {
      iconPlus: `${Icons}#icon-plus`,
      iconMinus: `${Icons}#icon-minus`,
      title:
        "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
      text: "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    },
  ];

  const [openBlocks, setOpenBlocks] = useState({
    [blocks[0].title]: true,
  });

  const toggleBlock = (title) => {
    setOpenBlocks((prevOpenBlocks) => {
      const newOpenBlocks = { ...prevOpenBlocks };

      Object.keys(newOpenBlocks).forEach((blockTitle) => {
        if (blockTitle !== title) {
          newOpenBlocks[blockTitle] = false;
        }
      });

      newOpenBlocks[title] = !prevOpenBlocks[title];

      return newOpenBlocks;
    });
  };

  return (
    <Container>
      <Title>Frequently Asked Questions</Title>

      <Line></Line>

      <FaqList>
        {blocks.map(({ title, text, iconMinus, iconPlus }, index) => (
          <li key={index}>
            <QuestionContainer>
              <Button onClick={() => toggleBlock(title, index)}>
                <OpenCloseIcon>
                  <use
                    href={openBlocks[title] && !index[0] ? iconMinus : iconPlus}
                  ></use>
                </OpenCloseIcon>
              </Button>

              <FaqTitle>{title}</FaqTitle>
            </QuestionContainer>

            {openBlocks[title] && <FaqText>{text}</FaqText>}

            {index === blocks.length - 1 ? <LastFaqLine /> : <FaqLine />}
          </li>
        ))}
      </FaqList>

      <HelpText>Didn't find the answer to your question? </HelpText>

      <ButtonContainer>
        <AnchorButton>Contact Us</AnchorButton>
      </ButtonContainer>
    </Container>
  );
};
