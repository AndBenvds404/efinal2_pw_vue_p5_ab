<template>
    <div class="contain">
    <div class="formulario">

        <h2> ESTUDIANTE</h2>

        <div class="datos">
                
                <label for="">Token</label>
                <input v-model="token" type="text">
                
                <label for="">nombre</label>
                <input v-model="Estudiante.nombre"  type="text">

                <label for="">Apellido</label>
                <input v-model="Estudiante.apellido" type="text">

                <label for="">cedula</label>
                <input v-model="Estudiante.cedula" type="text">

        </div>
        

        <br>
        <div>
            <button @click="guardar"> guardar </button>
        </div>
        
    </div>
  </div>
</template>

<script>

import {ingresarEstudiante} from "../helpers/EstdianteCliente.js"

export default {


    data(){
        return{
            Estudiante:{
                nombre:"",
                apellido:"",
                cedula:"",
            },
            token:""
                       

        }

    },
    
    methods:{
        async guardar(){
            const tokenSecreat = this.token
            console.log(tokenSecreat);
            const objEstudiante =  {...this.Estudiante}
            
            await ingresarEstudiante(objEstudiante, tokenSecreat)
            this.$emit('get-estudiante', tokenSecreat)

             
        }

    },


}
</script>


 



<style scoped>
.contain{
    align-items: center;
    justify-content: center;
    display: flex;
}

.formulario{
    display: grid;
    padding: 17px;
    border: solid 1px black;
    font-size: 1.5vmin  ;
    border-radius: 17px;
    border: dashed black;
    
}

h2{
    font-size: 4vmin;
}

input, label {
    width: 100px;
}

.datos{
    display: grid;
    justify-content: center;
    
}
</style>