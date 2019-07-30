/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import dp from '../images/dp.jpg';

const Header = (props) => {
  const { timeout } = props;
  return (
    <header id="header" style={timeout ? { display: 'none' } : {}}>
      <div className="logo">
        <img src={dp} alt="Profile" />
      </div>
      <div className="content">
        <div className="inner">
          <h1>Raymond Kwan</h1>
          <p>
            A Software Developer
            with a passion for anything technology related
            <br />
            From Hong Kong. Raised in Shanghai. Living in Toronto.
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li><a role="button" onClick={() => { props.onOpenArticle('about'); }}>About</a></li>
          <li><a href="https://blog.raykayy.io">Blog</a></li>
          <li><a role="button" onClick={() => { props.onOpenArticle('work'); }}>Work</a></li>
          <li><a role="button" onClick={() => { props.onOpenArticle('contact'); }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header;
