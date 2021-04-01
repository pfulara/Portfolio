import React from 'react';
import styled from "styled-components";

const Inner = styled('div')({
    backgroundColor: "#fff",
    maxWidth: '700px',
    width: "100%",
    padding: "30px",
    color: "#333",
});

const Modal = styled('div')({
    "@media screen and (max-width: 869px)" : {
        '&' : {
            alignItems: "flex-start"
        }
    },
    position: 'absolute',
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
});

const ProjectModal = ({ open, setOpen, project }) => {

    return (
        <>
        {open && (
            <Modal onClick={() => setOpen(false)}>
                <Inner onClick={() => setOpen(true)}>
                    { project.id }
                </Inner>
            </Modal>
        )}
        </>
    )
};

export default ProjectModal;