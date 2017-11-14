import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                            <Link to={`wine/${wine.id}`}>
                                <div className="wine-listing"
                                                onClick={() => handleWineClick(wine)}
                                >
                                    <img src={wine.picture} className="wine-picture" alt="" />
                                    <p className="wine-description">
                                        {wine.name}, {wine.year}
                                    </p>
                                </div>
                            </ Link>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default WinePage;