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
import QA from "./QA";

export default function FQA() {
  return (
    <Container>
      <Main>
        <TitleGroup>
          <TitleContainer>
            <Fade up>
              <Title>Power in Our People</Title>
              <Subtitle>
                Your project might be a website, an online app, brand or shop.
                Whatever your idea every project is tackled by our talented
                full-time team who are all under one roof. They’ll be on-hand at
                every step to make sure your project runs smoothly from start to
                finish.
              </Subtitle>
            </Fade>
          </TitleContainer>

          <Quote>
            <Div />
            <Fade up>
              <Span>CUSTOMER PRIORITY</Span>
            </Fade>
          </Quote>
        </TitleGroup>

        <ServiceGrid>
          <Fade up>
            <QA
              title="We Talk"
              subtitle="All great relationships start with a chat. Online or over coffee, there’s no better way of getting to know each other. We’ll listen, offer advice, and present solutions which will help achieve your goals."
            />
          </Fade>
          <Fade up>
            <QA
              title="We Think"
              subtitle="Strategise, plan, and execute. We create concepts that challenge your ideas and get you thinking differently. We work with you to refine them, leaving you grinning from ear-to-ear."
            />
          </Fade>
          <Fade up>
            <QA
              title="We Create"
              subtitle="From branding to websites, we craft our designs with flair, care, and attention to detail. We’ve listened, we’ve planned, now we make those ideas a reality."
            />
          </Fade>
          <Fade up>
            <QA
              title="We Deliver"
              subtitle="In pixels or on paper, our projects are delivered with the minimum of fuss using a finely tuned process. We keep you posted at every stage, giving you the confidence that we’ll deliver your projects on time, every time."
            />
          </Fade>
        </ServiceGrid>
      </Main>
    </Container>
  );
}
