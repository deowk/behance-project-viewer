import React, { Component } from 'react';

export default class SmallTile extends Component {
  constructor() {
    super()
    this.state = {
      opacity: 0,
      placeholder: 1
    };
  }

  render() {
    return(
      <div className='small-tile'>
          <div className='small-tile-inner'>
            <div className='small-tile-filler'>
              <div style={{opacity: this.state.opacity}} className='thumb'>
                  <div className='protective-tile'></div>
                  <div className='small-tile-text-container'>
                      <div className='small-tile-text'>
                          <span>
                              {this.props.project.name}
                          </span>
                      </div>
                  </div>
                  <img className='tile-img' src={this.props.project.covers['404']} onLoad={() => this.onLoad()}/>
              </div>
              <div className='placeholder' style={{opacity: this.state.placeholder }}></div>
            </div>
          </div>
      </div>
    )
  }

  onLoad() {
      this.setState({ opacity: 0.8 , placeholder: 0});
  }

}
