import React, { useState } from "react";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import {
  Nav,
  Container,
  Hamburger,
  Menu,
  MenuLink,
  LinkWrapper,
  Button,
} from "./NavbarElements";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Container>
        <LogoIcon />
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <LinkWrapper>
            <MenuLink href="">Search</MenuLink>
            <MenuLink href="">Login</MenuLink>
            <Button>Join Now</Button>
          </LinkWrapper>
        </Menu>
      </Container>
    </Nav>
  );
}
