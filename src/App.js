import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.css";

//Import Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <div id="main">
        <Header />
        <Switch>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
