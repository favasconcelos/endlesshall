// global
import React, { Component } from 'react';
import Draggable from 'react-draggable';
import _ from 'lodash';
// local
import ObjectivesPanel from 'app/ui/objectives-panel';
import IncController from 'app/ui/inc-controller';
import GridItem from 'app/ui/grid-item';
// css
import './Grid.css';

const ITEM_SIZE = 52;

const defaultObj = {
    top: null,
    left: null,
    right: null,
    bottom: null,
    value: null,
};

class Grid extends Component {
    constructor(props) {
        super(props);
        const grid = [];
        const rowSize = 1;
        for (let i = 0; i < rowSize; i++) {
            grid.push(_.fill(Array(rowSize), defaultObj));
        }
        const width = ITEM_SIZE * rowSize;
        const x = -width / 2;
        const y = -width / 2;
        this.state = {
            grid,
            rowSize,
            defaultPosition: { x, y },
        };
    }

    handleController = item => () => {
        let { grid, rowSize } = this.state;
        switch (item) {
            case 'top': {
                grid.unshift(_.fill(Array(rowSize), defaultObj));
                break;
            }
            case 'left': {
                rowSize++;
                _.forEach(grid, row => {
                    row.unshift(defaultObj);
                });
                break;
            }
            case 'right': {
                rowSize++;
                _.forEach(grid, row => {
                    row.push(defaultObj);
                });
                break;
            }
            case 'bottom': {
                grid.push(_.fill(Array(rowSize), defaultObj));
                break;
            }
        }
        this.setState({ grid, rowSize });
    };

    render() {
        const { grid, rowSize, defaultPosition } = this.state;
        const width = ITEM_SIZE * rowSize;
        return (
            <div id="grid-layout">
                <ObjectivesPanel />
                <IncController handleController={this.handleController} />
                <Draggable defaultPosition={defaultPosition} position={null}>
                    <div id="grid-wrapper" style={{ width }}>
                        {_.map(grid, (row, x) => {
                            return _.map(row, (_, y) => {
                                const key = `r${x}-c${y}`;
                                return <GridItem key={key} x={x} y={y} options={grid[x][y]} />;
                            });
                        })}
                    </div>
                </Draggable>
            </div>
        );
    }
}

export default Grid;
