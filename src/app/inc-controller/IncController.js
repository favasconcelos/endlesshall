// global
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
// local
// css
import './IncController.css';

class IncController extends Component {
    render() {
        const { handleController } = this.props;
        return (
            <Draggable position={null} bounds="#grid-layout">
                <div id="inc-controller">
                    <div className="top" onClick={handleController('top')}>
                        +
                    </div>
                    <div className="left" onClick={handleController('left')}>
                        +
                    </div>
                    <div className="right" onClick={handleController('right')}>
                        +
                    </div>
                    <div className="bottom" onClick={handleController('bottom')}>
                        +
                    </div>
                    <div className="center" />
                </div>
            </Draggable>
        );
    }
}

IncController.propTypes = {
    handleController: PropTypes.func,
};

export default IncController;
