import Icons from "../../images/sprite.svg";

import {
  Container,
  Title,
  Paragraph,
  BlockContainer,
  BlockList,
  Block,
  BlockTitle,
  BlockText,
  Svg,
  Line,
} from "./AboutStyled";

export const About = () => {
  const blocks = [
    {
      title: "Openness",
      icon: `${Icons}#icon-openness`,
      text: "to the world, people, new ideas and projects",
    },
    {
      title: "Responsibility",
      icon: `${Icons}#icon-responsibility`,
      text: "we are aware that the results of our work have an impact on our lives and the lives of future generations",
    },
    {
      title: "Innovation",
      icon: `${Icons}#icon-innovation`,
      text: "we use the latest technology to implement non-standard solutions",
    },
    {
      title: "Quality",
      icon: `${Icons}#icon-quality`,
      text: "we do not strive to be the first among others, but we want to be the best in our business",
    },
  ];

  return (
    <Container>
      <Title>Main values of our company</Title>
      <Paragraph>
        EcoSolution envisions a world where sustainable energy solutions power a
        brighter and cleaner future for all. We aspire to be at the forefront of
        the global shift towards renewable energy, leading the way in innovative
        technologies that harness the power of nature to meet the world's energy
        needs.
      </Paragraph>

      <BlockList>
        {blocks.map(({ icon, title, text }, index) => (
          <Block key={index}>
            <BlockContainer>
              <Svg>
                <use href={icon}></use>
              </Svg>
              <BlockTitle>{title}</BlockTitle>
            </BlockContainer>

            <Line></Line>

            <BlockText>{text}</BlockText>
          </Block>
        ))}
      </BlockList>
    </Container>
  );
};
