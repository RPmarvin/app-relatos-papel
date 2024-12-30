import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../styles/components/CardLibro.css'
import { CarritoContext } from "../context/CarritoContext";

export const CardLibro = ({id,titulo, autor, categoria, anio, idioma, precio, url}) =>{
    const { agregarAlCarrito } = useContext(CarritoContext);
    const libro = { id, titulo, autor, categoria, anio, idioma, precio, url };
    const handleAgregarAlCarrito = () => {
        agregarAlCarrito(libro);
    };

    return (
        <div className="card-container">
            <div className="img-container">
                <img src={url} alt=""/>
            </div>
            <div className="datelle-container">
                <label>{titulo}</label>
                <label>{autor}</label>
                <label>${precio}</label>
            </div>
            <div className="boton-contaniner">
                <button className="boton-principal" onClick={handleAgregarAlCarrito}>
                    Agregar al carrito
                </button>
                <br/>
                <Link to={`/detalle/${id}`}>
                    <button className="boton-principal">Ver detalle</button>
                </Link>
            </div>
        </div>
    );
}