<template>
    <section>
        <div>
            <!-- input search -->
            <form>
                <div class="flex m-2">
                    <select
                        v-model="searchFilter"
                        id="countries"
                        class="flex-shrink-0 z-10 inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                    >
                        <option value="" selected disabled>Elige filtro</option>
                        <option value="usuario">Nombre de Usuario</option>
                        <option value="email">Correo Electrónico</option>
                        <option value="rol">Rol</option>
                    </select>
                    <div class="relative w-full">
                        <input
                            v-model="inputSearch"
                            type="search"
                            id="search-dropdown"
                            class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                            placeholder="Buscar"
                            required
                        />
                        <button
                            @click.prevent="search"
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
                    <button
                        @click="showCreateModal()"
                        class="color_rose text-white font-bold py-2 px-4 rounded"
                    >
                        Crear
                    </button>
                </div>
            </form>
            <div
                v-if="showMessageError"
                class="m-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
            >
                <strong class="font-bold">Error! </strong>
                <span class="block sm:inline"
                    >Debes elegir un filtro para hacer la busqueda</span
                >
            </div>
            <!-- lista -->
            <div class="max-w-3xl mx-auto py-6">
                <div class="bg-white shadow overflow-hidden sm:rounded-md">
                    <ul class="divide-y divide-gray-200">
                        <li v-for="item in items" :key="item.id">
                            <div
                                class="flex items-center justify-between px-4 py-4 sm:px-6"
                            >
                                <div class="flex-1 truncate">
                                    <div
                                        class="text-sm leading-5 font-medium text-gray-900"
                                    >
                                        {{ item.usuario }} 
                                    </div>
                                    <div
                                        class="mt-1 flex items-center text-sm leading-5 text-gray-500"
                                    >
                                        <span class="truncate"
                                            >Rol del usuario:
                                            {{
                                                findTypeRol(item.rol)
                                            }}</span
                                        >
                                    </div>
                                    <div
                                        class="mt-1 flex items-center text-sm leading-5 text-gray-500"
                                    >
                                        <span
                                            >Correo Electrónico:
                                            {{ item.email }}</span
                                        >
                                    </div>
                                </div>
                                <div class="ml-2 flex-shrink-0">
                                    <button
                                        @click.prevent="showEditModal(item)"
                                        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Editar
                                    </button>
                                    <!-- <button
                                        @click.prevent="showModalDelete(item)"
                                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                                    >
                                        Eliminar
                                    </button> -->
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Modals -->
        <ModalUser  
            :item="this.currentItem"
            :typeRol="this.typeRol"
            :state="this.solicitud"
            @closeModal="closeModal('person')"
            v-if="showModalUser"
        />
    </section>
</template>

<script>
import axios from "axios";
import ModalUser from "./Modals/ModalUser.vue";

export default {
    components: { ModalUser, },
    name: "listUser",
    data() {
        return {
            items: [],
            originalItems: [],
            searchText: "",
            typeRol: [],
            showModalUser: false,
            currentItem: {},
            showDelete: false,
            searchFilter: "",
            inputSearch: "",
            showMessageError: false,
            showModalCreatePerson: false,
            solicitud:'',
        };
    },
    mounted: function () {
        this.getData();
        this.getTypeRol();
    },
    methods: {
        getData() {
            axios
                .get("http://localhost:3000/api/usuarios/all")
                .then((response) => {
                    console.log(response)
                    if (response.data) {
                        this.items = response.data;
                        this.originalItems = response.data;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getTypeRol() {
            axios
                .get("http://localhost:3000/api/roles/all")
                .then((response) => {
                    if (response.data) {
                        this.typeRol = response.data;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        findTypeRol(id) {
            let array = []
            for(let i in this.typeRol){
                array.push(this.typeRol[i])
            }
            let result = array.filter(
                (e) => e.idRoles == id
            );
            return result ? result[0].roles : '';
        },
        // create - modal
        showCreateModal() {
            this.solicitud = 'create'
            this.showModalUser = true;
        },
        // edit - modal
        showEditModal(items) {
            this.solicitud = 'update'
            this.currentItem = items;
            this.showModalUser = true;
        },
        // showModalDelete(item){
        //     this.currentItem = item
        //     this.showDelete = true
        // },
        closeModal(modal) {
            if (modal == "person") {
                this.getData();
                this.showModalUser = false;
            }
            else if(modal == 'createPerson'){
                this.getData();
                this.showModalCreatePerson = false;
            }
            // else if(modal == 'delete') this.showDelete = false;
        },

        // deleteElement(){
        //     this.showDelete = false;
        //     const id = this.currentItem.id
        //     console.log(id)
        //     axios
        //         .post(
        //             "http://localhost:3000/api/persona/delete/" + id
        //         )
        //         .then((response) => {
        //             console.log(response);
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         });
        // }
        search() {
            if (this.searchFilter == "") {
                this.showMessageError = true;
            } else {
                this.showMessageError = false;
                if (this.inputSearch == "") this.items = this.originalItems;
                else {
                    this.items = [];
                    for (let i of this.originalItems) {
                        // verificar si el valor ingresado esta dentro de la cadena de nombres o apellidos
                        if (
                            this.searchFilter == "usuario" ||
                            this.searchFilter == "rol"
                        ) {
                            const regex = new RegExp(this.inputSearch, "i");
                            if (regex.test(i[this.searchFilter].toLowerCase())) {
                                this.items.push(i);
                            }
                        } else {
                            if (i[this.searchFilter] == this.inputSearch)
                                this.items.push(i);
                        }
                    }
                }
            }
        },
    },
};
</script>

<style>
.color_rose{
    background: #e11d48;
}
.color_rose:hover{
    background: #fb7185;
}
</style>