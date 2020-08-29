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
import Link from "next/link";

export default function DesignInfo() {
  return (
    <Fade up>
      <Container>
        <Main>
          <TitleContainer>
            <Welcome>
              <Fade up>
                <Div />
                <Span>WHAT WE DO</Span>
              </Fade>
            </Welcome>

            <Fade>
              <Title>
                A valuable marketing tool, we approach your website project with
                a focus on creativity, usability, and conversions.
              </Title>
            </Fade>
            <Subtitle>
              The result is an online representation of your business that is
              beautiful, functional, and will generate more leads. Looking to
              exit your business? We have a proven track record in making
              websites attractive to an acquisition.
            </Subtitle>
          </TitleContainer>
          <div />
        </Main>
      </Container>
    </Fade>
  );
}
