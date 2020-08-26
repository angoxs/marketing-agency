import styled from "styled-components";

export const Container = styled.nav`
  height: 10vh;
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #e7e7ff;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  left: 0;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 30px;
  z-index: 2;
  align-items: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 10vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    padding: 20px;
  }

  span {
    font-size: 16px;
    font-weight: bold;
    color: blue;
  }
`;

export const NavBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;
  justify-content: flex-end;
  grid-gap: 20px;
  height: 100%;

  @media (max-width: 768px) {
    display: grid;
    grid-template-rows: repeat(7, auto);
    grid-template-columns: 0fr;
    text-align: center;
    grid-gap: 0;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${(props) => (props.open ? "-100%" : "0")};
  }
`;

export const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Hamburger = styled.div`
  background-color: #000;
  width: 30px;
  height: 3px;
  border-radius: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    border-radius: 2px;
    height: 3px;
    background-color: #000;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? "0" : "1")};
    transform: ${(props) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;
export const Logo = styled.div`
  a {
    color: black;
    font-weight: bold;
  }
`;

// Not active
const NewHamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? "0" : "1")};
    transform: ${(props) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;
