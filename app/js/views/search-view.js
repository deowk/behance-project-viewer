import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import keybinder from '../utils/keybinder';
import { loadFields } from '../actions/nav-actions';

function select(state) {
  return {
    dispatch: state.dispatch,
    navitems: state.navReducer.items
  };
}

class SearchView extends Component {
  render() {
    return(
      <div className='container search-view'>
        <div className='search-view-bg'></div>
        <div className='content'>
          <div className='search-input-box'>
            <label ref='searchInput' htmlFor='search' >Type a keyword to search Behance: </label>
            <input id='search' name='search'></input>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs['searchInput']).focus();
    keybinder.setContextWithBindings('search-view', [
        {keyCombo: 'enter', fn: () => this.enter()}
    ]);
    keybinder.setContext('search-view');
    this._getNavItems();
  }

  enter() {
    this.props.dispatch(pushState(null, '/main/projects'));
  }

  _getNavItems() {
    if (this.props.navitems.length > 0) return;
    this.props.dispatch(loadFields());
  }
}

export default connect(select)(SearchView);
