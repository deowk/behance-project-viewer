import React, {Component} from 'react';
import { connect } from 'react-redux';
import keybinder from '../utils/keybinder';

export default class SearchView extends Component {
  render() {
    return(
      <div className='container search-view'>
        <div className='search-view-bg'></div>
        <div className='content'>
          <div className='search-input-box'>
            <label htmlFor='search' >Type a keyword to search Behance: </label>
            <input id='search' name='search'></input>
          </div>
        </div>
      </div>
    )
  }
}
