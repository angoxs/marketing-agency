import { Container, Main, ServiceGrid } from "./style";
import Fade from "react-reveal/Fade";
import { useState } from "react";
// import Demo from "./Demo/Demo";

export default function AboutDemo() {
  const [count, setCount] = useState(0);

  function play() {
    var audio = document.getElementById("a1");
    audio.play();
  }

  return (
    <Container>
      <Fade up>
        <Main />
      </Fade>
    </Container>
  );
}
