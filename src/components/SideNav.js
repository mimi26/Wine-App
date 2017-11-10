import React, { Component } from 'react';

class SideNav extends Component {
    render() {
        const { wines } = this.props;

        return (
            <div className="side-nav">
                <h1 className="all-wines-header">All Wines</h1>
                <div className="wine-list"></div>
                <ul>
                    {wines.map((wine, i) => {
                        return(
                            <li key={i}>{wine.name}, {wine.year}</li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default SideNav;