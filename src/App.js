import React, { Component } from 'react';
import './App.css';
import SideNav from './components/SideNav';
import WinePage from './components/WinePage';

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

  getWineData() {
    fetch(`https://myapi-profstream.herokuapp.com/api/c8542c/wines`)
    .then(res => res.json())
    .then(res => {
      this.setState({ wines: res });
    });
  }

  render() {
    return (
      <div>
        <div className="header-wrapper">
          <h1 className="header">Wine Time</h1>
        </div>
        <div className="container">
            <SideNav  wines={this.state.wines}
                      handleWineClick={this.handleWineClick} />
            <WinePage wines={this.state.wines}
                      handleWineClick={this.handleWineClick} />
        </div>
      </div>
    );
  }
}

export default App;
