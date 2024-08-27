import React, { useEffect, useState } from "react";

const FechaHora = () => {
    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState(null)

    useEffect(() => {
        const actualizarFechaHora = () => {
            const f = new Date()
            const nuevaFecha = `${f.getDate()}/${f.getMonth() + 1}/${f.getFullYear()}`
            const nuevaHora = `${f.getHours()} : 
                                ${f.getMinutes() < 10 ? "0" : ""}${f.getMinutes()} : ${f.getSeconds() < 10 ? "0" : ""}${f.getSeconds()}`

            setFecha(nuevaFecha)
            setHora(nuevaHora)
        }

        const Intervalo = setInterval(actualizarFechaHora, 1000)

        return () => clearInterval(Intervalo)
    }, [])
    return (
        <section>
            <article className="div-fecha">
                {fecha}
            </article>
            <article className="div-fecha">
                {hora}
            </article>
        </section>
    )
}
export default FechaHora