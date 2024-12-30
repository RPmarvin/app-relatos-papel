import React, { useState } from "react";

export const CarritoContext = React.createContext();

export const CarritoProvider = ({ children }) => {
    const [listaLibros, setListaLibros] = useState([]);
  
    const agregarAlCarrito = (libro) => {
        setListaLibros((prevLibros) => {
            return [...prevLibros, libro];
          });
    };

    const vaciarCarrito = () => {
      setListaLibros([]);
    };
  
    return (
      <CarritoContext.Provider value={{ listaLibros, agregarAlCarrito, vaciarCarrito }}>
        {children}
      </CarritoContext.Provider>
    );
};