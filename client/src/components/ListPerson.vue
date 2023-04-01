<template>
    <section>
        <div>
            <!-- input search -->
            <form>
                <div class="flex m-2">
                    <select
                        id="countries"
                        class="flex-shrink-0 z-10 inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                    >
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <div class="relative w-full">
                        <input
                            type="search"
                            id="search-dropdown"
                            class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                            placeholder="Buscar"
                            required
                        />
                        <button
                            type="submit"
                            class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <svg
                                aria-hidden="true"
                                class="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                            <span class="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>
            <div class="max-w-3xl mx-auto py-6">
                <div class="bg-white shadow overflow-hidden sm:rounded-md">
                    <ul class="divide-y divide-gray-200">
                        <li v-for="item in items"
                :key="item.id">
                            <div
                                class="flex items-center justify-between px-4 py-4 sm:px-6"
                            >
                                <div class="flex-1 truncate">
                                    <div
                                        class="text-sm leading-5 font-medium text-gray-900"
                                    >
                                        {{ item.nombres }} {{ item.apellidos }}
                                    </div>
                                    <div class="mt-1 flex items-center text-sm leading-5 text-gray-500">
                                        <span class="truncate"
                                            >Tipo Documento: {{ findTypeDoc(item.tipoDocumento) }}</span>
                                    </div>
                                    <div class="mt-1 flex items-center text-sm leading-5 text-gray-500">
                                        <span class="truncate">Documento: {{ item.documento }}</span>
                                    </div>
                                    <div class="mt-1 flex items-center text-sm leading-5 text-gray-500">
                                        <span>Correo Electronico: {{ item.email }}</span>
                                    </div>
                                    <div class="mt-1 flex items-center text-sm leading-5 text-gray-500">
                                        <span class="truncate">Dirección: {{ item.direccion }}</span>
                                    </div>
                                    <div class="mt-1 flex items-center text-sm leading-5 text-gray-500">
                                        <span class="truncate">Telefono: {{ item.telefono }}</span>
                                    </div>
                                </div>
                                <div class="ml-2 flex-shrink-0">
                                    <button
                                        @click.prevent="showEditModal(item)"
                                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <modal-edit-person :item="this.currentItem" :typeDocument="this.typeDocument" @closeModal="closeModal" v-if="showModalPerson"/>
    </section>
</template>

<script>
import axios from "axios";
import modalEditPerson from './Modals/modalEditPerson.vue';

export default {
    components: { modalEditPerson },
    name: "listPerson",
    data() {
        return {
            items: [],
            searchText: "",
            typeDocument: "",
            showModalPerson: false,
            currentItem: {}
        };
    },
    mounted: function () {
        this.getData();
        this.getTypeDocument();
    },
    methods: {
        getData() {
            axios
                .get("http://localhost:3000/api/persona/all")
                .then((response) => {
                    if (response.data) {
                        this.items = response.data;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getTypeDocument() {
            axios
                .get("http://localhost:3000/api/tipoDocumento/all")
                .then((response) => {
                    if (response.data) {
                        this.typeDocument = response.data;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        findTypeDoc(id) {
            let array = [...this.typeDocument].filter((e) => e.idDocumento == id)
            return array[0].documento
            
        },
        // create - modal
        showCreateModal() {
            this.showModalPerson = true;
        },
        // edit - modal
        showEditModal(items){
            this.currentItem = items
            this.showModalPerson = true
        },
        closeModal() {
            this.showModalPerson = false;
        },
    },
};
</script>

<style>
</style>