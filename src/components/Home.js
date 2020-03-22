import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Paweł Fulara's Portfolio - Home Page";
  }, []);
  return (
    <>
      <h1>Hello there!</h1>
      <p>You're here propably because You're looking for React developer.</p>
      <p>I'm Paweł and I am what You're looking for.</p>
      <p>
        Take a look at my{" "}
        <a
          href="https://github.com/pfulara"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{" "}
        or <Link to="/projects">Projects Page</Link>
      </p>
    </>
  );
};

export default Home;
