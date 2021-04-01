import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaGithub, FaCode } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";
import ReactTooltip from "react-tooltip";

import database from "./../database";
import Loader from './Loader';
import ProjectModal from './layout/ProjectModal';

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
    transform: "scale(1.03)"
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
  borderRadius: "10px",
  cursor: "pointer"
});

const Projects = () => {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [singleProject, setSingleProject] = useState(null);

  useEffect(() => {

    document.title = "Paweł Fulara's Portfolio - My Projects";
    database
      .firestore()
      .collection('projects')
      .get()
      .then( querySnapshot => {
        const id = querySnapshot.docs.map( doc => doc.id);
        const data = querySnapshot.docs.map( doc => doc.data());
        let merged = [];
        id.map((item, index) => {
          return merged.push({
            id: item,
            ...data[index]
          })
        });
        setProjects(merged);
        setLoading(false);
      });

  }, []);
  return (
    <>
      {loading ? (
      <Loader />
      ) : (
        <>
          <h1>My projects</h1>
          <ProjectConteiner>
            {projects.map((item, index) => {
              return (
                <ProjectBox key={index} onClick={() => {setModal(true); setSingleProject(item)}}>
                  <h3>{item.title}</h3>
                  <h4>Used stack:</h4>
                  <ul>
                    {item.stack.map((stackItem, stackIndex) => {
                      return <li key={stackIndex}>{stackItem}</li>;
                    })}
                  </ul>
                  <div>
                    <AStyled
                      data-tip="Check on Github"
                      target="_blank"
                      href={item.githubLink}
                    >
                      <FaGithub />
                    </AStyled>
                    {item.csbLink ? (
                      <AStyled
                        data-tip="Check on codesandbox.io"
                        target="_blank"
                        href={item.csbLink}
                      >
                        <FaCode />
                      </AStyled>
                    ) : null}
                    {item.ghpLink ? (
                      <AStyled
                        data-tip="Check on Github Pages"
                        target="_blank"
                        href={item.ghpLink}
                      >
                        <GoBrowser />
                      </AStyled>
                    ) : null}
                  </div>
                </ProjectBox>
              );
            })}
          </ProjectConteiner>
          <ReactTooltip place="bottom" effect="solid" />
          <ProjectModal project={singleProject} open={modal} setOpen={setModal} />
        </>
      )}
      
    </>
  );
};

export default Projects;
