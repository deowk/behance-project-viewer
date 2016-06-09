import React, {Component} from 'react';
import MainNav from '../components/main-nav';
import { loadFields } from '../actions/nav-actions';
import { loadContent } from '../actions/content-actions';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

function select(state) {
  return {
    query: state.router.location.query,
    navitems: state.navReducer.items,
    navLoading: state.navReducer.loading,
    projects: state.contentReducer.structure,
    contentLoading: state.contentReducer.loading
  }
}

class MainView extends Component {
  render() {
    const { props: { children } } = this;
    let projects = {items: []};

    if (this.props.projects[this.props.query.section]) {
      projects.items = this.props.projects[this.props.query.section].items;
    }

    return(
      <div className='container main-view'>
        <div className='content'>
          <MainNav navitems={this.props.navitems}
                   query={this.props.query}
                   dispatch={this.props.dispatch}
                   pushState={pushState} />
                 {React.cloneElement(children || <div />, {projects: projects, loading: this.props.contentLoading})}
        </div>
      </div>
    )
  }

  componentDidMount() {
    if (this.props.navitems.length === 0 && !this.props.navLoading) {
      this.props.dispatch(loadFields());
    } else if (this.props.navitems.length > 0 && typeof this.props.query.section === 'undefined') {
      this.props.dispatch(pushState(null, '/main/projects', {section: this.props.navitems[0].name}));
    } else {
      this.props.dispatch(loadContent(this.props.query.section, this.props.search));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.navitems.length === 0 && nextProps.navitems.length > 0) {
      this.props.dispatch(loadContent(this.props.query.section));
    }

    if (this.props.query.section !== nextProps.query.section) {
      this.props.dispatch(loadContent(nextProps.query.section, this.props.search));
    }
  }

}

export default connect(select)(MainView);
