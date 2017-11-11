import React, { Component } from 'react';

class WinePage extends Component {
    
    componentWillMount() {
        this.props.getWineData();
    }
    render() {
        const { wines, handleWineClick, deleteWine } = this.props;

        return (
            <div className="wine-page-container">
                {wines.map((wine, i) => {
                    return ( 
                        <div key={i}>
                            <button onClick={() => deleteWine(wine.id)}>X</button>
                            <div className="wine-listing"
                                            onClick={() => handleWineClick(wine)}
                            >
                                <img src={wine.picture} className="wine-picture" alt="" />
                                <p className="wine-description">
                                    {wine.name}, {wine.year}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default WinePage;