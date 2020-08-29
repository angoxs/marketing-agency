import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  border: 1px solid #e7e7ff;
  border-radius: 10px;
  -webkit-transition: all 0.25s;
  -o-transition: all 0.25s;
  transition: all 0.25s;

  :hover {
    box-shadow: 0 20px 40px rgba(240, 240, 240, 1);
    background: #fefefe;
    border: 1px solid #fefefe;
    transform: translateY(-6px);
  }
`;
const IMG = styled.img`
  width: 100%;
  height: 220px;
  border-radius: 10px;
  object-fit: cover;
`;
const Title = styled.h3`
  font-size: 32px;
  margin: 0;
  margin-top: 20px;
  line-height: 125%;
  font-weight: 600;
  font-weight: bold;

  @media (max-width: 900px) {
    font-size: 22px;
  }
`;
const Subtitle = styled.p`
  font-size: 18px;
  line-height: 1.4em;
  color: #57577d;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;
const Button = styled.button`
  padding: 8px 18px;
  font-size: 16px;
  font-weight: bold;
  background: #e7e7ff;
  border: none;
  color: black;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;

export default function RelatedDesign(props) {
  return (
    <Container>
      <IMG src={props.image} />
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
      <Button>Learn more</Button>
    </Container>
  );
}
