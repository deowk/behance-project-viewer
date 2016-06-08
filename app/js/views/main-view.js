import React, {Component} from 'react';
import MainNav from '../components/main-nav';
import { loadFields } from '../actions/nav-actions';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

function select(state) {
  return {
    query: state.router.location.query,
    navitems: state.navReducer.items,
    loading: state.navReducer.loading
  }
}

class MainView extends Component {
  render() {
    return(
      <div className='container main-view'>
        <div className='content'>
          <MainNav navitems={this.props.navitems}
                   query={this.props.query}
                   dispatch={this.props.dispatch}
                   pushState={pushState} />
          {this.props.children}
        </div>
      </div>
    )
  }

  componentDidMount() {
    if (this.props.navitems.length === 0 && !this.props.loading) {
      this.props.dispatch(loadFields());
    } else if (this.props.navitems.length > 0 && typeof this.props.query.section === 'undefined') {
      this.props.dispatch(pushState(null, '/main/projects', {section: this.props.navitems[0].name}));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.navitems.length === 0 && nextProps.navitems.length > 0 && typeof this.props.query.section === 'undefined') {
      this.props.dispatch(pushState(null, '/main/projects', {section: nextProps.navitems[0].name}));
    }
  }

}

export default connect(select)(MainView);
