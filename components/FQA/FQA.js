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
              <Title>Frequently Questions Asked</Title>
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
              <Span>CUSTOMER PRIORITY</Span>
            </Fade>
          </Quote>
        </TitleGroup>

        <ServiceGrid>
          <Fade up>
            <QA
              title="What benefits do I get?"
              subtitle="In the future, the great division will be between those who have trained themselves to handle these complexities and those who are overwhelmed by them—those who can acquire skills and discipline their minds and those who are irrevocably distracted by all the media around them and can never focus enough to learn."
            />
          </Fade>
          <Fade up>
            <QA
              title="Is there a refund policy?"
              subtitle="it is always best to choose a task that is slightly above you, one that might be considered ambitious on your part. The higher the goal, the more energy you will call up from deep within. You will rise to the challenge because you have to, and will discover creative powers in yourself that you never suspected."
            />
          </Fade>
          <Fade up>
            <QA
              title="How long does it take to make an entire website?"
              subtitle="Real pleasure comes from overcoming challenges, feeling confidence in your abilities, gaining fluency in skills, and experiencing the power this brings. You develop patience. Boredom no longer signals the need for distraction, but rather the need for new challenges to conquer."
            />
          </Fade>
          <Fade up>
            <QA
              title="Can I add more features later on?"
              subtitle="What separates Masters from others is often something surprisingly simple. Whenever we learn a skill, we frequently reach a point of frustration—what we are learning seems beyond our capabilities. Giving in to these feelings, we unconsciously quit on ourselves before we actually give up."
            />
          </Fade>
          <Fade up>
            <QA
              title="What does premium contain?"
              subtitle="Leonardo was eager to learn all of these skills, but soon he discovered in himself something else: he could not simply do an assignment; he needed to make it something of his own, to invent rather than imitate the Master."
            />
          </Fade>

          <Fade up>
            <QA
              title="Can I get an example?"
              subtitle="This means that you move toward challenges that will toughen and improve you, where you will get the most objective feedback on your performance and progress. You do not choose apprenticeships that seem easy and comfortable."
            />
          </Fade>
        </ServiceGrid>
      </Main>
    </Container>
  );
}
