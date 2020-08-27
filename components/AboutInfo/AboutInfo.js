import {
  Container,
  Main,
  Title,
  Subtitle,
  Button,
  TitleContainer,
  FeaturedImage,
  SideColor,
  Welcome,
  Div,
  Span,
  ButtonGroup,
} from "./style";
import Fade from "react-reveal/Fade";

export default function AboutInfo() {
  return (
    <Container>
      <SideColor />

      <Main>
        <TitleContainer>
          <Welcome>
            <Fade up>
              <Div />
              <Span>APPROACH</Span>
            </Fade>
          </Welcome>

          <Fade>
            <Title>A bit of our approach</Title>
          </Fade>
          <Subtitle>
            When it comes to mastering a skill, time is the magic
            ingredient.Assuming your practice proceeds at a steady level, over
            days and weeks certain elements of the skill become hardwired.
            Slowly, the entire skill becomes internalized, part of your nervous
            system. The mind is no longer mired in the details, but can see the
            larger picture. It is a miraculous sensation and practice will lead
            you to that point, no matter the talent level you are born with. The
            only real impediment to this is yourself and your emotions—boredom,
            panic,frustration, insecurity. You cannot suppress such
            emotions—they are normal to the process and are experienced by
            everyone, including Masters. What you can do is have faith in the
            process.
          </Subtitle>
        </TitleContainer>
        <div />
      </Main>
    </Container>
  );
}
