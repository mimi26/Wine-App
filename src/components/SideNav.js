import React, { Component } from 'react';

class SideNav extends Component {
    render() {
        const { wines, handleWineClick, handleBackClick } = this.props;

        return (
            <div className="side-nav">
                <h1 className="all-wines-header">All Wines</h1>
                <div className="wine-list"></div>
                <ul>
                    {wines.map((wine, i) => {
                        return(
                            <li key={i} onClick={() => handleWineClick(wine)}>{wine.name}, {wine.year}</li>
                        )
                    })}
                </ul>
                <button onClick={this.props.handleAddWineClick}>Add New Wine</button>
                <button onClick={handleBackClick}>View All Wines</button>
            </div>
        );
    }
}

export default SideNav;