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

export default function EcommerceMoreInfoThree() {
  return (
    <Fade up>
      <Container>
        <SideColor />

        <Main>
          <TitleContainer>
            <Welcome>
              <Fade up>
                <Div />
                <Span>INTEGRITY</Span>
              </Fade>
            </Welcome>

            <Fade>
              <Title>
                Save time and money in hours of development, let us handle your
                online business needs.
              </Title>
            </Fade>
            <Subtitle>and no hidden price markups (ever)</Subtitle>
            <ButtonGroup>
              {" "}
              <Link href="/contact">
                <a>
                  <Button>Start a Project</Button>
                </a>
              </Link>
            </ButtonGroup>

            {/* <Subtitle>
              Now instead of a relentless question, we have a clear mission: To
              make small business ownership available to anyone who wants it.
              We’re proud to build the tools that empower anyone to start, run,
              and grow their own local, service-based business. Thousands of
              small businesses across 50 states already use voxxer to serve
              their communities, providing a higher caliber of service to
              clients and keeping local dollars in local economies. And every
              single one of those small business owners has greater control,
              autonomy, and flexibility over the way they work today.
            </Subtitle> */}
          </TitleContainer>
          <div />
        </Main>
      </Container>
    </Fade>
  );
}
