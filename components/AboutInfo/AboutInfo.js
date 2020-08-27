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
            We're a team of makers, thinkers, explorers and theatre singers. We
            approach work and play with curiosity and experimentation, using
            what we learn to create meaningful digital products that connect
            with people, just like you.
          </Subtitle>
        </TitleContainer>
        <div />
      </Main>
    </Container>
  );
}
