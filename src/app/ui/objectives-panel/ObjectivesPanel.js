// global
import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { Icon } from 'semantic-ui-react';
// local
// css
import './ObjectivesPanel.css';

class ObjectivesPanel extends Component {
    render() {
        return (
            <Draggable position={null} bounds="#grid-layout">
                <div id="objectives-panel">
                    <div className="panel">
                        <Icon name="theme" className="c-red empty" />
                        <Icon name="theme" className="c-blue empty" />
                        <Icon name="theme" className="c-yellow empty" />
                        <Icon name="theme" className="c-green empty" />
                        <Icon name="theme" className="c-purple empty" />
                    </div>
                    <div className="panel">
                        <Icon name="cube" className="c-red empty" />
                        <Icon name="cube" className="c-blue empty" />
                        <Icon name="cube" className="c-yellow empty" />
                        <Icon name="cube" className="c-green empty" />
                        <Icon name="cube" className="c-purple empty" />
                    </div>
                </div>
            </Draggable>
        );
    }
}

export default ObjectivesPanel;
