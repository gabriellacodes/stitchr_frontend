import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/NavBar";
import Home from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SignUp from "./pages/SignUp/SignUp";
import "./App.css"

export default function App() {
  
  
  return (
    <Router>
      <Nav />
      <Route path="/">
        <Header />
      </Route>
      <div>
        <Switch>
          <Route path="/project/:id">
            <ProjectPage />
          </Route>
          <Route path="/LoginPage">
            <LoginPage />
          </Route>
          <Route path="/ContactPage">
            <ContactPage />
          </Route>
          <Route path="/AboutPage">
            <AboutPage />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}