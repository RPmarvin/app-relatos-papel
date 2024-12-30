import React from "react";
import '../styles/components/Footer.css'

export const Footer = () =>{

    return (
        <div className="footer-contaniner">
            <div className="row">
                <div className="col-6">
                    <label>&copy; 2024 Relatos de papel</label>
                </div>
                <div className="col-6 footer-end">
                    <label>Todos los derechos reservados (UNIR)</label>
                </div>
            </div>
        </div>
    );
}