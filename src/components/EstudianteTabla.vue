<template>
        <div class="contain">
      
            

            <div class="estudiante-tabla-crud">
                <h1>Tabla Datos</h1>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Cedula</th>
                    
                    </tr>
                    <tr v-for="estudiante in estudiantes" :key="estudiante.id">
                        <td>{{ estudiante.id}}</td>
                        <td>{{ estudiante.nombre }}</td>
                        <td>{{ estudiante.apellido }}</td>
                        <td>{{ estudiante.cedula }}</td>
                        
                    </tr>
                </table>


            </div>
            <br>
                


        </div>
</template>

<script>

//import {obtenerEstudiantePorId} from "../helpers/EstdianteCliente.js"
export default {
    data(){
        return{
         
        }
    },
    methods:{
        
        
    },

    props:{
        estudiantes:[],
        token:{
            require:true
        }
    },  

    mounted(){
        
    }

}
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  color:aqua
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.contain{
    display: grid;
    align-items: center;
    justify-content: center;

}

.estudiante-tabla-crud{
    width: 50vw;
    font-size: 2vmin;
    
    border-radius: 17px;
    box-shadow:2px 2px 5px 5px grey;
}



</style>