import React, { PropTypes } from 'react';
import { pushState } from 'redux-router';
import { connect } from 'react-redux';
import Header from '../components/header.js';
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
                <Header routerState={this.props.routerState} />
                {React.cloneElement(children || <div />, {})}
            </div>
        );
    }

    componentDidMount() {
        this.props.pushState(null, '/welcome', {});
    }
}

export default connect(select, { pushState })(App);
