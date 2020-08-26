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
                When it comes to mastering a skill, time is the magic
                ingredient.
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
