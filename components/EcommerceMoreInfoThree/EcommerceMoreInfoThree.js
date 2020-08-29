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

export default function EcommerceMoreInfoThree() {
  return (
    <Fade up>
      <Container>
        <Main>
          <TitleContainer>
            <Welcome>
              <Fade up>
                <Div />
                <Span>INTEGRITY</Span>
              </Fade>
            </Welcome>

            <Fade>
              <Title>
                Save time and money in hours of development, let us handle your
                online business needs.
              </Title>
            </Fade>
            <Subtitle>and no hidden price markups (ever)</Subtitle>
            <ButtonGroup>
              {" "}
              <Link href="/contact">
                <a>
                  <Button>Start a Project</Button>
                </a>
              </Link>
            </ButtonGroup>
          </TitleContainer>
          <div />
        </Main>
      </Container>
    </Fade>
  );
}
