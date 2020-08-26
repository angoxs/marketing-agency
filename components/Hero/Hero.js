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
              <Span>VOXXER</Span>
            </Fade>
          </Welcome>

          <Fade>
            <Title>We make digital beautiful</Title>
          </Fade>
          <Subtitle>
            If the happiness and prosperity of other people depend on you, you
            have nothing to fear anymore.
          </Subtitle>
          <Button>Request A Demo</Button>

          <ButtonGroup>
            {/* <audio id="a1" src="/Sounds/pop.mp3"></audio>
            <Button
              id="secondButton"
              onClick={() => {
                play();
                setCount(count + 1);
              }}
            >
              Click me!
            </Button>
            <p>
              You've clicked <span>{count}</span> times
            </p> */}
          </ButtonGroup>
        </TitleContainer>
        <div />
      </Main>
    </Container>
  );
}
