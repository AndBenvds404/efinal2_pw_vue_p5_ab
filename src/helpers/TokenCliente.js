import axios  from 'axios'


async function generarToken(usuario){

    console.log(usuario);
    const tokenNuevo = axios.post("http://localhost:8082/API/v1.0/seguridad/autorizaciones/jwt",usuario).then(r=>r.data)
    console.log(tokenNuevo)
    return tokenNuevo;
}

export{
    generarToken,
    
}