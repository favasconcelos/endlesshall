// global
import React, { Component } from 'react';
import { Provider } from 'react-redux';
// local
import Grid from 'app/ui/grid';
// import the redux store
import store from 'app/redux/store';
// css
import './Root.css';

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Grid />
            </Provider>
        );
    }
}

export default Root;
