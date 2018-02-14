// global
import React, { Component } from 'react';
import Draggable from 'react-draggable';
// import PropTypes from 'prop-types';
import { Icon, Checkbox } from 'semantic-ui-react';
// local
// css
import './ObjectivesPanel.css';

class ObjectivesPanel extends Component {
    render() {
        return (
            <Draggable position={null} bounds="#grid-layout">
                <div id="objectives-panel">
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
                    <div className="panel">
                        <Checkbox />
                        <Checkbox />
                        <Checkbox />
                        <Checkbox />
                        <Checkbox />
                    </div>
                </div>
            </Draggable>
        );
    }
}

// ObjectivesPanel.propTypes = {};

export default ObjectivesPanel;
