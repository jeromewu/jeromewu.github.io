import React from 'react';
import githubLogo from './images/github-logo.svg';
import linkedinLogo from './images/linkedin-logo.svg';
import resume from './images/resume.svg';
import medium from './images/medium.svg';
import './App.css';

export default () => (
  <div className="app">
    <div className="main">
      <p className="name">Wen-Chieh Wu / Jerome Wu / 吳文傑</p>
      <div className="imgs">
        {
          [
            { href: 'https://github.com/jeromewu', src: githubLogo, alt: 'github-logo' },
            { href: 'https://www.linkedin.com/in/wenchiehwu/', src: linkedinLogo, alt: 'linkedin-logo' },
            { href: 'https://medium.com/@jeromewus', src: medium, alt: 'medium' },
            { href: '/doc/resume.pdf', src: resume, alt: 'resume' },
          ].map(({ href, src, alt  }) => (
            <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
              <img className="img-button" src={src} alt={alt} />
            </a>
          ))
        }
      </div>
      <p className="job-title">Technical Lead ‧ Software Architect ‧ Full Stack Engineer</p>
      <p className="location">Taipei City, Taiwan</p>
    </div>
    <div className="footer">
      Icon made by&nbsp;
      <a href="https://www.flaticon.com/authors/simpleicon">simpleicon</a>,
      <a href="https://www.freepik.com/">freepik</a>
      &nbsp;from&nbsp;
      <a href="http://www.flaticon.com/">www.flaticon.com</a>
    </div>
  </div>
);
