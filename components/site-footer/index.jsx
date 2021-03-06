import React from 'react';

const SiteFooter = (props) => {
  const { site } = props;

  return (
    <footer className="global-site-footer">
      <div className="global-site-footer-container">
        <div className="product-links-row">
          <div className={`product-link-block ${site === 'company' ? 'selected' : ''}`}>
            <a href="//www.jwplayer.com">
              <div className="product">JW Player</div>
              <div className="description">Browse our products, company, resources, and pricing</div>
            </a>
          </div>
          <div className={`product-link-block ${site === 'dashboard' ? 'selected' : ''}`}>
            <a href="//dashboard.jwplayer.com">
              <div className="product">Dashboard</div>
              <div className="description">Content, players, analytics, and account management</div>
            </a>
          </div>
          <div className={`product-link-block ${site === 'developer' ? 'selected' : ''}`}>
            <a href="//developer.jwplayer.com">
              <div className="product">Developer</div>
              <div className="description">Join the community, demos, references, dev guides, and tools.</div>
            </a>
          </div>
          <div className={`product-link-block ${site === 'support' ? 'selected' : ''}`}>
            <a href="//support.jwplayer.com">
              <div className="product">Support</div>
              <div className="description">Search the articles, ask the community, or give feedback</div>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-base-row">
        <div className="site-footer-copyright">
          &copy; 2016 - {new Date().getFullYear()} | Longtail Ad Solutions, Inc. All Rights Reserved. JW Player is a registered trademark.
        </div>
        <div className="footer-links">
          <a href="//www.jwplayer.com/careers/">Careers</a>
          <a href="//www.jwplayer.com/tos/">Terms of Service</a>
          <a href="//www.jwplayer.com/privacy/">Privacy Policy</a>
          <a href="//www.jwplayer.com/dmca/">DMCA</a>
          <a href="//www.jwplayer.com/privacy/#ad-choices">Ad Choices</a>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
