import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return(
        <header>
          <img className='header-logo' src={require('../../assets/img/behance-logo.png')} />
        </header>
    )
  }
}
