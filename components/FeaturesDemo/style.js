import styled from "styled-components";

export const Container = styled.div`
  padding: 0 30px 90px 30px;

  @media (max-width: 2000px) {
    min-height: 70vh;
  }

  @media (max-width: 1024px) {
    padding: 0 20px 50px 20px;
  }
  @media (max-width: 900px) {
    padding: 0 20px 20px 20px;
  }
`;

export const Main = styled.div`
  background-image: url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 70vh;
  border-radius: 10px;
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: stretch;
  width: 100%;
  grid-gap: 60px;
  margin-top: 80px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 675px) {
    grid-template-columns: repeat(1, auto);
  }

  a {
    border: none;
  }
`;
