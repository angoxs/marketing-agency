import styled from "styled-components";

const Container = styled.div`
  padding: 40px 20px;
  border: 1px solid #d8d8d8;
  border-radius: 8px;
  -webkit-transition: all 0.25s;
  -o-transition: all 0.25s;
  transition: all 0.25s;

  :hover {
    box-shadow: 0 20px 40px rgba(240, 240, 240, 1);
    background: #fefefe;
    border: 1px solid #fefefe;
    border-radius: 30px;
  }
`;
const IMG = styled.img`
  width: 44px;

  @media (max-width: 1024px) {
    width: 34px;
  }
`;
const Title = styled.h3`
  font-size: 22px;
  margin: 0;
  margin-top: 20px;
  line-height: 125%;
  font-weight: 600;

  @media (max-width: 900px) {
    font-size: 18px;
  }
`;
const Subtitle = styled.p`
  font-size: 16px;
  line-height: 1.4em;
  color: #57577d;

  @media (max-width: 900px) {
    font-size: 14px;
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

export default function Service(props) {
  return (
    <Container>
      <IMG src={props.image} />
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
      <Button>Learn more</Button>
    </Container>
  );
}
