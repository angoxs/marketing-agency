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
import Client from "./Client";

export default function Clients() {
  return (
    <Container>
      <Main>
        <TitleGroup>
          <TitleContainer>
            <Fade up>
              <Title>Amazing Clients</Title>
              <Subtitle>
                As the great physicist Max Planck put it, scientists “must have
                a vivid intuitive imagination, for new ideas are not generated
                by deduction, but by an artistically creative imagination.
              </Subtitle>
            </Fade>
          </TitleContainer>

          <Quote>
            <Div />
            <Fade up>
              <Span>OUR FEATURED CLIENTS</Span>
            </Fade>
          </Quote>
        </TitleGroup>

        <ServiceGrid>
          <Fade up>
            <Client image="/Logos/digg 1.svg" />
          </Fade>
          <Fade up>
            <Client image="/Logos/kik 1.svg" />
          </Fade>
          <Fade up>
            <Client image="/Logos/symbols 1.svg" />
          </Fade>
          <Fade up>
            <Client image="/Logos/youku-logo 1.svg" />
          </Fade>
          <Fade up>
            <Client image="/Logos/digg 1.svg" />
          </Fade>
        </ServiceGrid>
      </Main>
    </Container>
  );
}
