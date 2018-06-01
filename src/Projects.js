import React, { Component } from "react";
 
class Projects extends Component {
  render() {
    return (
      <div>
        <p className="resume-intro">The following are some of the projects I have worked on:</p>
        <div class="grid-container">
          <div class="item1">
            <p class="project-title">TULIP</p>
            <table>
              <td class="description-image">
                <img src={'https://i.imgur.com/M99lgtf.png'} height="200"></img>        
                <img src={'https://i.imgur.com/SqW4vF6.png'} height="200"></img>
                <img src={'https://i.imgur.com/JvpzNvf.png'} height="200"></img>
              </td>
              <td class="description-text">
                <b>Tulip</b> is an internal positioning  system the can be set up in any area and used to see the live location of the user relative to their surroundings. Tulip comes equipped with a mobile app that shows the user their current location. This project was developed with a team of three other engineering students as my fourth-year design project. <a href="https://github.com/raghavenator/Tulip-App">See more</a>
              </td>
            </table>
          </div>
          <div class="item2">
            <p class="project-title">What Can I Eat</p>
            <table>
              <td class="description-image">
                <img src={'https://i.imgur.com/NImPqUg.png'} height="200"></img>        
                <img src={'https://i.imgur.com/EmnCASO.png'} height="200"></img>
              </td>
              <td class="description-text">
                <b>What Can I Eat</b> is a mobile app developed in ReactJS that allows a user to simply pick the amount of calories they want to consume. The app then returns a list of snacks that the user can eat which are within the specified number of calories. <a href="https://github.com/raghavenator/Tulip-App">See more</a> 
              </td>
            </table>
          </div>
          <div class="item3">
            <p class="project-title">MLB Score App</p>
            <table>
              <td class="description-image">
                <img src={'https://i.imgur.com/CHsT7Ju.png'} height="200"></img>        
                <img src={'https://i.imgur.com/KPij3It.png'} height="200"></img>
              </td>
              <td class="description-text">
                The <b>MLB Score App</b> displays the results of all MLB baseball games that occurred on a specified date. The app can also be used to see the upcoming fixtures on a future date. Tapping on 'Open Scoreboard' shows the scoreboard and various player stats for each game. <a href="https://github.com/raghavenator/MLB-Score-App">See more</a>
              </td>
            </table>
          </div>  
          <div class="item4">
            <p class="project-title">This website</p>
            <table>
              <td class="description-image">
                <img src={'https://i.imgur.com/0UNPr6x.png'} height="150"></img>
              </td>
              <td class="description-text">
                This personal website is developed with the intent of showcasing my current interests. It is developed in ReactJS.  <a href="https://github.com/raghavenator/Personal-Website">See more</a>
              </td>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Projects;