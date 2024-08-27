import React from "react";

//Arreglo con los nombres de las imágenes
const ImgRedes = [
    "/img/twitter.jpg",
    "/img/face.jpg",
    "/img/instagram.jpg"
]

//Arreglo con las opciones del pie
const ListaOpciones = [
    {texto: 'Index', ruta: '#!'},
    {texto: 'Tradiciones', ruta: '#!'},
    {texto: 'Costumbres', ruta: '#!'},
    {texto: 'Platos típicos', ruta: '#!'},
    {texto: 'Restaurantes', ruta: '#!'},
    {texto: 'Museos y parques', ruta: '#!'},
    {texto: 'Calendario', ruta: '#!'},
    {texto: 'Contáctenos', ruta: '#!'}
]

const Pie = () => {
    const handleMouseEnter = (e) => {
        e.target.style.transform = 'rotate(180deg)'
        e.target.style.transition = 'all 1s'
    }

    const handleMouseLeave = (e) => {
        e.target.style.transform = 'rotate(0)'
        e.target.style.transition = 'all 1s'
    }

    const RedesSociales = ImgRedes.map((ruta, index) => (
        <img
            key={index}
            className="img-rs"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            alt={`Red social ${index}`}
            src={ruta}
        />
    ))

    //Mapeo de las opciones de pie
    const OpcionesPie = ListaOpciones.map((opcion, index) => (
        <li
            key={index}
            className="li-footer"
        >
            <a href={opcion.ruta}>{opcion.texto}</a>
        </li>
    ))

    return(
        <div>
            <nav className="div-footer">
                <ul>{OpcionesPie}</ul>
            </nav>
            <div className="div-footer">
                <h3>Síguenos en: </h3>
                {RedesSociales}
            </div>
        </div>
    )
}

export default Pie