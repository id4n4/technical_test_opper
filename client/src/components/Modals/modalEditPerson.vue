<template>
    <div class="fixed z-10 inset-0 overflow-y-auto">
        <div
            class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
            <!-- Fondo oscuro -->
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <!-- Contenido del modal -->
            <div
                class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <!-- Título del modal -->
                    <div class="sm:flex sm:items-center sm:justify-center">
                        <div
                            class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                        >
                            <h1
                                class="text-2xl leading-6 font-medium text-gray-900"
                            >
                                Actualización de datos
                            </h1>
                        </div>
                    </div>
                </div>

                <!-- Formulario -->
                <form class="space-y-4">
                    <div class="px-4">
                        <div class="my-3">
                            <label
                                for="tipoDocumento"
                                class="block font-medium text-gray-700"
                                >Tipo de documento de identidad:</label
                            >
                            <select
                                v-model="tipoDocumento"
                                id="tipoDocumento"
                                name="tipoDocumento"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            >
                                <option
                                    v-for="item in typeDocument"
                                    :key="item.idDocumento"
                                    :value="item.idDocumento"
                                >
                                    {{ item.documento }}
                                </option>
                            </select>
                        </div>
                        <div class="my-3">
                            <label
                                for="documento"
                                class="block font-medium text-gray-700"
                                >Número de documento</label
                            >
                            <input
                                v-model="documento"
                                type="number"
                                name="documento"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            />
                        </div>
                        <div class="my-3">
                            <label
                                for="name"
                                class="block font-medium text-gray-700"
                                >Nombres</label
                            >
                            <input
                                v-model="nombres"
                                type="text"
                                name="nombred"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            />
                        </div>
                        <div class="my-3">
                            <label
                                for="apellidos"
                                class="block font-medium text-gray-700"
                                >Apellidos</label
                            >
                            <input
                                v-model="apellidos"
                                type="text"
                                name="apellidos"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            />
                        </div>
                        <div class="my-3">
                            <label
                                for="direccion"
                                class="block font-medium text-gray-700"
                                >Direccion</label
                            >
                            <input
                                v-model="direccion"
                                type="text"
                                name="direccion"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            />
                        </div>
                        <div class="my-3">
                            <label
                                for="email"
                                class="block font-medium text-gray-700"
                                >Correo electrónico</label
                            >
                            <input
                                v-model="email"
                                type="email"
                                name="email"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            />
                        </div>
                        <div class="my-3">
                            <label
                                for="phone"
                                class="block font-medium text-gray-700"
                                >Teléfono</label
                            >
                            <input
                                v-model="telefono"
                                type="number"
                                name="phone"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            />
                        </div>
                    </div>

                    <!-- Error message -->
                    <div
                        v-if="showError"
                        class="m-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                        role="alert"
                    >
                        <strong class="font-bold">Error! </strong>
                        <span class="block sm:inline"
                            >{{this.messageError}}</span
                        >
                    </div>
                    <!-- Pie del modal -->
                    <div
                        class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex justify-end"
                    >
                        <button
                            type="submit"
                            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                            @click.prevent="updateDataServer"
                        >
                            Enviar
                        </button>
                        <button
                            type="button"
                            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                            @click.prevent="closeModal"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <modal-check-vue @closeModal="closeCheck" v-if="showCheck" />
    </div>
</template>

<script>
import axios from "axios";
import ModalCheckVue from "./ModalCheck.vue";

export default {
    components: {
        ModalCheckVue,
    },
    props: {
        item: {
            type: Object,
        },
        typeDocument: {
            type: Array,
        },
    },
    data() {
        return {
            id: "",
            tipoDocumento: "",
            documento: "",
            nombres: "",
            apellidos: "",
            direccion: "",
            email: "",
            telefono: "",
            showCheck: false,
            messageError: '',
            showError: false,
        };
    },
    mounted: function () {
        this.importData();
    },
    methods: {
        importData() {
            this.id = this.item.id;
            this.tipoDocumento = this.item.tipoDocumento;
            this.documento = this.item.documento;
            this.nombres = this.item.nombres;
            this.apellidos = this.item.apellidos;
            this.direccion = this.item.direccion;
            this.email = this.item.email;
            this.telefono = this.item.telefono;
        },
        updateDataServer() {
            const data = {
                id: this.id,
                tipoDocumento: this.tipoDocumento,
                documento: this.documento,
                nombres: this.nombres,
                apellidos: this.apellidos,
                direccion: this.direccion,
                telefono: this.telefono,
                email: this.email,
            };
            for(let item in data){
                if(data[item] == '') {
                    this.messageError = "No puede haber campos vacios"
                    this.showError = true;
                    return 1
                }
            }
            axios
                .post(
                    "http://localhost:3000/api/persona/save",
                    JSON.stringify(data),
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((response) => {
                    console.log(response.data);
                    this.showCheck = true;
                })
                .catch((error) => {
                    this.messageError = "Ya existe otra persona con el mismo tipo y número de documento"
                    this.showError = true;
                    console.log(error);
                });
        },
        closeModal() {
            this.$emit("closeModal");
        },
        closeCheck() {
            this.closeCheck = false;
            this.closeModal();
        },
    },
};
</script>

<style>
</style>