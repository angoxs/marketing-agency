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

export default function EcommerceMoreInfo() {
  return (
    <Fade up>
      <Container>
        <SideColor />

        <Main>
          <div />

          <TitleContainer>
            <Welcome>
              <Fade up>
                <Div />
                <Span>PLANNING IS EVERYTHING</Span>
              </Fade>
            </Welcome>

            <Fade>
              <Title>
                The personal, ethical, and local way to get groceries to your
                door. Commit to a shopper you know and trust.
              </Title>
            </Fade>
            <Subtitle>
              You choose your clients, set your schedule, and make decisions
              about where you shop. We'll keep your credit card loaded, provide
              ground support, and keep building you the best technology.
            </Subtitle>

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
        </Main>
      </Container>
    </Fade>
  );
}
