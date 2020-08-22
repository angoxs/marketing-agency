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

export default function NextLevel() {
  return (
    <Container>
      <SideColor />

      <Main>
        <div />
        <TitleContainer>
          <Welcome>
            <Fade up>
              <Div />
              <Span>POWERFUL FEATURES</Span>
            </Fade>
          </Welcome>

          <Fade>
            <Title>Take your company to the next level</Title>
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
      </Main>
    </Container>
  );
}
