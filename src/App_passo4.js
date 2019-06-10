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

      this.setState({
        avatar: avatar_url,
        nome: name,
        email,
        bio,
        blog,
        seguidores: followers,
        repositoriosQtd: public_repos,
        pais: location,
        mensagem: ""
      });
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
      mensagem
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
              <div className="item">
                <h4>angular-css-grid</h4>
                <span>exemplo de css grid no angular</span>
                <a>https://github.com/wagnerww/angular-css-grid</a>
              </div>
              <div className="item">
                <h4>angular-css-grid</h4>
                <span>exemplo de css grid no angular</span>
                <a>https://github.com/wagnerww/angular-css-grid</a>
              </div>
              <div className="item">
                <h4>angular-css-grid</h4>
                <span>exemplo de css grid no angular</span>
                <a>https://github.com/wagnerww/angular-css-grid</a>
              </div>
              <div className="item">
                <h4>angular-css-grid</h4>
                <span>exemplo de css grid no angular</span>
                <a>https://github.com/wagnerww/angular-css-grid</a>
              </div>
              <div className="item">
                <h4>angular-css-grid</h4>
                <span>exemplo de css grid no angular</span>
                <a>https://github.com/wagnerww/angular-css-grid</a>
              </div>
              <div className="item">
                <h4>angular-css-grid</h4>
                <span>exemplo de css grid no angular</span>
                <a>https://github.com/wagnerww/angular-css-grid</a>
              </div>
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
