import React, {Component} from 'react';
import keybinder from '../utils/keybinder';

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

  componentDidMount() {
    keybinder.setContextWithBindings('main-nav', [
        {keyCombo: 'up', fn: () => this.up()},
        {keyCombo: 'down', fn: () => this.down()}
    ]);
    keybinder.setContext('main-nav');
  }

  up() {
    let { navitems, dispatch, pushState, query } = this.props;
    let currentIndex = navitems.findIndex((item) => {
      return item.name === query.section;
    });
    if (currentIndex > 0) {
      dispatch(pushState(null, '/main/projects', {section: navitems[currentIndex - 1].name}));
    }
  }

  down() {
    let { navitems, dispatch, pushState, query } = this.props;
    let currentIndex = navitems.findIndex((item) => {
      return item.name === query.section;
    });
    if (currentIndex < navitems.length - 1) {
      dispatch(pushState(null, '/main/projects', {section: navitems[currentIndex + 1].name}));
    }
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
