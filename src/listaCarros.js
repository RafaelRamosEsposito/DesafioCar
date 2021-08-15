import React from 'react'

let ListaCarros = props => {
    const { listaCarros, removeCarro } = props

    return (
        <div className="listaSelecao">
            <div className={((listaCarros.length !== 0 ? "container" : "container backgroundCar"))}>
                {
                    listaCarros.map((item, i) => 
                        <div key={i} className="box blue">
                            <div className="box box-title blue">
                                <p>{item.nome}</p>                
                                <button type="button" onClick={() => { 
                                        removeCarro(item.id);
                                }}>                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/></svg>
                                </button>            
                            </div>
                            <div className="box box-body blue">
                                <p><label>Tipo: </label><span>{item.tipo}</span></p>
                                <p><label>Preço: </label><span>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2}).format(item.preco)}</span></p>                                
                            </div>  
                        </div>                            
                        
                    )
                }                
                <h5 style={{ "display": (listaCarros.length !== 0 ? "none" : "") }}>Arraste seus carro preferidos aqui :)</h5>
            </div>                        
            <label>Valor Total: </label><span>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2}).format(listaCarros.reduce((total, item) => total = total + item.preco, 0))}</span>            
        </div>        
    )
}

export default ListaCarros;