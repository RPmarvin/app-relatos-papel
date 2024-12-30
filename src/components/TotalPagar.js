import React, { useContext } from "react";
import '../styles/components/TotalPagar.css';
import { CarritoContext } from "../context/CarritoContext";
import { useNavigate } from "react-router-dom";

export const TotalPagar = () => {
    const navigate = useNavigate();
    const { listaLibros, vaciarCarrito } = useContext(CarritoContext);

    const subtotal = listaLibros.reduce((total, libro) => total + libro.precio, 0).toFixed(2);

    const handlePagar = () => {
        vaciarCarrito(); 
        alert("¡Gracias por tu compra! El carrito ha sido vaciado.");
        setTimeout(() => {
            navigate("/libros");
        }, 0);
    };

    return (
        <div className="total-pagar-container">
            <h5>
                Subtotal ({listaLibros.length} productos): 
                <br/>
                <b>USD ${subtotal}</b>
            </h5>
            <br/>
            <button className="boton-principal" onClick={handlePagar}>Pagar</button>
        </div>
    );
}