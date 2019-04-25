import React, { Component } from "react";
import NavBar from "./components/Navbar";
import MemoryCard from "./components/Cards";
import avengerCharacters from "./avengers.json";

class App extends Component {

  state = {
    // Setting this.state.avengersList to the avengers json array
    avengersList,
    score : 0,
    topScore: 0
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <MemoryCard
            // key={avengerCharacters.id}
          />
        </div>
      </div>
    );
  }
}

export default App;
