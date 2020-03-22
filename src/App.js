import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.css";

//Import Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <div id="main">
        <Header />
        <Switch>
          <Route path="/contact">
            <Contact />
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
