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
import Starter from "./PricePack/Starter";
import Business from "./PricePack/Business";
import Premium from "./PricePack/Premium";

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

        <ServiceGrid>
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
        </ServiceGrid>
      </Main>
    </Container>
  );
}
