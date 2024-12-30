import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from '../views/Landing';
import { NotFound } from "../views/NotFound";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ListaLibros } from "../views/ListaLibros";
import { DetalleLibro } from "../views/DetalleLibro";
import { DetalleCarrito } from "../views/DetalleCarrito";

function GlobalRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/libros" element={<Layout><ListaLibros></ListaLibros></Layout>} />
                <Route path="/detalle/:idLibro" element={<Layout><DetalleLibro></DetalleLibro></Layout>} />
                <Route path="/carrito" element={<Layout><DetalleCarrito></DetalleCarrito></Layout>} />
                <Route path="*" element={<Layout><NotFound></NotFound></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header></Header>
        {children}
        <Footer></Footer>
    </>
);

export default GlobalRouter;