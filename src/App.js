import React, { Component } from 'react';
import './App.css';
import SideNav from './components/SideNav';
import WinePage from './components/WinePage';
import SingleWine from './components/SingleWine';

class App extends Component {
  constructor() {
    super();
    this.state = {
      wines: [],
      isWineClicked: false,
      clickedWine: ''
    }
    this.getWineData = this.getWineData.bind(this);
    this.handleWineClick = this.handleWineClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  componentWillMount() {
    this.getWineData();
  }

  handleWineClick(wineData) {
    this.setState({ 
      isWineClicked: true,
      clickedWine: wineData
    });
  }
  
  handleBackClick() {
    this.setState({ isWineClicked: false });
  }

  getWineData() {
    fetch(`https://myapi-profstream.herokuapp.com/api/c8542c/wines`)
    .then(res => res.json())
    .then(res => {
      this.setState({ wines: res });
    });
  }

  render() {
    const { clickedWine } = this.state;
    return (
      <div>
        <div className="header-wrapper">
          <h1 className="header">Wine Time</h1>
          {clickedWine ? <h1 className="header-clicked-wine">: {clickedWine.name}, {clickedWine.year}</h1>: null}
        </div>
        <div className="container">
            <SideNav  wines={this.state.wines}
                      handleWineClick={this.handleWineClick} />
            {this.state.isWineClicked ? <SingleWine clickedWine={clickedWine} 
                                                    handleBackClick={this.handleBackClick} /> : 
            <WinePage wines={this.state.wines}
                      handleWineClick={this.handleWineClick} />}
        </div>
      </div>
    );
  }
}

export default App;
