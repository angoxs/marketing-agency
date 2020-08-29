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

export default function DevelopHero() {
  return (
    <Container>
      <Main>
        <TitleGroup>
          <TitleContainer>
            <Fade up>
              <Title>Developing solid and proeficient websites</Title>
              <Subtitle>
                We create the assets your company needs to build a best-in-breed
                brand.
              </Subtitle>
            </Fade>
          </TitleContainer>

          <Quote>
            <Div />
            <Fade up>
              <Span>DEVELOPMENT</Span>
            </Fade>
          </Quote>
        </TitleGroup>
      </Main>
    </Container>
  );
}
