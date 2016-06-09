import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import keybinder from '../utils/keybinder';
import { loadFields } from '../actions/nav-actions';
import { setSearch } from '../actions/search-actions';

function select(state) {
  return {
    dispatch: state.dispatch,
    navitems: state.navReducer.items
  };
}

class SearchView extends Component {
  constructor() {
    super()

    this.state = {
      search: '',
      displayToast: false
    };
  }

  render() {
    return(
      <div className='container search-view'>
        <div className='search-view-bg'></div>
        <div className='content'>
          <div className='search-input-box'>
            <label ref='searchInput' htmlFor='search' >Type a keyword to search Behance: </label>
            <input onChange={(e) => this._handleOnChange(e)} defaultValue={this.state.search} id='search' name='search'></input>
            {this.state.displayToast ?
              <div className='search-toast'>Please enter a keyword</div>
              :
              null}
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
    if (this.state.search !== '') {
      this.props.dispatch(setSearch(this.state.search));
      this.props.dispatch(pushState(null, '/main/projects'));
    } else {
      this.setState({...this.state, displayToast: true});
      ReactDOM.findDOMNode(this.refs['searchInput']).focus();
      setTimeout(() => {
        this.setState({...this.state, displayToast: false});
      }, 1000);
    }
  }

  _handleOnChange(e) {
    this.setState({...this.state, search: e.target.value});
  }

  _getNavItems() {
    if (this.props.navitems.length > 0) return;
    this.props.dispatch(loadFields());
  }
}

export default connect(select)(SearchView);
