<template>
  <EstudianteFormulario @get-estudiante="obtenerEstudiante"></EstudianteFormulario>
  <br>
  
  <EstudianteTabla :estudiantes="listaEstudianteCRUD" :token="tokenSecreat"></EstudianteTabla>
</template>

<script>
import EstudianteFormulario from '../components/EstudianteFormulario.vue'
import EstudianteTabla from '../components/EstudianteTabla.vue'
import {listarEstudiantes} from "../helpers/EstdianteCliente"

export default {
    components:{
        EstudianteFormulario,
        EstudianteTabla
    },
    data(){
      return{
        listaEstudianteComponente:[],
        listaEstudianteCRUD:[],
        tokenSecreat:null
      }

    },

    methods:{
        async obtenerEstudiante(token){

          console.log(token + " :   token")
            this.tokenSecreat = token
            const listaEstus = await listarEstudiantes(token);
            this.listaEstudianteCRUD =   listaEstus;
            console.log(this.listaEstudianteCRUD);
            


        

      }
    }

}
</script>

<style>


</style>