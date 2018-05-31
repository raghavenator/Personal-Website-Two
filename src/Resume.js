import React, { Component } from "react";
 
class Resume extends Component {
  render() {
    return (
    	<div>
    		<p className="resume-intro">I am currently looking for full-time employment. Feel free to contact me with any opportunities.</p>
    		<p className="resume-title">RESUME</p>
    		<div class="home-grid-container">
			  <div class="home-grid-item1">
			  	<a href="https://drive.google.com/open?id=1J1xcS3tJTMx5-T9EBh-3klicwpW9m7a3" target="_blank">Developer</a>
			  </div>
			  <div class="home-grid-item2">
			  	<a href="https://drive.google.com/open?id=1BX9mI3tOwYXnu4DJB5z1R67iiVdFZJFR" target="_blank">Manufacturing</a>
			  </div>
			</div>
  		</div>
    );
  }
}
 
export default Resume;