import React, {Component} from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';

export default class Header extends Component {
  render() {
    console.log(this.props.search);
    return(
        <header>
          <div className='logo-container'>
            <img className='header-logo' src={require('../../assets/img/behance-logo.png')} />
          </div>
          <div className='breadcrumb-container'>
            <span>{capitalizeFirstLetter(this.props.search)}</span>
          </div>
        </header>
    )
  }
}
