import React, {Component} from 'react';

export default class MainNav extends Component {
  render() {
    return(
      <div id='mainNav' ref='mainNav' className='main-nav'>
        <ul className='nav-container'>
            <li className='nav-item'>
                <a href="#" className='menu-text active'>
                  Graphic Design
                </a>
            </li>
            <li className='nav-item'>
                <a href="#" className='menu-text'>
                  Photography
                </a>
            </li>
            <li className='nav-item'>
                <a href="#" className='menu-text'>
                  Interaction Design
                </a>
            </li>
            <li className='nav-item'>
                <a href="#" className='menu-text'>
                  Art Direction
                </a>
            </li>
            <li className='nav-item'>
                <a href="#" className='menu-text'>
                  Illustration
                </a>
            </li>
            <li className='nav-item'>
                <a href="#" className='menu-text'>
                  Industrial Design
                </a>
            </li>
            <li className='nav-item'>
                <a href="#" className='menu-text'>
                  Motion Graphics
                </a>
            </li>
            <li className='nav-item'>
                <a href="#" className='menu-text'>
                  Fashion
                </a>
            </li>
            <li className='nav-item'>
                <a href="#" className='menu-text'>
                  Architecture
                </a>
            </li>
            <li className='nav-item'>
                <a href="#" className='menu-text'>
                  Branding
                </a>
            </li>
            <li className='nav-item'>
                <a href="#" className='menu-text'>
                  Web Design
                </a>
            </li>
        </ul>
      </div>
    )
  }
}
