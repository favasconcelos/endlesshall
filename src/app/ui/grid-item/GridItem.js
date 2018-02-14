// global
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// local

class GridItem extends Component {
    render() {
        const { x, y, options } = this.props;
        console.log(options);
        return (
            <div className="grid-item">
                [{x},{y}]
            </div>
        );
    }
}

GridItem.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    options: PropTypes.object,
};

export default GridItem;
