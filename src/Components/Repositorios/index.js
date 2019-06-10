import React from "react";

// import { Container } from './styles';

const Repositorios = ({ repo }) => (
  <div className="item">
    <h4>{repo.name}</h4>
    <span>{repo.description}</span>
    <a target="_blank" href={repo.html_url}>
      {repo.html_url}
    </a>
  </div>
);

export default Repositorios;
