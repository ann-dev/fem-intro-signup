import React from 'react';
import './Attribution.scss';

const Attribution = () => (
  <>
    <span className="attribution">
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
        className="attribution__link"
      >
        Frontend Mentor
      </a>
      .
    </span>
    <span className="attribution">
      Coded by{' '}
      <a
        href="https://github.com/ann-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="attribution__link"
      >
        ann-dev
      </a>
      .
    </span>
  </>
);

export default Attribution;
