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

export default function AboutInfo() {
  return (
    <Container>
      <SideColor />

      <Main>
        <div />
        <TitleContainer>
          <Welcome>
            <Fade up>
              <Div />
              <Span>EXCEL</Span>
            </Fade>
          </Welcome>

          <Fade>
            <Title>Excel at what we do</Title>
          </Fade>
          <Subtitle>
          Mistakes and failures are precisely your means of education. They tell you about your own inadequacies. It is hard to find out such things from people, as they are often political with their praise and criticisms. Your failures also permit you to see the flaws of your ideas, which are only revealed in the execution of them.
          </Subtitle>

          <ButtonGroup>
            <Button>Hire Us</Button>
          </ButtonGroup>
        </TitleContainer>
      </Main>
    </Container>
  );
}
