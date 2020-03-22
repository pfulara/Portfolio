import React, { useEffect, useState } from "react";

const Contact = () => {
  const [emailStatus, setEmailStatus] = useState(false);
  useEffect(() => {
    document.title = "Paweł Fulara's Portfolio - Contact";
  }, []);
  return (
    <>
      <h1>Contact</h1>
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
    </>
  );
};

export default Contact;
