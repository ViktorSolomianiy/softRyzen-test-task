import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;
