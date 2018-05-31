import React, { Component } from "react";
import {
  Route,
  NavLink,
  Switch,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Blog from "./Blog";
import Resume from "./Resume";
import PageShell from './components/PageShell'
 
class Main extends Component {
  render() {
    return (
    <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">HOME</NavLink></li>
            <li><NavLink exact to="/resume">RESUME</NavLink></li>
            <li><NavLink to="/Projects">PROJECTS</NavLink></li>
            <li><NavLink to="/Blog">BLOG</NavLink></li>
          </ul>
          <div className="content">
              <Route exact path="/" component={PageShell(Home)}/>
              <Route exact path="/resume" component={PageShell(Resume)}/>
              <Route path="/Projects" component={PageShell(Projects)}/>
              <Route path="/Blog" component={PageShell(Blog)}/>
          </div>
        </div>
    </HashRouter>
    );
  }
}
 
export default Main;