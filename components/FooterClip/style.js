import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 30px;
  background: #1b1b86;
  position: relative;
  bottom: 0;
  right: 0;
  left: 0;

  @media (max-width: 900px) {
    padding: 20px;
  }
`;

export const Clip = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    color: white;
    font-size: 12px;
  }
`;
