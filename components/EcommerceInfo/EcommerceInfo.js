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

export default function EcommerceInfo() {
  return (
    <Fade up>
      <Container>
        <SideColor />

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
                Everything you need to start, run, and grow your own personal
                shopping business. This is more than a gig, it’s your company.
              </Title>
            </Fade>
            <Subtitle>
              You set your own prices, keep 100% of your tips, and get earnings
              deposited after every order. You work for you, not for us - so you
              decide how to promote your business and service your clients.
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
          <div />
        </Main>
      </Container>
    </Fade>
  );
}
