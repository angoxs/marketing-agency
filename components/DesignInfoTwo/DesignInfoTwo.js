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

export default function DesignInfoTwo() {
  return (
    <Fade up>
      <Container>
        <Main>
          <div />

          <TitleContainer>
            <Welcome>
              <Fade up>
                <Div />
                <Span>STRATEGY</Span>
              </Fade>
            </Welcome>

            <Fade>
              <Title>
                We work with clients who are fun, appreciate great design and
                have an exciting story to tell. Over the last ten years, we’ve
                built a robust process that works.
              </Title>
            </Fade>
            <Subtitle>
              We set aside time at the start of every project to plan, research,
              and wireframe your new website to map out a clear user journey.
              This helps us to design and develop a site that works hard for
              your brand without frustrating your users.
            </Subtitle>
          </TitleContainer>
        </Main>
      </Container>
    </Fade>
  );
}
