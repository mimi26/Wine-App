import React, { Component } from 'react';

class NewWineForm extends Component {
    render() {
        const { handleNewWineSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleNewWineSubmit}>
                    <label>Name of Wine</label>
                    <input type="text" name="name" />
                    <label>Price of Wine</label>
                    <input type="number" name="price" />
                    <label>Year Wine Was Made</label>
                    <input type="number" name="year" />
                    <label>Description of Wine</label>
                    <input type="text" name="description" />
                    <label>Country of Origin</label>
                    <input type="text" name="country" />
                    <label>Region of Origin</label>
                    <input type="text" name="region" />
                    <label>Type of Grapes</label>
                    <input type="text" name="grapes" />
                    <label>Wine Picture URL</label>
                    <input type="text" name="picture" />
                    <input type="submit" value="Add Wine" />
                </form>
            </div>
        );
    }
}

export default NewWineForm;