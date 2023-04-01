<template>
    <div
        class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
    >
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Iniciar sesión en su cuenta
            </h2>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form @submit.prevent="login" class="space-y-6">
                    <div>
                        <label
                            for="user"
                            class="block text-sm font-medium text-gray-700"
                        >
                            Usuario
                        </label>
                        <div class="mt-1">
                            <input
                                id="user"
                                name="user"
                                type="text"
                                v-model="user"
                                autocomplete="user"
                                required
                                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            for="password"
                            class="block text-sm font-medium text-gray-700"
                        >
                            Contraseña
                        </label>
                        <div class="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                v-model="password"
                                autocomplete="current-password"
                                required
                                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div class="flex intems-ceter justify-end">
                        <div class="text-sm">
                            <a
                                href="#"
                                class="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Registrarse
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Iniciar sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
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
            axios
                .get(
                    "http://localhost:3000/api/usuarios/login/" +
                        this.user +
                        "/" +
                        this.password
                )
                .then((response) => {
                    if (response.data) {
                        console.log(response.data);
                        localStorage.setItem(
                            "token",
                            response.data.idUsuarios + "-" + response.data.rol
                        );
                        this.$router.push("/home");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>

<style>
</style>