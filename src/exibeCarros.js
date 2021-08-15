import React from 'react'
import Carro from './Carro'

let ExibeCarros = props => {
    const { carros, carrosSelecionados, addCarro, removeCarro } = props

    return (
            <div className="boxes">
              {
                carros.map((item, i) => 
                  <Carro key={i} id={i} clicado={(carrosSelecionados.filter((value) => i === value).length > 0)} carrosSelecionados={carrosSelecionados} carro={item} addCarro={addCarro} removeCarro={removeCarro} />
                )
              } 
            </div>
        )
    
}

export default ExibeCarros;
    