import React, { PropTypes } from 'react';

import './IconSearchResult.scss';
import customPropTypes from './propTypes';

const IconSearchResult = props => (
  <div>
    <dt className="bpkdocs-icon-search-result__title">
      {props.category}
    </dt>
    <dd className="bpkdocs-icon-search-result__content">
      <ul className="bpkdocs-icon-search-result__list">
        {props.icons.map(icon => (
          <li key={icon.name} className="bpkdocs-icon-search-result__list-item">
            <span className="bpkdocs-icon-search-result__icon-container">
              <icon.component className="bpkdocs-icon-search-result__icon" />
            </span>
            <span className="bpkdocs-icon-search-result__name-container">{icon.name}</span>
          </li>
        ))}
      </ul>
    </dd>
  </div>
);

IconSearchResult.propTypes = {
  category: PropTypes.string.isRequired,
  icons: customPropTypes.icons.isRequired,
};

export default IconSearchResult;