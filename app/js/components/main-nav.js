import React, {Component} from 'react';

export default class MainNav extends Component {
  render() {
    return(
      <div id='mainNav' ref='mainNav' className={this._getClass()}>
        <ul className='nav-container'>
          {this._getNavItems()}
        </ul>
      </div>
    )
  }

  _getClass() {
    let { navitems } = this.props;
    let className = 'main-nav hidden';
    if (navitems.length > 0) className = 'main-nav';
    return className;
  }

  _getNavItems() {
    return this.props.navitems.map((item) => {
      return (
        <li key={item.id} className='nav-item'>
            <a href="#" className={item.name === this.props.query.section ? 'menu-text active' : 'menu-text'}>
              {item.name}
            </a>
        </li>
      )
    });
  }
}
