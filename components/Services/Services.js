import {
  Container,
  Main,
  TitleGroup,
  TitleContainer,
  Title,
  Subtitle,
  Quote,
  Div,
  Span,
} from "./style";

export default function Services() {
  return (
    <Container>
      <Main>
        <TitleGroup>
          <TitleContainer>
            <Title>A Brand-first Creative Agency</Title>
            <Subtitle>
              Every story we tell, every brand we build, and every interaction
              we create must not only look beautiful but has to feel and
              function beautifully, too. Crafted to perfection.
            </Subtitle>
          </TitleContainer>
          <Quote>
            <Div />
            <Span>DIGITAL CREATIVE AGENCY</Span>
          </Quote>
        </TitleGroup>
      </Main>
    </Container>
  );
}
