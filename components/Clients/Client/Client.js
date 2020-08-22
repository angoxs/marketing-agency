import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  border: 1px solid #e7e7ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;
const IMG = styled.img`
  width: 60px;

  @media (max-width: 1024px) {
    width: 44px;
  }
`;

export default function Client(props) {
  return (
    <Container>
      <IMG src={props.image} />
    </Container>
  );
}
