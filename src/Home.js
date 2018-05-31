import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import {
  NavLink
} from "react-router-dom";
 
class HomeComponent extends Component {
  render() {
    return (
	<div className="home">
	      <div>
	        <h2 className="home-title">HELLO WORLD!</h2>
	        <p className="home-intro">My name is <b>Raghav</b> and I am currently interested in:</p>
	      	<div class="home-grid-container">
			  <div class="home-grid-item1">
			  	<NavLink exact to="/Projects">Web/App Dev</NavLink>
			  </div>
			  <div class="home-grid-item2">
			  	<NavLink exact to="/Blog">Fitness</NavLink>
			  </div>
			  <div class="home-grid-item3">
			  	<NavLink exact to="/Blog">Sports & TV</NavLink>
			  </div>
			</div>
	      </div>
      </div>      
    );
  }
}

export default HomeComponent;