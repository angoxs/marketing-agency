import styled from "styled-components";

export const Container = styled.div`
  padding: 90px 30px;
  @media (max-width: 1024px) {
    padding: 60px 20px;
  }
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const WorksGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  justify-content: stretch;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 675px) {
    grid-template-columns: 1fr;
  }
`;
export const Title = styled.div`
  font-size: 44px;
  font-weight: bold;
  line-height: 125%;
  margin: 0;
  margin-bottom: 20px;
`;
