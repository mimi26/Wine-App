import React, { Component } from 'react';
import './App.css';
import SideNav from './components/SideNav';
import WinePage from './components/WinePage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      wines: []
    }
    this.getWineData = this.getWineData.bind(this);
  }

  componentWillMount() {
    this.getWineData();
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
        <WinePage wines={this.state.wines} />
      </div>
    );
  }
}

export default App;
