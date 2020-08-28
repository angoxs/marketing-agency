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
  padding: 15px 35px;
  border: none;
  cursor: pointer;
  background: ${({ theme }) => theme.accent};

  color: white;
  border-radius: 4px;
  font-weight: bold;
`;

export default function NavLinks() {
  return (
    <>
      <NavItem href="/">
        <a>Home</a>
      </NavItem>
      <NavItem href="/pricing">
        <a>Pricing</a>
      </NavItem>
      <NavItem href="/features">
        <a>Features</a>
      </NavItem>
      <NavItem href="/aboutus">
        <a>About Us</a>
      </NavItem>
      <a href="/contact">
        <Button>Contact</Button>
      </a>
    </>
  );
}
