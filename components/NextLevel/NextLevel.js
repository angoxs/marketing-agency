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
            You are like a hunter: your knowledge of every detail of the forest
            and of the ecosystem as a whole will give you many more options for
            survival and success.
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
