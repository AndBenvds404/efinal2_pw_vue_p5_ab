import axios  from 'axios'


async function listarEstudiantes(token){
    const head={
        "Authorization":"Bearer "+token
    }
    const listaEstu = axios.get("http://localhost:8081/API/1.0/Matricula/estudiantes",{headers:head}).then(r=>r.data)
    console.log(listaEstu)
    return listaEstu
}

async function ingresarEstudiante(estudianteobj, token){
    console.log(token);
    console.log(estudianteobj);
    const head ={
        "Authorization":"Bearer "+token
    
    }

    axios.post("http://localhost:8081/API/1.0/Matricula/estudiantes", estudianteobj,{headers:head}).then(r=>r.data)

}



export{
    listarEstudiantes,
    ingresarEstudiante,
    //obtenerEstudiantePorId

}