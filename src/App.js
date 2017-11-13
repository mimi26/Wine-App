import React, { Component } from 'react';
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
      isWineClicked: false,
      isAddWineClicked: false,
      clickedWine: '',
      isEditClicked: false,
      wineToEdit: '',
    }

    this.getWineData = this.getWineData.bind(this);
    this.handleWineClick = this.handleWineClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleNewWineSubmit = this.handleNewWineSubmit.bind(this);
    this.handleAddWineClick = this.handleAddWineClick.bind(this);
    this.whichComponentToRender = this.whichComponentToRender.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.deleteWine = this.deleteWine.bind(this);
    this.editWine = this.editWine.bind(this);
    this.renderWineList = this.renderWineList.bind(this);
  }

  handleWineClick(wineData) {
    this.setState({ 
      isWineClicked: true,
      clickedWine: wineData
    });
  }
  
  handleBackClick() {
    this.setState({ 
      isWineClicked: false,
      isAddWineClicked: false,
      isEditClicked: false
    });
  }

  getWineData() {
    fetch(`https://myapi-profstream.herokuapp.com/api/c8542c/wines`)
    .then(res => res.json())
    .then(res => {
      this.setState({ wines: res });
    });
  }
  //post request using axios:
  // handleNewWineSubmit(e) {
  //   e.preventDefault();
  //   axios.post(`https://myapi-profstream.herokuapp.com/api/c8542c/wines`, {
  //       name: e.target.name.value,
  //       year: e.target.year.value,
  //       grapes: e.target.grapes.value,
  //       country: e.target.country.value,
  //       region: e.target.region.value,
  //       description: e.target.description.value,
  //       picture: e.target.picture.value,
  //       price: e.target.price.value
  //   })
  //   .then(res => {
  //     this.setState({ isAddWineClicked: false })
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }

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
      console.log(res)
      this.setState({ isAddWineClicked: false })
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

  handleAddWineClick() {
    this.setState({ 
      isAddWineClicked: true,
      isEditClicked: false,
      isWineClicked: false
     });
  }

  editWine(id) {
   this.setState({ 
     isEditClicked: true,
     isWineClicked: false,
     isAddWineClicked: false,
     wineToEdit: id 
    });
  }

  renderWineList() {
    this.setState({
      isAddWineClicked: false,
      isWineClicked: false,
      isEditClicked: false
    });
  }

  renderHeader() {
    const { isAddWineClicked, isEditClicked, isWineClicked, clickedWine } = this.state;
    if (isWineClicked) {
      return <h1 className="header-clicked-wine">: {clickedWine.name}, {clickedWine.year}</h1>
    } else if (isAddWineClicked) {
      return <h1 className="header-clicked-wine">: Add New Wine Form</h1>
    } else if (isEditClicked) {
      return <h1 className="header-clicked-wine">: Edit Wine</h1>
    } else {
      return null;
    }
  }

  whichComponentToRender() {
    if (this.state.isWineClicked) {
      return (
        <SingleWine clickedWine={this.state.clickedWine}  
                    editWine={this.editWine} />
      )
    } else if (this.state.isAddWineClicked) {
      return (
        <NewWineForm  handleAddWineClick={this.handleAddWineClick}
                      handleNewWineSubmit={this.handleNewWineSubmit} 
                      newWineName={this.state.newWineName}/>
      )
    } else if (this.state.isEditClicked) {
      return (
        <EditWineForm clickedWine={this.state.clickedWine}
                      wineToEdit={this.state.wineToEdit}
                      renderWineList={this.renderWineList}/>
      )
    }
    else {
      return (
        <WinePage wines={this.state.wines}
                  handleWineClick={this.handleWineClick}
                  deleteWine={this.deleteWine} 
                  getWineData={this.getWineData}/>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="header-wrapper">
          <h1 className="header">Wine Time</h1>
          {this.renderHeader()}
        </div>
        <div className="container">
            <SideNav  wines={this.state.wines}
                      handleWineClick={this.handleWineClick}
                      handleAddWineClick={this.handleAddWineClick}
                      handleBackClick={this.handleBackClick} />
            {this.whichComponentToRender()}
        </div>
      </div>
    );
  }
}

export default App;
