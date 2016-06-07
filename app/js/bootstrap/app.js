import React, { PropTypes } from 'react';
import { pushState } from 'redux-router';
import { connect } from 'react-redux';
import '../../assets/sass/main.scss';

function select(state) {
    return {
        routerState: state.router
    };
}

export class App extends React.Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        const { props: { children } } = this;

        return (
            <div className="app-container">
                {React.cloneElement(children || <div />, {})}
            </div>
        );
    }

    componentDidMount() {
        this.props.pushState(null, '/welcome', {});
    }
}

export default connect(select, { pushState })(App);
