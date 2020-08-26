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
      {/* <ServiceGrid>
        <Fade up>
          <Demo
            image="https://images.unsplash.com/photo-1493307100940-ac5f30709573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            title="UI-X Design"
            subtitle="Feeling motivated and energized, we can overcome almost anything. Feeling bored and restless, our minds shut off and we become increasingly passive."
          />
        </Fade>

        <Fade up>
          <Demo
            image="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            title="Web & App Development"
            subtitle="You possess a kind of inner force that seeks to guide you toward your Life’s Task —what you are meant to accomplish in the time that you have to live."
          />
        </Fade>

        <Fade up>
          <Demo
            image="https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1650&q=80"
            title="Marketing"
            subtitle="Too many people believe that everything must be pleasurable in life, which makes them constantly search for distractions and short-circuits the learning process."
          />
        </Fade>

        <Fade up>
          <Demo
            image="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            title="Technical SEO"
            subtitle="It is better to dedicate two or three hours of intense focus to a skill than to spend eight hours of diffused concentration on it. You want to be as immediately present to what you are doing as possible."
          />
        </Fade>
      </ServiceGrid> */}
    </Container>
  );
}
