import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import Image from "@frontity/components/image"
import MobileMenu from "./menu";
import Logo from "../statics/img/logo-revontuli-2020-agence-digital-blog.svg"

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
            <Image src={Logo} alt="agence marketing digital Revontuli" />
        </StyledLink>
        <MobileMenu />
      </Container>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  img {
    width: 40%;
  }
`;
