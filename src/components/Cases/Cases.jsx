import Icons from "../../images/sprite.svg";

import {
  Container,
  Title,
  CasesInfoContainer,
  ButtonsContainer,
  CountCases,
  Button,
  LeftArrow,
  RightArrow,
  CasesList,
  Case,
  Image,
  CaseContainer,
  CaseInfoContainer,
  CaseTitle,
  CaseButton,
  CaseIconArrow,
  Line,
  CaseText,
} from "./CasesStyled";

import imgCases1x1 from "../../images/cases-1.jpg";
import imgCases1x2 from "../../images/cases-1@2x.jpg";
import imgCases1x3 from "../../images/cases-1@3x.jpg";

// import imgCases2x1 from "../../images/cases-2.jpg";
// import imgCases2x2 from "../../images/cases-2@2x.jpg";
// import imgCases2x3 from "../../images/cases-2@3x.jpg";

// import imgCases3x1 from "../../images/cases-3.jpg";
// import imgCases3x2 from "../../images/cases-3@2x.jpg";
// import imgCases3x3 from "../../images/cases-3@3x.jpg";

// import imgCases4x1 from "../../images/cases-4.jpg";
// import imgCases4x2 from "../../images/cases-4@2x.jpg";
// import imgCases4x3 from "../../images/cases-4@3x.jpg";

// import imgCases5x1 from "../../images/cases-5.jpg";
// import imgCases5x2 from "../../images/cases-5@2x.jpg";
// import imgCases5x3 from "../../images/cases-5@3x.jpg";

export const Cases = () => {
  const blocks = [
    {
      img: `${imgCases1x1} 1x, ${imgCases1x2} 2x, ${imgCases1x3} 3x`,
      title: "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
      text: "Wind Power for auto field irrigation",
      date: "July 2023",
    },
    // {
    //   img: `${imgCases2x1} 1x, ${imgCases2x2} 2x, ${imgCases2x3} 3x`,
    //   title: "Zhytomyr cityPrivate Enterprise “Bosch”",
    //   text: "Solar Panels for industrial use",
    //   date: "November 2023",
    // },
    // {
    //   img: `${imgCases3x1} 1x, ${imgCases3x2} 2x, ${imgCases3x3} 3x`,
    //   title: "Rivne cityPrivate Enterprise “Biotech”",
    //   text: "Thermal modules",
    //   date: "October 2023",
    // },
    // {
    //   img: `${imgCases4x1} 1x, ${imgCases4x2} 2x, ${imgCases4x3} 3x`,
    //   title: "Kherson cityPrivate Enterprise “HealthyFarm”",var(--opacity-text-color)
    //   text: "Wind power",
    //   date: "September 2021",
    // },
    // {
    //   img: `${imgCases5x1} 1x, ${imgCases5x2} 2x, ${imgCases5x3} 3x`,
    //   title: "Zaporizhia cityPrivate Enterprise “Biotech”",
    //   text: "Mini nuclear stations",
    //   date: "May 2021",
    // },
  ];

  return (
    <Container>
      <Title>Successful cases of our company</Title>

      <CasesInfoContainer>
        <CountCases>01 /05</CountCases>

        <ButtonsContainer>
          <Button>
            <LeftArrow>
              <use href={`${Icons}#icon-biggest-arrow`}></use>
            </LeftArrow>
          </Button>
          <Button>
            <RightArrow>
              <use href={`${Icons}#icon-biggest-arrow`}></use>
            </RightArrow>
          </Button>
        </ButtonsContainer>
      </CasesInfoContainer>

      <CasesList>
        {blocks.map(({ img, title, text, date }, index) => (
          <Case key={index}>
            <Image srcSet={img} alt="Cases" />

            <CaseContainer>
              <CaseInfoContainer>
                <CaseTitle>{title}</CaseTitle>
                <CaseButton>
                  <CaseIconArrow>
                    <use href={`${Icons}#icon-top-right-arrow`}></use>
                  </CaseIconArrow>
                </CaseButton>
              </CaseInfoContainer>

              <Line></Line>

              <CaseInfoContainer>
                <CaseText>{text}</CaseText>
                <CaseText>{date}</CaseText>
              </CaseInfoContainer>
            </CaseContainer>
          </Case>
        ))}
      </CasesList>
    </Container>
  );
};
