import styled from "styled-components";

const Container = styled.div`
  padding: 40px;
  border: 1px solid #e7e7ff;
  border-radius: 10px;

  :hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const Span = styled.span`
  font-size: 16px;
  color: blue;
  font-weight: 600;
`;

const Title = styled.h3`
  font-size: 44px;
  margin: 0;
  margin-top: 20px;
  line-height: 125%;
  font-weight: bold;

  @media (max-width: 900px) {
    font-size: 32px;
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

const MO = styled.p`
  font-size: 12px;
  color: #57577d;
  font-weight: 600;
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

export default function Starter(props) {
  return (
    <Container>
      <Span>{props.plan}</Span>
      <Title>{props.title}</Title>
      <MO>{props.mo}</MO>

      <Subtitle>{props.subtitle}</Subtitle>
      <Button>Get Started</Button>
    </Container>
  );
}
