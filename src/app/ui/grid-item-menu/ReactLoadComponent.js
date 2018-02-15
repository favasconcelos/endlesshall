// global
import React, { Component } from 'react';

const INIT_STATE = () => ({ isLoading: false, data: [], err: null });

const ListUniqueRow = text => {
    return (
        <tr>
            <td colSpan="3">{text}</td>
        </tr>
    );
};

const ListBody = data => {
    return data.map(row => {
        const key = `user-${key}`;
        return (
            <tr key={key}>
                <td>{row.mat}</td>
                <td>{row.name}</td>
                <td>{row.level}</td>
            </tr>
        );
    });
};

class LoadingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = INIT_STATE();
    }

    componentWillMount() {
        Api.doRequest()
            .then(this.onRequestSuccess)
            .catch(this.onRequestFail);
    }

    onRequestSuccess = data => {
        this.setState({ data });
    };

    onRequestFail = err => {
        this.setState({ err });
    };

    render() {
        const { isLoading, data } = this.state;
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Mat.</td>
                            <td>Nome</td>
                            <td>Level</td>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading && <ListUniqueRow text={'Carregando...'} />}
                        {!isLoading && data.length === 0 && <ListUniqueRow text={'Lista vazia.'} />}
                        {!isLoading && data.length > 0 && <ListBody data={data} />}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default LoadingComponent;
