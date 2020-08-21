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
import Fade from "react-reveal/Fade";

export default function Services() {
  return (
    <Container>
      <Main>
        <TitleGroup>
          <TitleContainer>
            <Fade up>
              <Title>A Brand-first Creative Agency</Title>
              <Subtitle>
                Every story we tell, every brand we build, and every interaction
                we create must not only look beautiful but has to feel and
                function beautifully, too. Crafted to perfection.
              </Subtitle>
            </Fade>
          </TitleContainer>

          <Quote>
            <Fade right>
              <Div />
              <Span>DIGITAL CREATIVE AGENCY</Span>
            </Fade>
          </Quote>
        </TitleGroup>
      </Main>
    </Container>
  );
}
