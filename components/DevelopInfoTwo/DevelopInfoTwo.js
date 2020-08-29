import {
  Container,
  Main,
  Title,
  Subtitle,
  Button,
  TitleContainer,
  Welcome,
  Div,
  Span,
  ButtonGroup,
} from "./style";
import Fade from "react-reveal/Fade";
import Link from "next/link";

export default function DevelopInfoTwo() {
  return (
    <Fade up>
      <Container>
        <Main>
          <div />
          <TitleContainer>
            <Welcome>
              <Fade up>
                <Div />
                <Span>WHAT MAKES US DIFFERENT</Span>
              </Fade>
            </Welcome>

            <Fade>
              <Title>
                We’re the experts in development and React with a focus on
                design first. 
              </Title>
            </Fade>
            <Subtitle>
            Creating industry leading brands, best in class
                websites, and online products that help grow your business. It’s
                what makes us different.
            </Subtitle>
          </TitleContainer>
        </Main>
      </Container>
    </Fade>
  );
}
