import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Em from './Em';

const Repo = props => (
  <li className="repo-list-item public source">
    <div className="repo-list-stats">
      {props.language}
      <a
        className="repo-list-stat-item"
        href={`https://github.com/${props.full_name}/stargazers`}
        target="_blank"
      >
        <svg aria-hidden="true" className="octicon octicon-star" height={16} version="1.1" viewBox="0 0 14 16" width={14}><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z" /></svg>
        {' ' + props.stargazers_count}
      </a>
      <a
        className="repo-list-stat-item"
        href={`https://github.com/${props.full_name}/network`}
        target="_blank"
      >
        <svg aria-hidden="true" className="octicon octicon-git-branch" height={16} version="1.1" viewBox="0 0 10 16" width={10}><path d="M10 5c0-1.11-0.89-2-2-2s-2 0.89-2 2c0 0.73 0.41 1.38 1 1.72v0.3c-0.02 0.52-0.23 0.98-0.63 1.38s-0.86 0.61-1.38 0.63c-0.83 0.02-1.48 0.16-2 0.45V4.72c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72v6.56C0.41 11.63 0 12.27 0 13c0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.53-0.2-1-0.53-1.36 0.09-0.06 0.48-0.41 0.59-0.47 0.25-0.11 0.56-0.17 0.94-0.17 1.05-0.05 1.95-0.45 2.75-1.25s1.2-1.98 1.25-3.02h-0.02c0.61-0.36 1.02-1 1.02-1.73zM2 1.8c0.66 0 1.2 0.55 1.2 1.2s-0.55 1.2-1.2 1.2-1.2-0.55-1.2-1.2 0.55-1.2 1.2-1.2z m0 12.41c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m6-8c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z" /></svg>
        {' ' + props.forks_count}
      </a>
    </div>
    <h3 className="repo-list-name">
      <a href={props.html_url} target="_blank">
        {props.owner.login}/<Em needle={props.searchValue}>{props.name}</Em>
      </a>
    </h3>
    <p className="repo-list-description">
      <Em needle={props.searchValue}>{props.description && props.description.substring(0, 349)}</Em>
    </p>
    <p className="repo-list-meta">
      Updated <time dateTime={props.updated_at}>{props.updated_at}</time>
    </p>
  </li>
);

const mapStateToProps = ({ search: { value } }) => ({ searchValue: value });

export default connect(mapStateToProps)(Repo);