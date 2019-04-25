import React, { Component } from "react";
import NavBar from "./components/Navbar";
import MemoryCard from "./components/Cards";
import avengersList from "./avengersList.json";

class App extends Component {

  state = {
    // Setting this.state.avengersList to the avengers json array
    avengersList,
    clickedAvengerIds: [], 
    score : 0,
    topScore: 0
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <NavBar 
        score = {this.state.score}
        topScore = {this.state.topScore}/>

        <div className="col-8 m-5 justify-content-center">
        <h3>Try not to click the same image twice!</h3>
        {/* Loop through all the items in the static list  */}
        {this.state.avengersList.map(avenger => (
          <MemoryCard
            id={avenger.id}
            key={avenger.id}
            name={avenger.name}
            image={avenger.image}
            onClick={handleScoreCount}
          />
          ))}
        </div>
        <footer>
          <p> You can find the
          code<a href="https://github.com/NVK2016/React-Clicky-Game" target="_blank"> here</a>.
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
