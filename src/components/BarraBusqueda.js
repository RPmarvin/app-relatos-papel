import React from "react";
import '../styles/components/BarraBusqueda.css';

export const BarraBusqueda = () => {

    return (
        <div className="busqueda-container">
            <div className="row">
                <div className="col-s-6 col-md-3">
                    <label>Titulo:</label>
                    <input type="text" />
                </div>
                <div className="col-s-6 col-md-3">
                    <label>Autor:</label>
                    <input type="text" />
                </div>
                <div className="col-s-6 col-md-3">
                    <label>Categoria:</label>
                    <input type="text" />
                </div>
                <div className="col-s-6 col-md-3 btn-buscar-container">
                    <button>Buscar</button>
                </div>
            </div>
        </div>
    );
}