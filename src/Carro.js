import React from 'react'

let Carro = props => {
    const { clicado, carro, addCarro, removeCarro, id } = props
    
    let displayButton = (addButton) => {
        if ((addButton && clicado) || (!addButton && !clicado)) {
            return { display: "none" };
        }
    }
    
    return (
        <div className="box" style={{opacity: ( clicado ? "50%" : "100%" )}}>
            <div className="box box-title">
                <p>{carro.nome}</p>
                <button type="button" onClick={() => { 
                    if (clicado) {
                        removeCarro(id);
                    } else {
                        addCarro(id);
                    }
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" {...displayButton(true)} viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" {...displayButton(false)} viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/></svg>
                </button>
            </div>
            <div className="box box-body">
                <p><label>Montadora: </label><span>{carro.montadora}</span></p>
                <p><label>Preço: </label><span>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2}).format(carro.preco)}</span></p>
                <p><label>Tipo: </label><span>{carro.tipo}</span></p>                           
            </div>                                        
        </div>
    )    
}

export default Carro;
