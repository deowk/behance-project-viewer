import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return(
        <header>
          <div className='logo-container'>
            <img className='header-logo' src={require('../../assets/img/behance-logo.png')} />
          </div>
        </header>
    )
  }
}
