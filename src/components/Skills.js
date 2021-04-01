import React, { useEffect } from "react";
import { FaPhp, FaJsSquare, FaCss3Alt, FaHtml5, FaReact, FaNodeJs } from 'react-icons/fa';
import { DiMysql, DiMongodb } from "react-icons/di";


const Skills = () => {

  useEffect(() => {
    document.title = "Paweł Fulara's Portfolio - Skills";
  }, []);
  return (
    <div id="subpage">
      <h1>My Skills</h1>
      <h2>Experience</h2>
      <div className="skillItem">
        <FaPhp /><p>PHP7 - 2 years (+ 4 years non-commercial)</p>
      </div>
      <div className="skillItem">
        <FaJsSquare /><p>JavaScript ES6 - 2 years</p>
      </div>
      <div className="skillItem">
        <FaHtml5 /><p>HTML5 - 2 years (+ 4 years non-commercial)</p>
      </div>
      <div className="skillItem">
        <FaCss3Alt /><p>CSS3 - 2 years (+ 4 years non-commercial)</p>
      </div>
      <div className="skillItem">
        <DiMysql /><p>MySql - 2 years (+ 4 years non-commercial)</p>
      </div>

      <h2>Practices (non-commercial)</h2>
      <div className="skillItem">
        <FaReact /><p>React.js - 2 years</p>
      </div>
      <div className="skillItem">
        <FaNodeJs /><p>Node.js - 1 year</p>
      </div>
      <div className="skillItem">
        <DiMongodb /><p>Mongodb - 1 years</p>
      </div>
    </div>
  );
};

export default Skills;
