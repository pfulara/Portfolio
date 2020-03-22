import React, { useEffect } from "react";
import styled from "styled-components";
import { FaGithub, FaCode } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

const AStyled = styled("a")({
  "&:hover": {
    color: "#fff"
  },
  color: "#d7d9ff",
  fontSize: "2rem",
  margin: "0 10px"
});

const ProjectConteiner = styled("div")({
  display: "flex",
  width: "100%",
  maxWidth: "1200px",
  justifyContent: "center",
  flexWrap: "wrap"
});

const ProjectBox = styled("div")({
  ul: {
    li: {
      color: "#fff",
      marginBottom: "2px"
    },
    listStyle: "none",
    padding: "0",
    marginTop: ".3rem"
  },
  h3: {
    fontSize: "1.1rem",
    marginBottom: "1rem"
  },
  h4: {
    margin: "0",
    fontSize: "1rem"
  },
  "&:hover": {
    transform: "scale(1.15)",
    zIndex: "2"
  },
  color: "#d7d9ff",
  position: "relative",
  transition: ".2s all",
  margin: "10px",
  width: "280px",
  height: "240px",
  background: "#222",
  boxShadow: "0 0 30px #000",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: "10px"
});

const Projects = () => {
  useEffect(() => {
    document.title = "Paweł Fulara's Portfolio - My Projects";
  }, []);
  return (
    <>
      <h1>My projects</h1>
      <ProjectConteiner>
        <ProjectBox>
          <h3>Paweł Fulara's Portfolio</h3>
          <h4>Used stack:</h4>
          <ul>
            <li>React</li>
            <li>Styled components</li>
            <li>React Icons</li>
          </ul>
          <div>
            <AStyled
              data-tip="Check on Github"
              target="_blank"
              href="https://github.com/pfulara/Portfolio"
            >
              <FaGithub />
            </AStyled>
            <AStyled
              data-tip="Check on codesandbox.io"
              target="_blank"
              href="https://codesandbox.io/s/elated-bouman-ub8iy"
            >
              <FaCode />
            </AStyled>
          </div>
        </ProjectBox>
        <ProjectBox>
          <h3>Pokedex</h3>
          <h4>Used stack:</h4>
          <ul>
            <li>React</li>
            <li>Material UI</li>
            <li>
              <a
                href="https://pokeapi.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                Poke API
              </a>
            </li>
          </ul>
          <div>
            <AStyled
              data-tip="Check on Github"
              target="_blank"
              href="https://github.com/pfulara/Pokedex"
            >
              <FaGithub />
            </AStyled>
            <AStyled
              data-tip="Check on codesandbox.io"
              target="_blank"
              href="https://codesandbox.io/s/intelligent-architecture-2ztv5"
            >
              <FaCode />
            </AStyled>
          </div>
        </ProjectBox>
        <ProjectBox>
          <h3>Currency Price Checker</h3>
          <h4>Used stack:</h4>
          <ul>
            <li>React</li>
            <li>Recharts</li>
            <li>Material UI</li>
            <li>
              <a
                href="https://api.nbp.pl"
                target="_blank"
                rel="noopener noreferrer"
              >
                NBP Web API
              </a>
            </li>
          </ul>
          <div>
            <AStyled
              data-tip="Check on Github"
              target="_blank"
              href="https://github.com/pfulara/Currency-Price-Checker"
            >
              <FaGithub />
            </AStyled>
            <AStyled
              data-tip="Check on codesandbox.io"
              target="_blank"
              href="https://codesandbox.io/s/compassionate-lederberg-dgobb"
            >
              <FaCode />
            </AStyled>
          </div>
        </ProjectBox>
      </ProjectConteiner>
      <ReactTooltip place="bottom" effect="solid" />
    </>
  );
};

export default Projects;
