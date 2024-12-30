import React from "react";
import '../styles/views/Landing.css';
import loading from '../img/loading2.webm';
import useRedireccion from "../hooks/useRedireccion";

function Landing (){
    useRedireccion("/libros",5000);
    return (
        <div className="loading">
            <video className="gif" autoPlay loop muted>
                <source src={loading} type="video/webm" />
                Tu navegador no soporta el formato de video.
            </video>
            <h4>Página cargando...</h4>
        </div>
    );
}

export default Landing;
