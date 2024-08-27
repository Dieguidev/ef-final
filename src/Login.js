import React, { useState } from "react";
import FormularioRegistro from "./FormularioRegistro";

const usuarios = [
    { nombreUsuario: 'usuario1', contrasena: 'contraseña1' },
    { nombreUsuario: 'usuario2', contrasena: 'contraseña2' },
    { nombreUsuario: 'usuario3', contrasena: 'contraseña3' },
    { nombreUsuario: 'usuario4', contrasena: 'contraseña4' },
    { nombreUsuario: 'usuario5', contrasena: 'contraseña5' }
]
let intento = 0;
const Login = () => {
    const [nombreUsuario, setNombreUsuario] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [mostrarRegistro, setMostrarRegistro] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        const usuarioEncontrado = usuarios.find(
            (usuario) => usuario.nombreUsuario === nombreUsuario && usuario.contrasena === contrasena
        )

        if (usuarioEncontrado) {
            alert(`¡Hola ${usuarioEncontrado.nombreUsuario}, bienvenido!`)
        } else {
            intento++
            if (intento > 1) {
                
                alert('El usuario y/o contraseña no existe, por favor completa el formulario de registro')
                setMostrarRegistro(true)
            } else {
                alert('fuiste vnegas ya cagaste la data!')
                console.log(intento);
                
            }
        }
    }

    return (
        <div className="container">
            {!mostrarRegistro ? (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="iusuario">Nombre de usuario</label>
                        <input
                            type="text"
                            className="form-control"
                            id="iusuario"
                            name="nombreUsuario"
                            placeholder="Ingrese nombre de usuario"
                            value={nombreUsuario}
                            onChange={(e) => setNombreUsuario(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ipassword">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="ipassword"
                            name="contraseña"
                            placeholder="Ingrese contraseña"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Ingresar</button>
                </form>
            ) : (
                <FormularioRegistro />
            )}
        </div>
    )
}

export default Login