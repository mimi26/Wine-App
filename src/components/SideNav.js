import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideNav extends Component {
    render() {
        const { wines, handleWineClick, resetClickedWine } = this.props;

        return (
            <div className="side-nav">
                <h1 className="all-wines-header">All Wines</h1>
                <div className="wine-list"></div>
                <ul>
                    {wines.map((wine, i) => {
                        return(
                            <li key={i} onClick={() => handleWineClick(wine)}>
                                <Link to={`wine/${wine.id}`}>
                                    {wine.name}, {wine.year}
                                </ Link>
                            </li>
                        )
                    })}
                </ul>
                <Link to="/new">
                    <button onClick={resetClickedWine}>Add New Wine</button>
                </ Link>
                <Link to ="/">
                    <button>View All Wines</button>
                </ Link>
            </div>
        );
    }
}

export default SideNav;