import React, { Component } from 'react';

export default class SiteHeader extends Component {

  state = {
    menu: false,
    site: this.props.site
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu })
  }

  render() {
    const { menu, site } = this.state;
    return (
      <div className={`site-header ${site}`}>
        <div className="site-header-container">
          <a className="logo" href="/">
            <img src="//developer.jwplayer.com/img/jw-logo-mark-white.svg" alt="JW Player Swoosh" />
            <img src="//developer.jwplayer.com/img/jw-logo-text-white.svg" alt="Jw Player Logo" />
            <span className={`logo-${site}`}>{site}</span>
          </a>
          <a className={`menu-toggle ${menu ? 'on' : ''}`} onClick={() => this.toggleMenu()}>Menu</a>
          <ul className={`menu ${menu ? 'show' : ''}`}>
            <li><a className="link" href="https://www.jwplayer.com/careers">Careers</a></li>
            <li><a className="link" href="https://www.jwplayer.com">Company</a></li>
            <li><a className="link" href="https://medium.com/jw-player-engineering">Blog</a></li>
            { site === 'developer' &&
              <li><a className="link" href="https://support.jwplayer.com">Support</a></li>
            }
            { site === 'support' &&
              <li><a className="link" href="https://developer.jwplayer.com">Developer</a></li>
            }
            <li><a className="link" href="https://dashboard.jwplayer.com">Sign-In</a></li>
            <li><a className="btn md red" href="https://www.jwplayer.com/pricing/?utm_source=support&utm_medium=CTA&utm_campaign=Developer%20Nav%20Upgrade">Upgrade</a></li>
          </ul>
        </div>
      </div>
    )
  };
}
