<template>
  <div>
        <h1>Token</h1>
        <p >semilla</p>
        <input v-model="usuario.semilla" type="text">

        <p>tiempo de vigencia</p>
        <input v-model="usuario.tiempo" type="text">
        <br>
        <input class="token" v-model="token" type="text">
<br>
        <button @click="generar">Generar</button>
  </div>
</template>

<script>
import {generarToken} from '../helpers/TokenCliente'
export default {

    
    data(){
        return{
            usuario:{
                nombre:"admin",
                password:"asd123",
                semilla:"",
                tiempo:""
            },
            token:""
                       

        }

    },
    
    methods:{
        async generar(){
            const usua = this.usuario
            console.log(usua);
            
            const tokenActivo =  await generarToken(usua);
            console.log(tokenActivo);
            this.token = tokenActivo;

             
        }

    },
}
</script>

<style scoped>

input{
    width: 280px;
    height: 70px;
    margin-bottom: 20px;
    border-radius: 17px;
    font-size: 27px;

}

.token{
    height: 120px;
}

div{
    font-size: 27px;
    color: rgb(19, 202, 202);
}

button{
    padding: 10px;
    border-radius: 17px;
}
</style >