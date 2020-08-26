import { Container, Main, ServiceGrid } from "./style";
import Fade from "react-reveal/Fade";
import { useState } from "react";
import Demo from "./Demo/Demo";

export default function FeaturesDemo() {
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
      <ServiceGrid>
        <Demo
          image="https://images.unsplash.com/photo-1493307100940-ac5f30709573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          title="UI-X Design"
          subtitle="Lorem ipsum dolor sit amet, coectetur adipiscing elit."
        />
        <Demo
          image="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          title="Web & App Development"
          subtitle="Lorem ipsum dolor sit amet, coectetur adipiscing elit."
        />
      </ServiceGrid>
    </Container>
  );
}
