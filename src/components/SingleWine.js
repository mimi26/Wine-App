import React, { Component } from 'react';

class SingleWine extends Component {
    render() {
        const { clickedWine, handleBackClick } = this.props;
        return (
            <div className="single-wine-container">
                <div className="back-to-wines" onClick={handleBackClick}>Back To Wine Page</div>
                <div className="wine-price">$ {clickedWine.price}.00</div>
                <div className="single-wine-name">{clickedWine.name}, {clickedWine.year}</div>
                <img src={clickedWine.picture} alt="" />
                <div className="wine-description">{clickedWine.description}</div>
                <div className="wine-country">Country: {clickedWine.country}</div>
                <div className="wine-region">Region: {clickedWine.region}</div>
                <div className="wine-grapes">Grapes: {clickedWine.grapes}</div>
            </div>
        );
    }
}

export default SingleWine;