import {
  Container,
  Main,
  TitleGroup,
  TitleContainer,
  Title,
  Subtitle,
  Quote,
  Div,
  Span,
  ServiceGrid,
} from "./style";
import Fade from "react-reveal/Fade";
import Service from "./Service";
import Link from "next/link";

export default function Services() {
  return (
    <Container>
      <Main>
        <TitleGroup>
          <TitleContainer>
            <Fade up>
              <Title>
                We turn ideas into extraordinary digital products & experiences
              </Title>
              <Subtitle>
                We work side-by-side with our partners at every stage of growth
                to venture into new areas, reimagine existing offerings, and
                develop cultures that thrive.
              </Subtitle>
            </Fade>
          </TitleContainer>

          <Quote>
            <Div />
            <Fade up>
              <Span>PROGRESS</Span>
            </Fade>
          </Quote>
        </TitleGroup>

        <ServiceGrid>
          <Link href="/features">
            <a>
              <Fade up>
                <Service
                  image="/Icons/monitor.svg"
                  title="Design"
                  subtitle="Design is at the heart of all that we do, drawing on our passion for creativity and award-winning expertise."
                />
              </Fade>
            </a>
          </Link>
          <Link href="/features">
            <a>
              <Fade up>
                <Service
                  image="/Icons/gear.svg"
                  title="UX"
                  subtitle="Great user experiences are vital to building trust and core to our approach in pursuing intuitive function, simplicity and delight."
                />
              </Fade>
            </a>
          </Link>
          <Link href="/features">
            <a>
              <Fade up>
                <Service
                  image="/Icons/supermarket.svg"
                  title="Development"
                  subtitle="We architect, build, and deliver robust digital products entirely in-house, backed by our reputation for quality, stability and support."
                />
              </Fade>
            </a>
          </Link>
          <Link href="/features">
            <a>
              <Fade up>
                <Service
                  image="/Icons/speaker.svg"
                  title="Solutions"
                  subtitle="We deliver solutions the only way we know how: obsess over detail and quality, collaborate with clients and ensure outstanding service."
                />
              </Fade>
            </a>
          </Link>
        </ServiceGrid>
      </Main>
    </Container>
  );
}
