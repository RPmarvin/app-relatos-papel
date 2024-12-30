import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import '../styles/views/DetalleLibro.css';
import useLibros from "../hooks/useLibros";
import { CarritoContext } from "../context/CarritoContext";

export const DetalleLibro = () =>{
    const { idLibro } = useParams();    
    const libros = useLibros();    
    const libro = libros.find(r => r.id === parseInt(idLibro));
    
    const { agregarAlCarrito } = useContext(CarritoContext);
    const handleAgregarAlCarrito = () => {
        agregarAlCarrito(libro);
    };

    return (
        <div className="detalle-container">
            {
              libro !== undefined ? (
                <div>
                    <div className="row">
                        <div className="col-s-6 col-md-4">
                            <img className="portada" src={libro.url} alt="" />
                        </div>
                        <div className="col-s-6 col-8 detalle-texto-container">
                            <h2>{libro.titulo}</h2>
                            <br />
                            <label> <b>Autor:</b> {libro.autor}</label>
                            <br />
                            <label> <b>Categoria:</b> {libro.categoria}</label>
                            <br />
                            <label> <b>Año:</b> {libro.anio}</label>
                            <br />
                            <label> <b>Idioma:</b> {libro.idioma}</label>
                            <br />
                            <label> <b>Precio:</b> ${libro.precio}</label>
                            <br /><br/>
                            <button className="boton-principal" onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
                        </div>
                    </div>
                    <br /><br />
                    <div className="row resumen-container">
                        <h2>Resumen</h2>
                        <hr />
                        <div className="col-12">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                </div>
              ):(
                <div>Cargando..</div>
              )
            }
        </div>
    );
}
