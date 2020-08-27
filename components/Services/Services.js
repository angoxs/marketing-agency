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
              subtitle="Pay attention and learn the lessons contained in every experience."
            />
          </Fade>
          <Fade up>
            <Service
              image="/Icons/gear.svg"
              title="Application"
              subtitle="The time that leads to mastery is dependent on the intensity of our focus."
            />
          </Fade>
          <Fade up>
            <Service
              image="/Icons/supermarket.svg"
              title="Ecommerce"
              subtitle="The greatest test of courage on earth is to bear defeat without losing heart."
            />
          </Fade>
          <Fade up>
            <Service
              image="/Icons/speaker.svg"
              title="Smooth Interactions"
              subtitle="Everything that happens to you is a form of instruction if you pay attention."
            />
          </Fade>
        </ServiceGrid>
      </Main>
    </Container>
  );
}
