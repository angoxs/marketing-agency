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
// import Service from "./Service";

export default function PriceHero() {
  return (
    <Container>
      <Main>
        <TitleGroup>
          <TitleContainer>
            <Fade up>
              <Title>Pricing</Title>
              <Subtitle>
                Voxxer includes an amazing pricing table element that is packed
                full with customization options.
              </Subtitle>
            </Fade>
          </TitleContainer>

          <Quote>
            <Div />
            <Fade up>
              <Span>QUALITY OVER ANYTHING</Span>
            </Fade>
          </Quote>
        </TitleGroup>

        {/* <ServiceGrid>
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
              subtitle="Lorem ipsum dolor sit amet, coectetur adipiscing elit."
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
        </ServiceGrid> */}
      </Main>
    </Container>
  );
}
