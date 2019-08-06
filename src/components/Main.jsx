/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import pic02 from '../images/pic02.jpg';
import aboutPic from '../images/backlit-keyboard.jpg';

const Main = (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            about {
              paragraphs
            }
            projects {
              title
              link
              imageUrl
              description
            }
          }
        }
      }
    `,
  );
  console.log(data)
  const close = <div role="button" className="close" onClick={() => { props.onCloseArticle(); }} />;
  return (
    <div ref={props.setWrapperRef} id="main" style={props.timeout ? { display: 'flex' } : { display: 'none' }}>

      <article id="projects" className={`${props.article === 'projects' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
        <h2 className="major">Projects</h2>
        {data.site.siteMetadata.projects.map(project => (
          <div>
            <h3><a target="_blank" rel="noopener noreferrer" href={project.link || ''}>{project.title}</a></h3>
            {project.imageUrl && <span className="image main"><img src={project.imageUrl} alt="" /></span>}
            <p>{project.description}</p>
          </div>
        ))}
        {close}
      </article>

      <article id="about" className={`${props.article === 'about' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
        <h2 className="major">About</h2>
        {data.site.siteMetadata.about.paragraphs.map(para => <p>{para}</p>)}
        <p>
          Currently working as a Software Developer@
          <a href="https://www.brokerbay.ca" target="_blank" rel="noopener noreferrer">BrokerBay</a>
          .
        </p>
        <span className="image main"><img src={aboutPic} alt="" /></span>
        {close}
      </article>

      <article id="contact" className={`${props.article === 'contact' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
        <h2 className="major">Contact</h2>
        <form method="post" action="#">
          Work in progress...
          Form currently will not work
          {/* Create hooks to notify me through some means */}
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4" />
          </div>
          <ul className="actions">
            <li><input type="submit" value="Send Message" className="special" /></li>
            <li><input type="reset" value="Reset" /></li>
          </ul>
        </form>
        {close}
      </article>

    </div>
  );
};

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
