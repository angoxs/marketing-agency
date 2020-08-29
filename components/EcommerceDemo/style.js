import styled from "styled-components";

export const Container = styled.div`
  padding: 0 0px 0px 0px;

  @media (max-width: 2000px) {
    min-height: 70vh;
  }

  @media (max-width: 1024px) {
    padding: 0 0px 0px 0px;
  }
  @media (max-width: 900px) {
    padding: 0 0px 0px 0px;
  }
`;

export const Main = styled.div`
  background-image: url("/Eco.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 70vh;
  border-radius: 0px;
`;
