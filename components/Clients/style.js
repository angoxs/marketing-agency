import styled from "styled-components";

export const Container = styled.div`
  padding: 90px 30px;

  z-index: 1;

  @media (max-width: 2000px) {
    min-height: 70vh;
  }

  @media (max-width: 1024px) {
    padding: 90px 20px;
  }
  @media (max-width: 900px) {
    padding: 0 20px 60px 20px;
  }
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.35fr;
  align-items: flex-end;
  justify-content: stretch;
  grid-gap: 60px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;
export const TitleContainer = styled.div`
  max-width: 800px;
`;
export const Title = styled.h2`
  font-size: 52px;
  font-weight: bold;
  line-height: 125%;
  color: ${({ theme }) => theme.heading};

  margin: 0;
  margin-bottom: 20px;
  max-width: 500px;

  @media (max-width: 1024px) {
    font-size: 48px;
  }

  @media (max-width: 900px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 22px;
  line-height: 1.4em;
  margin: 0;
  color: ${({ theme }) => theme.subHeading};

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 900px) {
    font-size: 18px;
  }
`;
export const Quote = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    justify-content: flex-start;
  }
`;
export const Div = styled.div`
  height: 5px;
  width: 35px;
  border-radius: 2px;
  background-color: blue;
`;
export const Span = styled.span`
  font-size: 14px;
  color: blue;
  margin-left: 10px;
  font-weight: bold;

  @media (max-width: 900px) {
    font-size: 12px;
  }
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;
  justify-content: stretch;
  width: 100%;
  grid-gap: 20px;
  margin-top: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, auto);
  }

  @media (max-width: 675px) {
    grid-template-columns: repeat(2, auto);
  }
`;
