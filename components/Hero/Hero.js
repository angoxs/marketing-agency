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
import UncontrolledLottie from "./Lottie";
import { useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [count, setCount] = useState(0);

  function play() {
    var audio = document.getElementById("a1");
    audio.play();
  }

  return (
    <Container>
      <SideColor />

      <Main>
        <TitleContainer>
          <Welcome>
            <Fade up>
              <UncontrolledLottie />
              <Span>PROGRESS</Span>
            </Fade>
          </Welcome>

          <Fade>
            <Title>Building the future, together.</Title>
          </Fade>
          <Subtitle>
            We partner with visionary leaders that are inventing a better,
            fairer future.
          </Subtitle>

          <ButtonGroup>
            <Link href="/contact">
              <a>
                <Button>Get Demo</Button>
              </a>
            </Link>
            <audio id="a1" src="/Sounds/pop.mp3"></audio>
            <Link href="/features">
              <a>
                <Button
                  id="secondButton"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  View More
                </Button>
              </a>
            </Link>
          </ButtonGroup>
        </TitleContainer>
        <div />
      </Main>
    </Container>
  );
}
