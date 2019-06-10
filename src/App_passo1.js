import React, { Component, Fragment } from "react";
import "./App.css";

class App extends Component {
  state = {
    meuNome: "Wagner Ricardo Wagner"
  };

  handleState = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { meuNome } = this.state;
    return (
      <Fragment>
        <input
          type="text"
          placeholder="Usuário GitHUB"
          onChange={this.handleState}
        />

        <div>{meuNome}</div>
      </Fragment>
    );
  }
}

export default App;
