import React, { Component } from 'react';
import './App.css';

class App extends Component {

  /* -- AMOSTRA STATE  state = {
      meuNome: 'Wagner Ricardo Wagner'
    }
  
    handleState = (e) => {
      const { value, name } = e.target;
  
      this.setState({ [name]: value })
    }*/

  render() {



    return (
      <div id="app" className="container">
        <h1>FaceHUB</h1>
        <div className="containerAction">
          <input type="text" placeholder="Usuário GitHUB" />
          <button>Buscar</button>
        </div>
        <div id="profile" className="containerProfile">
          <div>
            <div className="user">
              <div>
                <img src="https://avatars0.githubusercontent.com/u/11953187?v=4" />
              </div>
              <h4>Wagner Ricardo Wagner e vendo o que acontece</h4>
              <span>wagnerricardonet@gmail.com.br</span>
              <span>Meu blog</span>
              <span>Brasil</span>
              <span>34 Repositórios</span>
              <span>5 Seguidores</span>
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
        {/* -- AMOSTRA state = meuNome
        <input type="text" name="meuNome" onChange={handleState} />
        <button onClick={handleState}>Alterar State</button>
        */}
      </div>
    )
  }
}

export default App;
