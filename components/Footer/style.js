import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 30px;
  background: #000086;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: stretch;
  justify-content: stretch;

  @media (max-width: 990px) {
    grid-template-columns: repeat(4, auto);
  }

  @media (max-width: 675px) {
    grid-template-columns: repeat(2, auto);
    grid-gap: 40px;
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(2, auto);
    grid-gap: 20px;
  }
`;

export const FirstGroup = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-gap: 10px;
`;
export const SecondGroup = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-gap: 10px;
`;

export const ThirdGroup = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-gap: 10px;
`;

export const Text = styled.a`
  color: white;
  font-size: 14px;

  span {
    font-weight: bold;
    color: yellow;
  }

  @media (max-width: 675px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  font-size: 14px;
  border: none;
  color: blue;
  font-weight: bold;
  background: white;
  border-radius: 6px;
  cursor: pointer;

  @media (max-width: 990px) {
    display: none;
  }
`;
