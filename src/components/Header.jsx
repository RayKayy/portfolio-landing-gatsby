/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import dp from '../images/dp.jpg';

const Header = (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            header {
              h1
              lines
            }
          }
        }
      }
    `,
  );
  const { timeout } = props;
  return (
    <header id="header" style={timeout ? { display: 'none' } : {}}>
      <div className="logo">
        <img src={dp} alt="Profile" />
      </div>
      <div className="content">
        <div className="inner">
          <h1>{data.site.siteMetadata.header.h1}</h1>
          <p>
            {data.site.siteMetadata.header.lines.map(line => <div>{line}</div>)}
          </p>
          <ul className="icons">
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.github.com/RayKayy" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https:///www.linkedin.com/in/raymondwmk" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/raymond_wmk/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
          </ul>
        </div>
      </div>
      <nav>
        <ul>
          <li><a role="button" onClick={() => { props.onOpenArticle('about'); }}>About</a></li>
          <li><a role="button" onClick={() => { props.onOpenArticle('projects'); }}>Projects</a></li>
          <li><a href="https://blog.raykayy.io">Blog</a></li>
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
