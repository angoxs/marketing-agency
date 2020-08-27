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
import Link from "next/link";

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
            Even with skills that are primarily mental, such as computer
            programming or speaking a foreign language, it remains the case that
            we learn best through practice and repetition—the natural learning
            process
          </Subtitle>
          <ButtonGroup>
            <Link href="/contact">
              <a>
                <Button>Contact</Button>
              </a>
            </Link>
          </ButtonGroup>
        </TitleContainer>
        <div />
      </Main>
    </Container>
  );
}
