import React, { Component } from "react";
import NavBar from "./components/Navbar";
import MemoryCard from "./components/Cards";
import avengersList from "./avengersList.json";

class App extends Component {



  state = {
    // Setting this.state.avengersList to the avengers json array
    avengersList,
    clickedAvengerIds: [],
    score: 0,
    topScore: 0
  }

  //Main logic for the GAME score & reshuffling pictures 
  handleClickPicture = id => {
    // Arrange the pictures in a random manner
    let shuffledArray = this.handleShuffleArray(avengersList);
    this.setState({ avengersList: shuffledArray });

  }
  //Function to shuffle opictures when clicked 
  handleShuffleArray = avengersList => {
    for (let i = avengersList.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [avengersList[i], avengersList[j]] = [avengersList[j], avengersList[i]]; // swap elements
    }
    return avengersList;
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <NavBar
          score={this.state.score}
          topScore={this.state.topScore} />

        <div className="col-8 m-5 justify-content-center">
          <h3>Try not to click the same image twice!</h3>
          {/* Loop through all the items in the static list  */}
          {this.state.avengersList.map(avenger => (
            <MemoryCard
              id={avenger.id}
              key={avenger.id}
              name={avenger.name}
              image={avenger.image}
              // onclick call the handle event to calculate score & shuffle array 
              clickPicture={this.handleClickPicture}
            />
          ))}
        </div>
        <footer>
          <center>
            <a href="https://github.com/NVK2016/React-Clicky-Game" target="_blank" >Click here for the code </a>
          </center>
        </footer>
      </div>
    );
  }
}

export default App;
