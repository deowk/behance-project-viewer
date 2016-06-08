import React, {Component} from 'react';
import Grid from '../components/grid';
import DisplayLoader from '../components/display-loader';

export default class ProjectsView extends Component {
  render() {
    return(
      <div className='projects-container'>
        { !this.props.loading && this.props.projects.items.length > 0 ?
            <Grid projects={this.props.projects.items} />
            :
            <DisplayLoader />}
      </div>
    )
  }
}
