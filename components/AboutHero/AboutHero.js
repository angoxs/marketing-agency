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
  ServiceGrid,
} from "./style";
import Fade from "react-reveal/Fade";

export default function AboutHero() {
  return (
    <Container>
      <Main>
        <TitleGroup>
          <TitleContainer>
            <Fade up>
              <Title>Customers are always first</Title>
              <Subtitle>
                Mastery is not a function of genius or talent, it is a function
                of time and intense focus applied to a particular field of
                knowledge.
              </Subtitle>
            </Fade>
          </TitleContainer>

          <Quote>
            <Div />
            <Fade up>
              <Span>PRIORITY</Span>
            </Fade>
          </Quote>
        </TitleGroup>
      </Main>
    </Container>
  );
}
