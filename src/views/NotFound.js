import React from "react";
import '../styles/views/NotFound.css';
import imgNotFound from '../img/404.png';

export const NotFound = () => {
    return (
        <div className="not-found-container">
            <img src={imgNotFound} alt="404" />
            <br></br>
            <label>Página no encontrado</label>
        </div>
    );
}
