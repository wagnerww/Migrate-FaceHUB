import React, { Component } from "react";
import "./App.css";

import api from "./Services/api";

class App extends Component {
  state = {
    avatar: "",
    nome: "",
    email: "",
    bio: "",
    blog: "",
    repositoriosQtd: 0,
    seguidores: 0,
    pais: "",
    repositorios: [],
    userSearch: "",
    mensagem: "Informe um usuário para buscar o perfil no GitHub",
    isSuccess: false
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ userSearch: value });
  };

  handleSubmit = async () => {
    try {
      const respUser = await api.get(`/${this.state.userSearch}`);
      const {
        avatar_url,
        name,
        email,
        blog,
        bio,
        followers,
        public_repos,
        location
      } = respUser.data;

      try {
        const respUserRepos = await api.get(`/${this.state.userSearch}/repos`);

        this.setState({
          avatar: avatar_url,
          nome: name,
          email,
          bio,
          blog,
          seguidores: followers,
          repositoriosQtd: public_repos,
          pais: location,
          mensagem: "",
          repositorios: respUserRepos.data
        });
      } catch (error) {
        this.setState({
          mensagem:
            "...Ops houve uma falha ao buscar o usuário, tente novamente!"
        });
      }
    } catch (error) {
      this.setState({
        mensagem: "...Ops houve uma falha ao buscar o usuário, tente novamente!"
      });
    }
  };

  render() {
    const {
      avatar,
      nome,
      email,
      bio,
      blog,
      repositoriosQtd,
      seguidores,
      pais,
      mensagem,
      repositorios
    } = this.state;

    return (
      <div id="app" className="container">
        <h1>FaceHUB</h1>
        <div className="containerAction">
          <input
            type="text"
            placeholder="Usuário GitHUB"
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Buscar</button>
        </div>
        {!mensagem ? (
          <div id="profile" className="containerProfile">
            <div>
              <div className="user">
                <div>
                  <img src={avatar} />
                </div>
                <h4>{nome}</h4>
                <span>{email}</span>
                <span>{bio}</span>
                <span>{blog}</span>
                <span>{pais}</span>
                <span>{`${repositoriosQtd} Repositórios`}</span>
                <span>{`${seguidores} Seguidores`}</span>
              </div>
            </div>
            <div className="repositories">
              {repositorios.map(repo => (
                <div className="item">
                  <h4>{repo.name}</h4>
                  <span>{repo.description}</span>
                  <a target="_blank" href={repo.html_url}>
                    {repo.html_url}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div id="profile" className="containerProfile">
            <h3>{mensagem}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default App;
