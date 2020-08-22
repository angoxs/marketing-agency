import styled from "styled-components";

const Container = styled.div`
  height: 320px;

  @media (max-width: 675px) {
    height: 220px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  object-fit: cover;
`;
const Button = styled.button`
  position: absolute;
  z-index: 2;
`;

export default function Work(props) {
  return (
    <Container>
      <Image src={props.image}></Image>
    </Container>
  );
}
