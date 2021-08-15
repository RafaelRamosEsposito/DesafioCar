import React, { Component } from 'react'
import ExibeCarros from './exibeCarros';
import ListaCarros from './listaCarros'
import carros from './data.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { carrosSelecionados: [] };
    this.removeCarro = this.removeCarro.bind(this);
    this.addCarro = this.addCarro.bind(this);
  }

  addCarro = (item) => {
    var itemEncontrado = this.state.carrosSelecionados.filter((i) => i === item);

    if (itemEncontrado.length === 0) {
      this.setState({ carrosSelecionados: [...this.state.carrosSelecionados, item] });    
    }
  }

  removeCarro = (item) => {
    var itensEncontrados = this.state.carrosSelecionados.filter((i) => i !== item);

    this.setState({ carrosSelecionados: itensEncontrados, clicado: true });    
  }

  verificaClicado = (i) => {            
    return this.state.carrosSelecionados.filter((value) => i === value).length > 0;        
  }

  render() {
    return (
      <div>
        <h2>Loja de Carros!</h2>        
        <ExibeCarros carros={carros} carrosSelecionados={this.state.carrosSelecionados} addCarro={this.addCarro} removeCarro={this.removeCarro} />
        <ListaCarros listaCarros={this.state.carrosSelecionados.reduce((value, item) => [...value, {...carros[item], id: item} ], [])} removeCarro={this.removeCarro} />                   
      </div>      
    )
  }
}

export default App;
