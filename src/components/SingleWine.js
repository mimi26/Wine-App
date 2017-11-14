import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleWine extends Component {
    
    render() {
        const { clickedWine, editWine } = this.props;
        return (
            <div className="single-wine-container">
                <Link to="/edit">
                    <button onClick={() => editWine(clickedWine.id)}>Edit this wine</button>
                </ Link>
                <div className="single-wine-listing">
                    <div className="wine-price">$ {clickedWine.price}.00</div>
                    <div className="single-wine-name">{clickedWine.name}, {clickedWine.year}</div>
                    <img src={clickedWine.picture} alt="" />
                    <div className="wine-description">{clickedWine.description}</div>
                    <div className="wine-country">Country: {clickedWine.country}</div>
                    <div className="wine-region">Region: {clickedWine.region}</div>
                    <div className="wine-grapes">Grapes: {clickedWine.grapes}</div>
                </div>
            </div>
        );
    }
}

export default SingleWine;