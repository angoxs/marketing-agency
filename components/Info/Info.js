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
      <Main>
        <TitleContainer>
          <Welcome>
            <Fade up>
              <Div />
              <Span>INFO</Span>
            </Fade>
          </Welcome>

          <Fade>
            <Title>
              We play to our strengths: Ideating, creating and shipping
              wonderful things on the internet.
            </Title>
          </Fade>
          <Subtitle>
            One of our main focus is to make sure we are delivering content that
            people and our customers love, That is our primary priorty.
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
