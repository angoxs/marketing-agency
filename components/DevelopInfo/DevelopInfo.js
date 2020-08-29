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

export default function DevelopInfo() {
  return (
    <Fade up>
      <Container>
        <Main>
          <TitleContainer>
            <Welcome>
              <Fade up>
                <Div />
                <Span>WE'RE THE EXPERTS</Span>
              </Fade>
            </Welcome>

            <Fade>
              <Title>
                Since 2018 we’ve been in love with Development and have never
                looked back.
              </Title>
            </Fade>
            <Subtitle>
              In fact, we’re so confident in its abilities we consider ourselves
              as one of the US’s leading React development teams.Since 2018
              we’ve been in love with Code and have never looked back. In fact,
              we’re so confident in its abilities we consider ourselves as one
              of the US’s leading development teams.
            </Subtitle>
          </TitleContainer>
          <div />
        </Main>
      </Container>
    </Fade>
  );
}
