import React, {useState} from "react";

const ItemsData = [
    {name: 'Index', link: '/'},
    {name: 'Tradiciones', link: '/'},
    {name: 'Gastronomía', link: '/'},
    {name: 'Plato bandera', link: '/'},
    {name: 'Contáctenos', link: '/'},
    {name: 'Google', link: 'https://www.google.com.pe'}
]


 export const Menu = () => {
    const [items, setItems] = useState([])

    //Creamos los elementos del menú a partir del arreglo.
    useState(() => {
        const menuItems = ItemsData.map((item, index) => (
            <a
                key={index}
                href={item.link}
                className="item"
                target="_blank"
                rel="noreferrer"
            >
                {item.name}
            </a>
        ))
        setItems(menuItems)
    }, [])



    return(
        <nav className="bloque">
            {items}
        </nav>
    )
}

