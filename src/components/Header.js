import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../styles/components/Header.css'
import carrito from'../img/carrito.png';
import { CarritoContext } from "../context/CarritoContext";

export const Header = () => {
    
    const { listaLibros } = useContext(CarritoContext);

    return (
        <header className="header-contaniner">
            <div className="row">
                <div className="col-4">
                    <Link to={`/libros`} className="nombre-web">
                        <h4>Relatos de papel</h4>
                    </Link>
                </div>
                <div className="col-8">
                    <div className="header-items">
                        <div>Nosotros</div>
                        <div>Contactenos</div>
                        <div className="car-container">
                            <Link to={`/carrito`}>
                                <img className="car-img" src={carrito} alt=""/>
                            </Link>
                            <label>{listaLibros.length}</label>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}