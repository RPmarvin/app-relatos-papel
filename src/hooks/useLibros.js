import { useEffect, useState } from "react";

export const useLibros = () => {
    const [libros, setLibros] = useState([]);

    useEffect(()=>{
        setTimeout(()=>{
            setLibros([
                {id:1, titulo:"Samurái. El libro definitivo", autor:"Miyamoto Musashi", categoria:"Clásicos", anio:1899, idioma:"Español", precio:30.00, url:"https://quelibroleo.com/images/libros/libro-1715007502.jpg"},
                {id:2, titulo:"El enigma de la gruta", autor:"Hidalgo Preciado, Fran", categoria:"Ficción", anio:2024, idioma:"Español", precio:25.00, url:"https://quelibroleo.com/images/libros/libro-1734615515.png"},
                {id:3, titulo:"100 Poemas Waka", autor:"Sadaie, Fujiwara", categoria:"Poesía", anio:2024, idioma:"Español", precio:20.00, url:"https://quelibroleo.com/images/libros/libro-1727169874.jpg"},
                {id:4, titulo:"Lo que ya no vuelve", autor:"Campos, Inmaculada", categoria:"Narrativa", anio:2024, idioma:"Español", precio:35.00, url:"https://quelibroleo.com/images/libros/libro-1734200779.jpeg"},
                {id:5, titulo:"Los dos amores de mi vida", autor:"Reid, Taylor Jenkins", categoria:"Romantica", anio:2022, idioma:"Español", precio:30.00, url:"https://quelibroleo.com/images/libros/libro-1733742710.jpg"},
                {id:6, titulo:"Los asecinatos de la casa decagonal", autor:"Ayatsuji, Yukito", categoria:"Intriga", anio:2022, idioma:"Español", precio:45.00, url:"https://quelibroleo.com/images/libros/libro-1731671706.png"},
                {id:7, titulo:"La isla de la mujer dormida", autor:"Perez Reverte, Arturo", categoria:"Aventura", anio:2020, idioma:"Español", precio:35.00, url:"https://quelibroleo.com/images/libros/libro-1721644236.jpg"},
                {id:8, titulo:"Rompecabezas", autor:"Kwon, Jiye", categoria:"Narrativa", anio:2018, idioma:"Español", precio:40.00, url:"https://quelibroleo.com/images/libros/libro-1731671610.png"},
                {id:9, titulo:"Bestias de una pequeña tierra", autor:"Kim, Juhea", categoria:"Aventuras", anio:2022, idioma:"Español", precio:45.00, url:"https://quelibroleo.com/images/libros/libro-1667833975.png"},
                {id:10, titulo:"La clase de Griego", autor:"Kang, han", categoria:"Narrativa", anio:2023, idioma:"Español", precio:25.00, url:"https://quelibroleo.com/images/libros/libro-1689841897.jpg"},
                {id:11, titulo:"El Clan", autor:"Mola, Carmen", categoria:"Intriga", anio:2021, idioma:"Español", precio:50.00, url:"https://quelibroleo.com/images/libros/libro-1719324364.jpg"},
                {id:12, titulo:"Victoria", autor:"Sánchez Garnica, Paloma", categoria:"Narrativa", anio:2024, idioma:"Español", precio:35.00, url:"https://quelibroleo.com/images/libros/libro-1729671923.jpg"},
                {id:13, titulo:"Los milagros de Namiya", autor:"Higashino, Keigo", categoria:"Ficcion", anio:2024, idioma:"Español", precio:40.00, url:"https://quelibroleo.com/images/libros/libro-1705938200.png"},
                {id:14, titulo:"La ciudad y los perros", autor:"Vargas Llosa, Mario", categoria:"Narrativa", anio:1962, idioma:"Español", precio:30.00, url:"https://quelibroleo.com/images/libros/libro_1338219605.jpg"},
                {id:14, titulo:"Ficciones", autor:"Borges, Jorge Luis", categoria:"Ficcion", anio:2006, idioma:"Español", precio:45.00, url:"https://quelibroleo.com/images/libros/libro_1362275865.jpg"}
            ]);
        },0);
    }, []);

    return libros;
}

export default useLibros;