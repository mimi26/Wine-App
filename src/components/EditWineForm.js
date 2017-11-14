import React, { Component } from 'react';
import axios from 'axios';

class EditWineForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.clickedWine.name,
            year: this.props.clickedWine.year,
            grapes: this.props.clickedWine.grapes,
            country: this.props.clickedWine.country,
            region: this.props.clickedWine.region,
            description: this.props.clickedWine.description,
            picture: this.props.clickedWine.picture,
            price: this.props.clickedWine.price
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleGrapesChange = this.handleGrapesChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleRegionChange = this.handleRegionChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePictureChange = this.handlePictureChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleEditWineSubmit = this.handleEditWineSubmit.bind(this);
    }

     handleNameChange(event) {
        this.setState({ name: event.target.value })
     }

     handleYearChange(event) {
        this.setState({ year: event.target.value })
     }

     handleGrapesChange(event) {
        this.setState({ grapes: event.target.value })
     }

     handleCountryChange(event) {
        this.setState({ country: event.target.value })
     }

     handleRegionChange(event) {
        this.setState({ region: event.target.value })
     }

     handleDescriptionChange(event) {
        this.setState({ description: event.target.value })
     }

     handlePictureChange(event) {
        this.setState({ picture: event.target.value })
     }

     handlePriceChange(event) {
        this.setState({ price: event.target.value })
     }


     handleEditWineSubmit(e) {
        e.preventDefault();
        const id = this.props.wineToEdit;
        axios.put(`https://myapi-profstream.herokuapp.com/api/c8542c/wines/${id}`, {
          name: this.state.name,
          year: this.state.year,
          grapes: this.state.grapes,
          country: this.state.country,
          region: this.state.region,
          description: this.state.description,
          picture: this.state.picture,
          price: this.state.price
        }).then(res => {
            this.props.redirectToWineList();
        })
      }

    render() {
        const { clickedWine } = this.props;
        return (
            <div>
                <form onSubmit={this.handleEditWineSubmit}>
                    <label>Name of Wine</label>
                    <input type="text" placeholder={clickedWine.name} onChange={this.handleNameChange} name="name" />
                    <label>Price of Wine</label>
                    <input type="number" placeholder={clickedWine.price} onChange={this.handlePriceChange} name="price" />
                    <label>Year Wine Was Made</label>
                    <input type="number" placeholder={clickedWine.year} onChange={this.handleYearChange} name="year" />
                    <label>Description of Wine</label>
                    <input type="text" placeholder={clickedWine.description} onChange={this.handleDescriptionChange} name="description" />
                    <label>Country of Origin</label>
                    <input type="text" placeholder={clickedWine.country} onChange={this.handleCountryChange} name="country" />
                    <label>Region of Origin</label>
                    <input type="text" placeholder={clickedWine.region} onChange={this.handleRegionChange} name="region" />
                    <label>Type of Grapes</label>
                    <input type="text" placeholder={clickedWine.grapes} onChange={this.handleGrapesChange} name="grapes" />
                    <label>Wine Picture URL</label>
                    <input type="text" placeholder={clickedWine.picture} onChange={this.handlePictureChange} name="picture" />
                    <input type="submit" value="Edit Wine" />
                </form>
            </div>
        );
    }
}

export default EditWineForm;