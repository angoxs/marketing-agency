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
import Link from 'next/link'

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
            Since 2018 we’ve been working with amazing organisations to create
            meaningful impact and compelling experiences that deliver results.{" "}
          </Subtitle>

          <ButtonGroup>
            <Link href="/contact">
              <a>
                <Button>Hire Us</Button>
              </a>
            </Link>
          </ButtonGroup>
        </TitleContainer>
      </Main>
    </Container>
  );
}
