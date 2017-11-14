import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import SideNav from './components/SideNav';
import WinePage from './components/WinePage';
import SingleWine from './components/SingleWine';
import NewWineForm from './components/NewWineForm';
import EditWineForm from './components/EditWineForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      wines: [],
      clickedWine: '',
      wineToEdit: '',
      fireRedirect: false
    }

    this.getWineData = this.getWineData.bind(this);
    this.handleWineClick = this.handleWineClick.bind(this);
    this.handleNewWineSubmit = this.handleNewWineSubmit.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.deleteWine = this.deleteWine.bind(this);
    this.editWine = this.editWine.bind(this);
    this.redirectToWineList = this.redirectToWineList.bind(this);
    this.resetClickedWine = this.resetClickedWine.bind(this);
  }

  handleWineClick(wineData) {
    this.setState({ clickedWine: wineData });
  }

  getWineData() {
    fetch(`https://myapi-profstream.herokuapp.com/api/c8542c/wines`)
    .then(res => res.json())
    .then(res => {
      this.setState({ wines: res });
    });
  }

  //post request using fetch:
  handleNewWineSubmit(e) {
    e.preventDefault();
    fetch(`https://myapi-profstream.herokuapp.com/api/c8542c/wines`, {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify({ 
        name: e.target.name.value,
        year: e.target.year.value,
        grapes: e.target.grapes.value,
        country: e.target.country.value,
        region: e.target.region.value,
        description: e.target.description.value,
        picture: e.target.picture.value,
        price: e.target.price.value
      })
    })
    .then(res => {
      this.setState({ fireRedirect: true });
    })
    .catch(err => {
      console.log(err);
    });
  }

  deleteWine(id) {
    axios.delete(`https://myapi-profstream.herokuapp.com/api/c8542c/wines/${id}`)
    .then(res => {
      this.getWineData();
    })
    .catch(err =>{
      console.log(err);
    })
  }

  editWine(id) {
   this.setState({ 
      wineToEdit: id,
      clickedWine: ''
     });
  }
  //to redirect back to root route on form submit (new wine and edit)
  redirectToWineList() {
    this.setState({ fireRedirect: true });
  }
  //reset clickedWine back to null so that header is empty on redirect.
  resetClickedWine() {
    this.setState({ clickedWine: '' });
  }

  renderHeader() {
    const { clickedWine, fireRedirect } = this.state;
    if (clickedWine) {
      return <h1 className="header-clicked-wine">: {clickedWine.name}, {clickedWine.year}</h1>
    } else {
      return null;
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="header-wrapper">
            <h1 className="header">Wine Time</h1>
            {this.renderHeader()}
          </div>
          <div className="container">
              <SideNav  wines={this.state.wines}
                        handleWineClick={this.handleWineClick}
                        resetClickedWine={this.resetClickedWine} />
              <Route exact path="/" render={(props) => <WinePage  wines={this.state.wines}
                                                                  handleWineClick={this.handleWineClick}
                                                                  deleteWine={this.deleteWine} 
                                                                  getWineData={this.getWineData} />} />
              <Route path="/wine/:id" render={(props) => <SingleWine clickedWine={this.state.clickedWine}  
                                                                    editWine={this.editWine} />} />
              <Route path="/new" render={(props) => <NewWineForm  handleAddWineClick={this.handleAddWineClick}
                                                                  handleNewWineSubmit={this.handleNewWineSubmit} 
                                                                  newWineName={this.state.newWineName}/>} />
              <Route path="/edit" render={(props) => <EditWineForm  clickedWine={this.state.clickedWine}
                                                                    wineToEdit={this.state.wineToEdit}
                                                                    redirectToWineList={this.redirectToWineList}/>} />
          </div>
          {this.state.fireRedirect && <Redirect to="/"/>}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
