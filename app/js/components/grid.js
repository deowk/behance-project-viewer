import React, { Component } from 'react';
import SmallTile from './small-tile';

export default class Grid extends Component {

  render() {
    return(
      <div className='grid-container'>
        {this._getTiles()}
      </div>
    )
  }

  _getTiles() {
    var smallTiles = [];
    var smallTilesParsing = [];
    this.props.projects.map((project, index) => {
      smallTilesParsing.push(<SmallTile key={ index } project={ project } index={ index } />);
      if (smallTilesParsing.length % 2 === 0 || index === this.props.projects.length - 1) {
          smallTiles.push(<div key={'column' + index} className='grid-column'>{ smallTilesParsing }</div>);
          smallTilesParsing = [];
      }
    });
    return smallTiles;
  }
}
