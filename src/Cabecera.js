import React, { useState, useEffect } from "react";

const Imagenes = [
    "img/ban1.jpg",
    "img/ban2.jpg",
    "img/ban3.jpg",
    "img/ban4.jpg",
    "img/ban5.jpg"
]

const Cabecera = () => {
    //Definimos los estados iniciales y las funciones para actualizar los estados utilizando el hook useState
    const [titulo, setTitulo] = useState('')
    const [imgcab, setImgcab] = useState('/img/ban1.jpg')

    useEffect(() => {
        const Intervalo = setInterval(() => {
            const RandomIndex = Math.floor(Math.random() * Imagenes.length)
            setTitulo('Tradiciones')
            setImgcab(Imagenes[RandomIndex])
        }, 1000)

        //Limpiar el intevalo cuando el componente se desmonta para evitar problemas de memoria
        return () => clearInterval(Intervalo)
    }, []) //El segundo argumento de useEffect ([]) se utiliza para asegurarse que la suscripción se configure solo una vez durante la inicialización}

    return(
        <div className="bloque">
            <h1 className="h1cab">{titulo}</h1>
            <img className="imgcab" src={imgcab} alt="Cabecera"/>
        </div>
    )
}

export default Cabecera
