import React from "react";
import styled from "styled-components";

const HeaderStyled = styled("header")({
  "a, a:hover, a:visited, a:focus": {
    color: "#fff",
    textDecoration: "none"
  },
  position: "absolute",
  top: "0px",
  left: "0px",
  padding: "15px"
});

const Header = () => {
  return <HeaderStyled>Paweł Fulara's Portfolio</HeaderStyled>;
};

export default Header;
