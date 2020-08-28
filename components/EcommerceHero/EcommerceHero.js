// Start your own personal grocery shopping business.

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

export default function ContactHero() {
  return (
    <Container>
      <Main>
        <TitleGroup>
          <TitleContainer>
            <Fade up>
              <Title>Start your own personal online shopping business.</Title>
              <Subtitle>
                We build the tools that empower anyone to start, run, and grow
                their own local, service-based business.
              </Subtitle>
            </Fade>
          </TitleContainer>

          <Quote>
            <Div />
            <Fade up>
              <Span>ECOMMERCE</Span>
            </Fade>
          </Quote>
        </TitleGroup>
      </Main>
    </Container>
  );
}
