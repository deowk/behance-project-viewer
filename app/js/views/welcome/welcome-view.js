import React, {Component} from 'react';
import { connect } from 'react-redux';
import keybinder from '../../utils/keybinder';

function select(state) {
    return {
        path: state.router.location.pathname
    }
}

class WelcomeView extends Component {
    constructor() {
      super();

      this.state = {
        highlight: false,
        keypress: null
      }
    }

    render() {
        return (
            <div className='welcome-container'>
                <h1>{'Current path: '+ this.props.path}</h1>
                <div style={{width: '10%', marginLeft: 'auto', marginRight: 'auto', marginTop: '25px'}}>
                  <div style={this._getStyle('u')}>Up</div>
                  <div style={this._getStyle('d')}>Down</div>
                  <div style={this._getStyle('l')}>Left</div>
                  <div style={this._getStyle('r')}>Right</div>
                  <div style={this._getStyle('e')}>Enter</div>
                  <div style={this._getStyle('b')}>Back</div>
                </div>
            </div>
        );
    }

    componentDidMount() {
      keybinder.setContextWithBindings('welcome-view', [
          {keyCombo: 'up', fn: () => this.up()},
          {keyCombo: 'down', fn: () => this.down()},
          {keyCombo: 'left', fn: () => this.left()},
          {keyCombo: 'right', fn: () => this.right()},
          {keyCombo: 'backspace', fn: () => this.back()},
          {keyCombo: 'enter', fn: () => this.enter()}
      ]);
      keybinder.setContext('welcome-view');
    }

    _getStyle(cond) {
      let style = {
        width: '100%',
        height: '50px',
        transition: 'all 0.2s ease-in-out',
        marginBottom: '5px',
        padding: '10px',
        color: '#fff',
        background: '#1B303C'
      }

      if (this.state.keypress === cond && this.state.highlight) {
        style.background = '#26a1df';
      }

      return style;
    }

    _setKey(key) {
      this.setState({...this.state, keypress: key, highlight: true});
      setTimeout(() => {
        this.setState({...this.state, highlight: false});
      }, 500);
    }

    up() {
      this._setKey('u');
    }

    down() {
      this._setKey('d');
    }

    left() {
      this._setKey('l');
    }

    right() {
      this._setKey('r');
    }

    back() {
      this._setKey('b');
    }

    enter() {
      this._setKey('e');
    }
}

export default connect(select)(WelcomeView);
