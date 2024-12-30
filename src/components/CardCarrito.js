import React from "react";
import '../styles/components/CardCarrito.css';

export const CardCarrito = ({id,titulo, autor, categoria, anio, idioma, precio, url}) => {

    return(
        <div className="carrito-container">
            <div className="row">
                <div className="col-3">
                    <img src={url} alt="" width="100"/>
                </div>
                <div className="col-6">
                    <h4>{titulo}</h4>
                    <label> <b>Autor:</b> {autor}</label>
                    <br />
                    <label> <b>Año:</b> {anio}</label>
                    <br />
                    <label> <b>Cantidad:</b> 1</label>
                </div>
                <div className="col-3">
                    <h5>USD ${precio}</h5>
                </div>
            </div>
            <hr/>
        </div>
    );
}