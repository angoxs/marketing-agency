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
              <Title>A brand focused agency</Title>
              <Subtitle>
                You must understand the following: In order to master a field,
                you must love the subject and feel a profound connection to it.
                Your interest must transcend the field itself and border on the
                religious.
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
        </ServiceGrid>
      </Main>
    </Container>
  );
}
