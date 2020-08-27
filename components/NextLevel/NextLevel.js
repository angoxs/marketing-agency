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
            <Title>
              We design, build and ship world-class digital products for
              forward-thinking brands.
            </Title>
          </Fade>
          <Subtitle>
            We focus on understanding your brand, audience and business
            objectives to inform a digital strategy that is geared toward
            success.
          </Subtitle>
          <ButtonGroup>
            <Link href="/features">
              <a>
                <Button>Learn more</Button>
              </a>
            </Link>
          </ButtonGroup>
        </TitleContainer>
      </Main>
    </Container>
  );
}
