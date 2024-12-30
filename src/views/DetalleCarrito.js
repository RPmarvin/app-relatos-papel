import React, { useContext } from "react";
import '../styles/views/DetalleCarrito.css';
import { CardCarrito } from "../components/CardCarrito";
import { TotalPagar } from "../components/TotalPagar";
import { CarritoContext } from "../context/CarritoContext";

export const DetalleCarrito = () => {

    const { listaLibros } = useContext(CarritoContext);
    
    return (
        <div className="detalle-carrito-container">
            <div className="row">
                <div className="col-9 cuerpo-carrito-container">
                    <div className="row">
                        <div className="col-6"><h4>Carrito</h4></div>
                        <div className="col-6"><h6>Precio</h6></div>
                    </div>
                        {listaLibros.map((libro,index) => (
                            <CardCarrito 
                            key = {index}
                            id = {libro.id}
                            titulo = {libro.titulo}
                            autor = {libro.autor}
                            categoria = {libro.categoria}
                            anio = {libro.anio}
                            idioma = {libro.idioma}
                            precio = {libro.precio}
                            url = {libro.url}
                            />
                        ))}
                    <div className="row">
                        <div className="col-12 subtotal-container">
                            <h5>Subtotal (2 productos): <b>USD $50.10</b></h5>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <TotalPagar></TotalPagar>
                </div>
            </div>
        </div>
    );
}
