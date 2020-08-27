import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px 90px 20px;

  @media (max-width: 675px) {
    padding: 0 20px 50px 20px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;

  p {
    font-size: 22px;
    line-height: 1.4em;
    margin: 0;
    color: ${({ theme }) => theme.subHeading};

    @media (max-width: 675px) {
      font-size: 18px;
    }
  }
`;

export const Animation = styled.div`
  text-align: center;

  h4 {
    font-size: 52px;
    font-weight: bold;
    line-height: 1.5em;
    margin: 0;

    @media (max-width: 675px) {
      font-size: 40px;
    }
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`;
