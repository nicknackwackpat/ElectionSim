import React, { Component } from "react";
import "./map.css";
import USAMap from "react-usa-map";
// import Candidate from "candidate.js";
// import d3 from 'd3';
import data from "./data/us-states.js";

class Map extends Component {

  mapHandler = (event) => {
    console.log(data);
    alert(event.target.dataset.name);
  };

  // getStateNames = (event) => {
  //   const stateArray = [];

<<<<<<< HEAD
    for (let i = 0; i < stateArray.length; i++) {
      let stateName = event.target.dataset.name;
=======
  //   for (let i = 0; i < stateArray.length; i++) {
  //     let stateName = event.target.dataset.name;
>>>>>>> aab62a9edfbf9ffed04eac8fdbd46566f046f5e6

  //     stateName.push(stateArray);
  //   }
  //   console.log(stateArray);
  // };

  // getStateVotes = () => {
  //   this.getStateNames();

  //   let voteTotal = 100;
  //   let candidate1 = "Johnny Bravo";
  //   let candidate2 = "Kim Possible";


  // };

  statesCustomConfig = () => {
    return {
      NJ: {
        fill: "navy",
        clickHandler: (event) =>
          console.log("Custom handler for NJ", event.target.dataset),
      },
      NY: {
        fill: "#CC0000",
      },
      PA: {
        fill: "#CC0000",
      }
    };
  };

  render() {
    return (
      <div className="map">
        <USAMap
          title={"TossUp"}
          customize={this.statesCustomConfig()}
          onClick={this.mapHandler}
        />
      </div>
    );
  }
}

export default Map;
