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

export default function FeaturesHero() {
  return (
    <Container>
      <Main>
        <TitleGroup>
          <TitleContainer>
            <Fade up>
              <Title>We strive for excellence</Title>
              <Subtitle>
                At Voxxer we believe that design makes a difference. We’ll build
                you a brand, a website or a shop; we’ll even help you with your
                print and promo. Clients come to us for our creativity, but they
                stay because we can explain the mysteries of their technical
                needs, without the jargon. We’ll make your lives easier, and in
                many ways, that’s where you’ll get a real return on your
                investment.
              </Subtitle>
            </Fade>
          </TitleContainer>

          <Quote>
            <Div />
            <Fade up>
              <Span>GREAT RESULTS</Span>
            </Fade>
          </Quote>
        </TitleGroup>

        {/* <ServiceGrid>
          <Fade up>
            <Starter
              plan="Starter"
              title="$15/mo"
              mo="MONTHLY"
              subtitle="The future belongs to those who learn more skills and combine them in creative ways."
            />
          </Fade>
          <Fade up>
            <Business
              plan="Business"
              title="$40/mo"
              mo="MONTHLY"
              subtitle="The future belongs to those who learn more skills and combine them in creative ways."
            />
          </Fade>
          <Fade up>
            <Premium
              plan="Premium"
              title="$70/mo"
              mo="MONTHLY"
              subtitle="The future belongs to those who learn more skills and combine them in creative ways."
            />
          </Fade>
        </ServiceGrid> */}
      </Main>
    </Container>
  );
}
