import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideNav from "./components/Nav/SideNavBar";
import Home from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import "./App.css"
import "./components/Nav/SideNavBar.css"

export default function App() {
  return (
    <Router>
      <div>
        <SideNav />

        <Switch>
          <Route path="/project/:id">
            <ProjectPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}