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

export default function DesignInfoThree() {
  return (
    <Fade up>
      <Container>
        <Main>
          <TitleContainer>
            <Welcome>
              <Fade up>
                <Div />
                <Span>FULLY RESPONSIVE</Span>
              </Fade>
            </Welcome>

            <Fade>
              <Title>
                Our sites not only look great, they also work perfectly across
                all of your devices.
              </Title>
            </Fade>
            <Subtitle>
              From mobiles and tablets to laptops and desktops, our websites are
              designed in detail with a focus on making your users experience an
              enjoyable one. We present you with designs for every device
              leaving no stone unturned. Our code rocks too, with a focus on
              speed and optimisation so your users will love you as much as
              Google does.
            </Subtitle>
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
