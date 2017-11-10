import React, { Component } from 'react';

class WinePage extends Component {
    render() {
        const { wines, handleWineClick } = this.props;

        return (
            <div className="wine-page-container">
                {wines.map((wine, i) => {
                    return ( 
                        <div key={i}    className="wine-listing"
                                        onClick={handleWineClick}
                        >
                            <img src={wine.picture} className="wine-picture" alt="" />
                            <p className="wine-description">
                                {wine.name}, {wine.year}
                            </p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default WinePage;