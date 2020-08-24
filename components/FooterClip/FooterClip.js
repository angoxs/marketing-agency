import { Container, Clip } from "./style";
import Link from "next/link";

export default function FooterClip() {
  return (
    <Container>
      <Clip>
        {/* <a href="https://twitter.com/angelVZUR">
          Copyright © 2020 Ángel Vāzquez, Inc. All rights reserved.
        </a> */}
        <a href="https://twitter.com/angelVZUR">© 2020 Ángel Vāzquez</a>
        <a href="mailto:angelCL@outlook.com">angelCL0@outlook.com</a>
      </Clip>
    </Container>
  );
}
