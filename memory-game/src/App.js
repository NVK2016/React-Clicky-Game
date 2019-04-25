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
        {/* Loop through all the items in the static list  */}
        {this.state.avengersList.map(avenger => (
          <MemoryCard
            id={avenger.id}
            key={avenger.id}
            name={avenger.name}
            image={avenger.image}
          />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
