import React, { Component } from 'react';
import './App.css';
import SideNav from './components/SideNav';
import WinePage from './components/WinePage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      wines: [],
      isWineClicked: false
    }
    this.getWineData = this.getWineData.bind(this);
    this.handleWineClick = this.handleWineClick.bind(this);
  }

  componentWillMount() {
    this.getWineData();
  }

  handleWineClick() {
    this.setState({ 
      isWineClicked: true
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
      <div className="container">
        <SideNav wines={this.state.wines} />
        <WinePage wines={this.state.wines}
                  handleWineClick={this.handleWineClick} />
      </div>
    );
  }
}

export default App;
