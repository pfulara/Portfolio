import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome, FaRegEnvelope, FaLaptopCode } from "react-icons/fa";

const FooterStyled = styled("footer")({
  position: "fixed",
  bottom: "-30px"
});
const CircleMenuInner = styled("div")({
  "&.active": {
    ".top": {
      transform: "rotate(45deg)",
      position: "absolute",
      top: "7px",
      backgroundColor: "#fff",
      width: "25px",
      height: "3px"
    },
    ".mid": {
      transform: "rotate(-45deg)",
      position: "absolute",
      top: "7px",
      backgroundColor: "#fff",
      width: "25px",
      height: "3px"
    },
    ".bottom": {
      opacity: "0"
    }
  },
  ".top": {
    transition: ".2s ease-out all",
    position: "absolute",
    top: "0",
    backgroundColor: "#fff",
    width: "25px",
    height: "3px"
  },
  ".mid": {
    transition: ".2s ease-out all",
    position: "absolute",
    top: "7px",
    backgroundColor: "#fff",
    width: "25px",
    height: "3px"
  },
  ".bottom": {
    transition: ".2s ease-out all",
    position: "absolute",
    top: "14px",
    backgroundColor: "#fff",
    width: "25px",
    height: "3px"
  },
  width: "60px",
  height: "60px",
  display: "flex",
  justifyContent: "center",
  position: "relative",
  cursor: "pointer",
  zIndex: "2"
});

const CircleMenu = styled("div")({
  transform: "scale(0)",
  position: "fixed",
  bottom: "-90px",
  width: "180px",
  height: "180px",
  borderRadius: "50%",
  border: "1px solid #ccc",
  transition: ".2s ease-out all",
  overflow: "hidden",
  background: "#212529"
});

const MainMenu = styled("ul")({
  listStyle: "none",
  margin: "0",
  padding: "0"
});

const MenuItem = styled("li")({
  "&:hover a": {
    color: "#45ff09"
  },
  a: {
    color: "#fff",
    fontSize: "1.5rem"
  },
  position: "absolute"
});

const NavStyled = styled("nav")({
  display: "flex",
  width: "100%",
  justifyContent: "center"
});

const Footer = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  useEffect(() => {
    let mainBody = document.querySelector("#main");
    mainBody.addEventListener("click", () => {
      setMenuStatus(false);
    });
  }, []);
  const hiddeMenu = () => {
    setMenuStatus(false);
  };
  return (
    <FooterStyled>
      <NavStyled>
        <CircleMenuInner
          className={menuStatus ? "active" : null}
          onClick={() => {
            setMenuStatus(!menuStatus);
          }}
        >
          <div className="top" />
          <div className="mid" />
          <div className="bottom" />
        </CircleMenuInner>
        <CircleMenu style={menuStatus ? { transform: "scale(1.5)" } : null}>
          <MainMenu>
            <MenuItem onClick={hiddeMenu} style={{ left: "15%", top: "25%" }}>
              <Link to="/projects">
                <FaLaptopCode />
              </Link>
            </MenuItem>
            <MenuItem onClick={hiddeMenu} style={{ left: "43%", top: "10%" }}>
              <Link to="/home">
                <FaHome />
              </Link>
            </MenuItem>
            <MenuItem onClick={hiddeMenu} style={{ left: "70%", top: "25%" }}>
              <Link to="/contact">
                <FaRegEnvelope />
              </Link>
            </MenuItem>
          </MainMenu>
        </CircleMenu>
      </NavStyled>
    </FooterStyled>
  );
};

export default Footer;
