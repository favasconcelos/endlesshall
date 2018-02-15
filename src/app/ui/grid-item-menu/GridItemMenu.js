// global
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
// local
import './GridItemMenu.css';

const INIT_STATE = () => ({ isMenuOpen: false });

class GridItemMenu extends Component {
    constructor(props) {
        super(props);
        this.state = INIT_STATE();
    }

    handleController = () => {};

    handleClose = () => {
        this.setState({ isMenuOpen: false });
    };

    render() {
        return (
            <div className="grid-item-menu">
                <div className="panel">
                    <Icon name="theme" className="red" />
                    <Icon name="theme" className="blue" />
                    <Icon name="theme" className="yellow" />
                    <Icon name="theme" className="green" />
                    <Icon name="theme" className="purple" />
                </div>
                <div className="panel">
                    <Icon name="cube" className="red" />
                    <Icon name="cube" className="blue" />
                    <Icon name="cube" className="yellow" />
                    <Icon name="cube" className="green" />
                    <Icon name="cube" className="purple" />
                </div>
                <div className="panel border-panel">
                    <div className="left" onClick={this.handleController('left')} />
                    <div className="top" onClick={this.handleController('top')} />
                    <div className="right" onClick={this.handleController('right')} />
                    <div className="bottom" onClick={this.handleController('bottom')} />
                </div>
            </div>
        );
    }
}

GridItemMenu.propTypes = {
    callback: PropTypes.func,
};

export default GridItemMenu;
