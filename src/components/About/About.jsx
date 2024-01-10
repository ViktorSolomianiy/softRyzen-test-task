import { useMediaQuery } from "react-responsive";
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
  GridBlockContainer,
  GridContainer,
  VerticalLine,
  Image,
} from "./AboutStyled";

import imgTablet1x1 from "../../images/tablet-about-photo-1.jpg";
import imgTablet1x2 from "../../images/tablet-about-photo-1@2x.jpg";
import imgTablet1x3 from "../../images/tablet-about-photo-1@3x.jpg";

import imgTablet2x1 from "../../images/tablet-about-photo-2.jpg";
import imgTablet2x2 from "../../images/tablet-about-photo-2@2x.jpg";
import imgTablet2x3 from "../../images/tablet-about-photo-2@3x.jpg";

import imgDesktop1x1 from "../../images/desktop-about-photo-1.jpg";
import imgDesktop1x2 from "../../images/desktop-about-photo-1@2x.jpg";
import imgDesktop1x3 from "../../images/desktop-about-photo-1@3x.jpg";

import imgDesktop2x1 from "../../images/desktop-about-photo-2.jpg";
import imgDesktop2x2 from "../../images/desktop-about-photo-2@2x.jpg";
import imgDesktop2x3 from "../../images/desktop-about-photo-2@3x.jpg";

export const About = () => {
  const IsTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1279px)",
  });
  const IsDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  return (
    <Container>
      <GridContainer>
        <Title>Main values of {IsTablet && <br />} our company</Title>

        {IsTablet && <VerticalLine />}
        {IsDesktop && <VerticalLine />}

        <Paragraph>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </Paragraph>
      </GridContainer>

      <BlockList>
        <Block className="block">
          <GridBlockContainer>
            <BlockContainer>
              <Svg>
                <use href={`${Icons}#icon-openness`}></use>
              </Svg>
              <BlockTitle>Openness</BlockTitle>
            </BlockContainer>

            <Line></Line>

            <BlockText>to the world, people, new ideas and projects</BlockText>
          </GridBlockContainer>
        </Block>

        <Block className="block">
          <GridBlockContainer>
            <BlockContainer>
              <Svg>
                <use href={`${Icons}#icon-responsibility`}></use>
              </Svg>
              <BlockTitle>Responsibility</BlockTitle>
            </BlockContainer>

            <Line></Line>

            <BlockText>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </BlockText>
          </GridBlockContainer>
        </Block>

        {IsTablet && (
          <Image
            className="image"
            srcSet={`${imgTablet1x1} 1x, ${imgTablet1x2} 2x, ${imgTablet1x3} 3x`}
            alt="Tablet Image Description"
          />
        )}

        {IsDesktop && (
          <Image
            className="image"
            srcSet={`${imgDesktop1x1} 1x, ${imgDesktop1x2} 2x, ${imgDesktop1x3} 3x`}
            alt="Tablet Image Description"
          />
        )}

        {IsTablet && (
          <Image
            className="image"
            srcSet={`${imgTablet2x1} 1x, ${imgTablet2x2} 2x, ${imgTablet2x3} 3x`}
            alt="Tablet Image Description"
          />
        )}

        {IsDesktop && (
          <Image
            className="image"
            srcSet={`${imgDesktop2x1} 1x, ${imgDesktop2x2} 2x, ${imgDesktop2x3} 3x`}
            alt="Tablet Image Description"
          />
        )}

        <Block className="block">
          <GridBlockContainer>
            <BlockContainer>
              <Svg>
                <use href={`${Icons}#icon-innovation`}></use>
              </Svg>
              <BlockTitle>Innovation</BlockTitle>
            </BlockContainer>

            <Line></Line>

            <BlockText>
              we use the latest technology to implement non-standard solutions
            </BlockText>
          </GridBlockContainer>
        </Block>

        <Block className="block">
          <GridBlockContainer>
            <BlockContainer>
              <Svg>
                <use href={`${Icons}#icon-quality`}></use>
              </Svg>
              <BlockTitle>Quality</BlockTitle>
            </BlockContainer>

            <Line></Line>

            <BlockText>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </BlockText>
          </GridBlockContainer>
        </Block>
      </BlockList>
    </Container>
  );
};
