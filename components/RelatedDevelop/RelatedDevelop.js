import { Container, Main, ServiceGrid, Navigation } from "./style";
import Fade from "react-reveal/Fade";
import { useState } from "react";
import Develop from "./Develop";
import Link from "next/link";

export default function RelatedDevelop() {
  const [count, setCount] = useState(0);

  function play() {
    var audio = document.getElementById("a1");
    audio.play();
  }

  return (
    <Container>
      <ServiceGrid>
        <Link href="/design">
          <Navigation>
            <Fade up>
              <Develop
                image="https://images.unsplash.com/photo-1493307100940-ac5f30709573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                title="UI-X Design"
                subtitle="Design is at the heart of all that we do, drawing on our passion for creativity and award-winning expertise."
              />
            </Fade>
          </Navigation>
        </Link>
        <Link href="/ecommerce">
          <Navigation>
            <Fade up>
              <Develop
                image="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                title="E-commerce"
                subtitle="We help you with everything you need to start, run, and grow your own personal shopping business. This is more than a gig, it’s your company. "
              />
            </Fade>
          </Navigation>
        </Link>
        <Link href="/features">
          <Navigation>
            <Fade up>
              <Develop
                image="https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1650&q=80"
                title="Marketing"
                subtitle="We deliver solutions the only way we know how: obsess over detail and quality, collaborate with clients and ensure outstanding service."
              />
            </Fade>
          </Navigation>
        </Link>
      </ServiceGrid>
    </Container>
  );
}
