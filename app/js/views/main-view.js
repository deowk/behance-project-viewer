import React, {Component} from 'react';
import MainNav from '../components/main-nav';

export default class MainView extends Component {
  render() {
    return(
      <div className='container main-view'>
        <div className='content'>
          <MainNav />
          {this.props.children}
        </div>
      </div>
    )
  }
}
