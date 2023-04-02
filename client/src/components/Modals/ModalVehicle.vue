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
                                for="arrendatario"
                                class="block font-medium text-gray-700"
                                >Arrendatario</label
                            >
                            <select
                                v-model="arrendatario"
                                id="arrendatario"
                                name="arrendatario"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            >
                                <option
                                    v-for="item in listPerson"
                                    :key="item.id"
                                    :value="item.id"
                                >
                                    {{ item.nombres }} {{ item.apellidos }}
                                </option>
                            </select>
                        </div>
                        <div class="my-3">
                            <label
                                for="placa"
                                class="block font-medium text-gray-700"
                                >Placa</label
                            >
                            <input
                                v-model="placa"
                                type="text"
                                name="placa"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            />
                        </div>
                        <div class="my-3">
                            <label
                                for="marca"
                                class="block font-medium text-gray-700"
                                >Marca</label
                            >
                            <input
                                v-model="marca"
                                type="text"
                                name="marca"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            />
                        </div>
                        <div class="my-3">
                            <label
                                for="modelo"
                                class="block font-medium text-gray-700"
                                >Modelo</label
                            >
                            <input
                                v-model="modelo"
                                type="text"
                                name="modelo"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            />
                        </div>
                        <div class="my-3">
                            <label
                                for="direccion"
                                class="block font-medium text-gray-700"
                                >Direccion de ubicacion</label
                            >
                            <input
                                v-model="direccionUbicacion"
                                type="text"
                                name="direccion"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            />
                        </div>
                        <div class="my-3">
                            <label
                                for="color"
                                class="block font-medium text-gray-700"
                                >Color del vehiculo</label
                            > 
                            <input
                                v-model="color"
                                type="text"
                                name="color"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            />
                        </div>
                        <div class="my-3">
                            <label
                                for="año"
                                class="block font-medium text-gray-700"
                                >Año de fabricación del vehiculo</label
                            >
                            <input
                                v-model="año"
                                type="number"
                                name="año"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            />
                        </div>
                        <div class="my-3">
                            <label
                                for="ciudad"
                                class="block font-medium text-gray-700"
                                >Ciudad</label
                            >
                            <input
                                v-model="ciudad"
                                type="text"
                                name="ciudad"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            />
                        </div>
                        <div class="my-3">
                            <label
                                for="fechaRegistro"
                                class="block font-medium text-gray-700"
                                >Fecha de Registro</label
                            >
                            <input
                                v-model="fechaRegistro"
                                type="date"
                                name="fechaRegistro"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            />
                        </div>
                        <div class="my-3">
                            <label
                                for="observaciones"
                                class="block font-medium text-gray-700"
                                >Observaciones</label
                            >
                            <input
                                v-model="observaciones"
                                type="text"
                                name="observaciones"
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
        listPerson: {
            type: Array,
        },
        state:{
            type: String
        }
    },
    data() {
        return {
            id: "",
            placa: "",
            marca: "",
            modelo: "",
            año: "",
            color: "",
            arrendatario: "",
            observaciones: "",
            fechaRegistro: "",
            direccionUbicacion: "",
            ciudad: "",
            showCheck: false,
            messageError: '',
            showError: false,
        };
    },
    mounted: function () {
        if(this.state == 'update'){
            this.importData();
        }
    },
    methods: {
        importData() {
            this.id = this.item.idVehiculo;
            this.placa = this.item.placa;
            this.marca = this.item.marca;
            this.modelo = this.item.modelo;
            this.año = this.item.año;
            this.color = this.item.color;
            this.arrendatario = this.item.arrendatario;
            this.observaciones = this.item.observaciones;

            const fecha = this.item.fechaRegistro.split("T")[0]

            this.fechaRegistro = fecha;
            this.direccionUbicacion = this.item.direccionUbicacion
            this.ciudad = this.item.ciudad
        },
        updateDataServer() {
            let data = {
                placa: this.placa,
                marca: this.marca,
                modelo: this.modelo,
                año: this.año,
                color: this.color,
                arrendatario: this.arrendatario,
                email: this.email,
                observaciones: this.observaciones,
                fechaRegistro: this.fechaRegistro,
                direccionUbicacion: this.direccionUbicacion,
                ciudad: this.ciudad
            };
            for(let item in data){
                if(data[item] == '') {
                    if(item != 'arrendatario' || item != 'observaciones'){
                        this.messageError = "No puede haber campos vacios"
                        this.showError = true;
                        return 1
                    }
                }
            }
            if(this.state == 'update'){
                data.idVehiculo = this.id
            }
            axios
                .post(
                    "http://localhost:3000/api/vehiculo/save",
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
                    this.messageError = "algo salio mal"
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