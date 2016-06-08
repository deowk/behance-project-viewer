import React, { Component } from 'react';

export default class Grid extends Component {
  constructor() {
    super()
    this.state = {
      opacity: 0,
      placeholder: 1
    };
  }

  render() {
    return(
      <div className='grid-container'>
        <div className='grid-column'>
          <div className='small-tile active'>
              <div className='small-tile-inner'>
                <div className='small-tile-filler'>
                  <div style={{opacity: this.state.opacity}} className='thumb'>
                      <div className='small-tile-text-container'>
                          <div className='small-tile-text'>
                              <span>
                                  Artwork Title
                              </span>
                          </div>
                      </div>
                      <img className='tile-img' src='https://mir-s3-cdn-cf.behance.net/projects/404/fc8b6237469721.Y3JvcCw5ODYsNzcwLDEwMSww.jpg' onLoad={() => this.onLoad()}/>
                  </div>
                  <div className='placeholder' style={{opacity: this.state.placeholder }}></div>
                </div>
              </div>
          </div>
          <div className='small-tile'>
              <div className='small-tile-inner'>
                <div className='small-tile-filler'>
                  <div style={{opacity: this.state.opacity}} className='thumb'>
                      <div className='small-tile-text-container'>
                          <div className='small-tile-text'>
                              <span>
                                  Artwork Title
                              </span>
                          </div>
                      </div>
                      <img className='tile-img' src='https://mir-s3-cdn-cf.behance.net/projects/404/fc8b6237469721.Y3JvcCw5ODYsNzcwLDEwMSww.jpg' onLoad={() => this.onLoad()}/>
                  </div>
                  <div className='placeholder' style={{opacity: this.state.placeholder }}></div>
                </div>
              </div>
          </div>
        </div>
        <div className='grid-column'>
          <div className='small-tile active'>
              <div className='small-tile-inner'>
                <div className='small-tile-filler'>
                  <div style={{opacity: this.state.opacity}} className='thumb'>
                      <div className='small-tile-text-container'>
                          <div className='small-tile-text'>
                              <span>
                                  Artwork Title
                              </span>
                          </div>
                      </div>
                      <img className='tile-img' src='https://mir-s3-cdn-cf.behance.net/projects/404/fc8b6237469721.Y3JvcCw5ODYsNzcwLDEwMSww.jpg' onLoad={() => this.onLoad()}/>
                  </div>
                  <div className='placeholder' style={{opacity: this.state.placeholder }}></div>
                </div>
              </div>
          </div>
          <div className='small-tile'>
              <div className='small-tile-inner'>
                <div className='small-tile-filler'>
                  <div style={{opacity: this.state.opacity}} className='thumb'>
                      <div className='small-tile-text-container'>
                          <div className='small-tile-text'>
                              <span>
                                  Artwork Title
                              </span>
                          </div>
                      </div>
                      <img className='tile-img' src='https://mir-s3-cdn-cf.behance.net/projects/404/fc8b6237469721.Y3JvcCw5ODYsNzcwLDEwMSww.jpg' onLoad={() => this.onLoad()}/>
                  </div>
                  <div className='placeholder' style={{opacity: this.state.placeholder }}></div>
                </div>
              </div>
          </div>
        </div>
        <div className='grid-column'>
          <div className='small-tile active'>
              <div className='small-tile-inner'>
                <div className='small-tile-filler'>
                  <div style={{opacity: this.state.opacity}} className='thumb'>
                      <div className='small-tile-text-container'>
                          <div className='small-tile-text'>
                              <span>
                                  Artwork Title
                              </span>
                          </div>
                      </div>
                      <img className='tile-img' src='https://mir-s3-cdn-cf.behance.net/projects/404/fc8b6237469721.Y3JvcCw5ODYsNzcwLDEwMSww.jpg' onLoad={() => this.onLoad()}/>
                  </div>
                  <div className='placeholder' style={{opacity: this.state.placeholder }}></div>
                </div>
              </div>
          </div>
          <div className='small-tile'>
              <div className='small-tile-inner'>
                <div className='small-tile-filler'>
                  <div style={{opacity: this.state.opacity}} className='thumb'>
                      <div className='small-tile-text-container'>
                          <div className='small-tile-text'>
                              <span>
                                  Artwork Title
                              </span>
                          </div>
                      </div>
                      <img className='tile-img' src='https://mir-s3-cdn-cf.behance.net/projects/404/fc8b6237469721.Y3JvcCw5ODYsNzcwLDEwMSww.jpg' onLoad={() => this.onLoad()}/>
                  </div>
                  <div className='placeholder' style={{opacity: this.state.placeholder }}></div>
                </div>
              </div>
          </div>
        </div>
        <div className='grid-column'>
          <div className='small-tile active'>
              <div className='small-tile-inner'>
                <div className='small-tile-filler'>
                  <div style={{opacity: this.state.opacity}} className='thumb'>
                      <div className='small-tile-text-container'>
                          <div className='small-tile-text'>
                              <span>
                                  Artwork Title
                              </span>
                          </div>
                      </div>
                      <img className='tile-img' src='https://mir-s3-cdn-cf.behance.net/projects/404/fc8b6237469721.Y3JvcCw5ODYsNzcwLDEwMSww.jpg' onLoad={() => this.onLoad()}/>
                  </div>
                  <div className='placeholder' style={{opacity: this.state.placeholder }}></div>
                </div>
              </div>
          </div>
          <div className='small-tile'>
              <div className='small-tile-inner'>
                <div className='small-tile-filler'>
                  <div style={{opacity: this.state.opacity}} className='thumb'>
                      <div className='small-tile-text-container'>
                          <div className='small-tile-text'>
                              <span>
                                  Artwork Title
                              </span>
                          </div>
                      </div>
                      <img className='tile-img' src='https://mir-s3-cdn-cf.behance.net/projects/404/fc8b6237469721.Y3JvcCw5ODYsNzcwLDEwMSww.jpg' onLoad={() => this.onLoad()}/>
                  </div>
                  <div className='placeholder' style={{opacity: this.state.placeholder }}></div>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }

  onLoad() {
      this.setState({ opacity: 0.8 , placeholder: 0});
  }
}
