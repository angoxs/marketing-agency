import styled from "styled-components";

export const Container = styled.div`
  padding: 90px 30px;
  min-height: 100vh;
  z-index: 1;

  @media (max-width: 2000px) {
    min-height: 100vh;
  }

  @media (max-width: 1024px) {
    padding: 90px 20px;
  }
  @media (max-width: 900px) {
    padding: 60px 20px;
  }
`;
export const Main = styled.div`
  display: grid;
  grid-template-columns: 0.85fr 1fr;
  align-items: center;
  justify-content: stretch;
  grid-gap: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
export const Title = styled.h1`
  font-size: 44px;
  font-weight: bold;
  line-height: 125%;
  margin: 0;
  margin-top: 10px;

  @media (max-width: 1024px) {
    font-size: 32px;
  }

  @media (max-width: 900px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.p`
  font-size: 22px;
  line-height: 1.4em;
  color: #57577d;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 900px) {
    font-size: 18px;
  }
`;
export const Button = styled.button`
  padding: 15px 30px;
  color: white;
  background: blue;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  transition: all 200ms;

  :hover {
    background: #0070f3;
    box-shadow: 0 10px 20px rgba(0, 0, 255, 0.15);
  }

  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 15px 30px;
  }

  @media (max-width: 900px) {
    font-size: 14px;
    padding: 12px 25px;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;

  #secondButton {
    background: #e7e7ff;
    color: blue;

    @media (max-width: 1024px) {
      font-size: 14px;
      padding: 15px 30px;
    }

    @media (max-width: 900px) {
      font-size: 14px;
      padding: 12px 25px;
      border: 1px solid #d7d7fd;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: flex-start;
  grid-gap: 10px;
  max-width: 420px;

  @media (max-width: 1024px) {
    max-width: 350px;
  }

  @media (max-width: 900px) {
    max-width: 350px;
  }
`;
export const Welcome = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const Div = styled.div`
  height: 5px;
  width: 35px;
  border-radius: 2px;
  background-color: blue;
`;
export const Span = styled.span`
  font-size: 12px;
  color: blue;
  margin-left: 10px;
  font-weight: bold;
`;

export const FeaturedImage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1526570207772-784d36084510?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80");
  height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;

  @media (max-width: 1024px) {
    height: 400px;
  }

  @media (max-width: 675px) {
    height: 350px;
  }

  @media (max-width: 375px) {
    height: 250px;
  }
`;

export const SideColor = styled.div`
  background-image: url("https://images.unsplash.com/photo-1510674485131-dc88d96369b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=901&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 110vh;
  opacity: 0.4;
  width: 100%;
  position: absolute;
  z-index: -1;
  left: 0;
  margin-top: -180px;
  border-bottom-right-radius: 10px;

  @media (max-width: 1024px) {
    background-color: #f3f3fd;
    height: 100vh;
    opacity: 0.4;
  }
`;
