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

export default function Services() {
  return (
    <Container>
      <Main>
        <TitleGroup>
          <TitleContainer>
            <Fade up>
              <Title>A Brand-first Creative Agency</Title>
              <Subtitle>
                Every story we tell, every brand we build, and every interaction
                we create must not only look beautiful but has to feel and
                function beautifully, too. Crafted to perfection.
              </Subtitle>
            </Fade>
          </TitleContainer>

          <Quote>
            <Div />
            <Fade up>
              <Span>DIGITAL CREATIVE AGENCY</Span>
            </Fade>
          </Quote>
        </TitleGroup>

        <ServiceGrid>
          <Fade up>
            <Service
              image="/Icons/monitor.svg"
              title="Design"
              subtitle="Lorem ipsum dolor sit amet, coectetur adipiscing elit."
            />
          </Fade>
          <Fade up>
            <Service
              image="/Icons/gear.svg"
              title="Application"
              subtitle="AnytLorem ipsum dolor sit amet, coectetur adipiscing elit.hing"
            />
          </Fade>
          <Fade up>
            <Service
              image="/Icons/supermarket.svg"
              title="Ecommerce"
              subtitle="Lorem ipsum dolor sit amet, coectetur adipiscing elit."
            />
          </Fade>
          <Fade up>
            <Service
              image="/Icons/speaker.svg"
              title="Smooth Interactions"
              subtitle="Lorem ipsum dolor sit amet, coectetur adipiscing elit."
            />
          </Fade>
        </ServiceGrid>
      </Main>
    </Container>
  );
}
