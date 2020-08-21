import { Container, Main, Title, WorksGrid } from "./style";
import Work from "./Work";
import Fade from "react-reveal/Fade";

export default function Works() {
  return (
    <Container>
      <Main>
        <Title>Amazing Works</Title>
        <WorksGrid>
          <Fade up>
            <Work image="https://images.unsplash.com/photo-1453133451515-5ff7c1d0d63c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80" />
          </Fade>
          <Fade left>
            <Work image="https://images.unsplash.com/photo-1519211975560-4ca611f5a72a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
          </Fade>
          <Fade left>
            <Work image="https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80s" />
          </Fade>
          <Fade up>
            <Work image="https://images.unsplash.com/photo-1519127008657-d552258f18d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" />
          </Fade>
        </WorksGrid>
      </Main>
    </Container>
  );
}
