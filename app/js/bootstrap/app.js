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
              <div className="aspect-ratio-container">
                <div className="aspect-ratio-filler">
                  <Header routerState={this.props.routerState} />
                  {React.cloneElement(children || <div />, {})}
                </div>
              </div>
            </div>
        );
    }
}

export default connect(select, { pushState })(App);
