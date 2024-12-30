import React from "react";
import '../styles/views/ListaLibros.css';
import {CardLibro} from '../components/CardLibro'
import { BarraBusqueda } from "../components/BarraBusqueda";
import useLibros from '../hooks/useLibros';

export const ListaLibros = () => {
    
    const libros = useLibros();
    
    return(
        <div className="libros-container">
            <BarraBusqueda></BarraBusqueda>
            <div className="row">
            {
                libros.length > 0 ? (
                    libros.map((libro, index)=>(
                        <CardLibro
                            key = {index}
                            id = {libro.id}
                            titulo = {libro.titulo}
                            autor = {libro.autor}
                            categoria = {libro.categoria}
                            anio = {libro.anio}
                            idioma = {libro.idioma}
                            precio = {libro.precio}
                            url = {libro.url}
                        >
                        </CardLibro>
                    ))
                ):(
                    <div>cargando...</div>
                )
            }
            </div>
        </div>
    );
}
