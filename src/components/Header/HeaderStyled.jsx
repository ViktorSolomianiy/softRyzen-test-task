import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  margin-top: 36px;

  @media screen and (min-width: 1280px) {
    margin-top: 24px;
  }
`;

export const ButtonsContainer = styled.div`
  display: grid;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto auto;
    grid-column-gap: 12px;
  }
`;

// export const LogoContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   grid-column-gap: 4px;
//   justify-content: center;
//   align-items: center;
// `;
