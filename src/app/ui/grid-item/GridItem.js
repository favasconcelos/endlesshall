// global
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popup, Icon } from 'semantic-ui-react';
// local
import GridItemMenu from 'app/ui/grid-item-menu';
import './GridItem.css';

const INIT_STATE = () => ({ isMenuOpen: false });

class GridItem extends Component {
    constructor(props) {
        super(props);
        this.state = INIT_STATE();
    }

    handleOpen = () => {
        this.setState({ isMenuOpen: true });
    };

    handleClose = () => {
        this.setState({ isMenuOpen: false });
    };

    render() {
        const { x, y, options } = this.props;
        const { isMenuOpen } = this.state;

        const className = ['grid-item'];
        if (options.left) {
            className.push('border-left');
        }
        if (options.top) {
            className.push('border-top');
        }
        if (options.right) {
            className.push('border-right');
        }
        if (options.bottom) {
            className.push('border-bottom');
        }

        return (
            <div className={className.join(' ')}>
                <Popup
                    trigger={<Icon name="setting" className="menu" />}
                    content={<GridItemMenu />}
                    basic
                    on="click"
                    open={isMenuOpen}
                    onClose={this.handleClose}
                    onOpen={this.handleOpen}
                    position="right center"
                />

                {x == 0 && y == 0 && <Icon name="theme" className="red" />}
                {x == 0 && y == 1 && <Icon name="cube" className="red" />}
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
