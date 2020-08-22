import {
  Container,
  Main,
  Title,
  Subtitle,
  Button,
  TitleContainer,
  FeaturedImage,
  SideColor,
  Welcome,
  Div,
  Span,
  ButtonGroup,
} from "./style";
import Fade from "react-reveal/Fade";

export default function Info() {
  return (
    <Container>
      <SideColor />

      <Main>
        <TitleContainer>
          <Welcome>
            <Fade up>
              <Div />
              <Span>INFO</Span>
            </Fade>
          </Welcome>

          <Fade>
            <Title>Get ready to conquer the world again</Title>
          </Fade>
          <Subtitle>
            Every story we tell, every brand we build, and every interaction we
            create must not only look beautiful but has to feel and function
            beautifully, too. Crafted to perfection.
          </Subtitle>
          <ButtonGroup>
            <Button>Contact</Button>
          </ButtonGroup>
        </TitleContainer>
        <div />
      </Main>
    </Container>
  );
}