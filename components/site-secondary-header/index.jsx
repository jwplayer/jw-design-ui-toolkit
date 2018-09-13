import React, { Component } from 'react';

export default class SecondaryHeader extends Component {

  constructor(props) {
    super(props);
    this.state = { selected: props.selected }
  }

  handleMenu = () => {
    this.refs.menu.classList.toggle('is-open');
  }

  render() {
    const { selected } = this.state;

    return (
      <div className="site-secondary-header">
        <div className="site-secondary-header-container">
          <div className="site-secondary-header-group">
            <div className="site-secondary-header-dropdown" ref="menu">
              <a className="site-secondary-header-dropdown-arrow" onClick={this.handleMenu}></a>
                <div className="site-secondary-dropdown-menu">
                  <a href="//developer.jwplayer.com/jw-player/" className={`site-secondary-header-dropdown-link ${selected === 'jwplayer' ? 'is-selected' : ''}`}>JW Player</a>
                  <a href="//developer.jwplayer.com/jw-platform/" className={`site-secondary-header-dropdown-link ${selected === 'jwplatform' ? 'is-selected' : ''}`}>JW Platform</a>
                  <a href="//developer.jwplayer.com/android-sdk/" className={`site-secondary-header-dropdown-link ${selected === 'android' ? 'is-selected' : ''}`}>Android SDK</a>
                  <a href="//developer.jwplayer.com/ios-sdk/" className={`site-secondary-header-dropdown-link ${selected === 'ios' ? 'is-selected' : ''}`}>iOS SDK</a>
                  <a href="//developer.jwplayer.com/tools/" className={`site-secondary-header-dropdown-link ${selected === 'devtools' ? 'is-selected' : ''}`}>Developer Tools</a>
                  <a href="//developer.jwplayer.com/release-notes/" className={`site-secondary-header-dropdown-link ${selected === 'releasenotes' ? 'is-selected' : ''}`}>Release Notes</a>
                </div>
            </div>
          </div>
            <a href="//developer.jwplayer.com/jw-platform/docs/delivery-api-reference/">Delivery API</a>
            <a href="//developer.jwplayer.com/jw-platform/reference/v1/">Management API</a>
            <a href="//developer.jwplayer.com/jw-platform/docs/developer-guide/">Developer Guide</a>
            <a href="//developer.jwplayer.com/jw-platform/docs/developer-guide/release-notes/">Release Notes</a>
        </div>
      </div>
    )
  }
}
