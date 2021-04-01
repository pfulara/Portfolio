import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

  const [emailStatus, setEmailStatus] = useState(false);

  useEffect(() => {
    document.title = "Paweł Fulara's Portfolio - Home Page";
  }, []);
  return (
    <div>
      <h1>Hello there!</h1>
      <p>You're here propably because You're looking for Fullstack developer.</p>
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
      <h2>You can hit me by e-mail</h2>
      {emailStatus ? (
        <a href="mailto:fulara.pawel@gmail.com">fulara.pawel@gmail.com</a>
      ) : (
        <p
          style={{ cursor: "pointer", margin: "0" }}
          onClick={() => {
            setEmailStatus(true);
          }}
        >
          Click here to see e-mail address
        </p>
      )}
    </div>
  );
};

export default Home;
