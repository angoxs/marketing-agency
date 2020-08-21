import Link from "next/link";
import styled from "styled-components";

const NavItem = styled(Link)`
  text-decoration: none;
  color: #f6f7f7;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldelrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  font-size: 14px;
  padding: 8px 18px;
  border: none;
  cursor: pointer;
  background: blue;
  color: white;
  border-radius: 4px;
  font-weight: bold;
`;

export default function NavLinks() {
  return (
    <>
      <NavItem href="/design">
        <a>Home</a>
      </NavItem>
      <NavItem href="/code">
        <a>Works</a>
      </NavItem>
      <NavItem href="/templates">
        <a>Clients</a>
      </NavItem>
      <NavItem href="/inspiration">
        <a>About</a>
      </NavItem>
      <a href="mailto:angelCL0@outlook.com">
        <Button>Contact</Button>
      </a>
    </>
  );
}
