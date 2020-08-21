import styled from "styled-components";

const Container = styled.div`
  height: 320px;

  @media (max-width: 675px) {
    height: 220px;
  }
`;

const Image = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;

  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  object-fit: cover;
`;

export default function Work(props) {
  return (
    <Container>
      <Image src={props.image} />
    </Container>
  );
}
