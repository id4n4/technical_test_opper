<template>
    <form @submit.prevent="login">
        <label>
            Usuario:
            <input type="text" v-model="user" required />
        </label>
        <label>
            Contraseña:
            <input type="password" v-model="password" required />
        </label>
        <button type="submit">Iniciar sesión</button>
    </form>
</template>

<script>
import axios from 'axios'
export default {
    name: "login",
    data() {
        return {
            user: "",
            password: "",
        };
    },
    methods: {
        login() {
            axios.get('http://localhost:3000/api/usuarios/login/' + this.user + "/" + this.password)
                .then(response => {
                    if(response.data){
                        console.log(response.data);
                        localStorage.setItem("token", response.data.idUsuarios + '-' + response.data.rol);
                        this.$router.push("/home");
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        },
    },
};
</script>

<style>
</style>