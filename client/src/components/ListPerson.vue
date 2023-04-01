<template>
    <section>
        <h1>{{ this.api }}</h1>
        <div>
            <input type="text" v-model="searchText" placeholder="Buscar" />
            <div
                class="container bg-info m-2"
                v-for="item in items"
                :key="item.id"
            >
                <h2>{{ item.nombres }} {{ item.apellidos }}</h2>
                <p>Tipo Documento: {{ findTypeDoc(item.tipoDocumento) }}</p>
                <p>Documento:  {{ item.documento }}</p>
                <p>Correo Electronico: {{ item.email }}</p> 
                <p>Dirección: {{item.direccion}}</p>
                <p>Telefono: {{item.telefono}}</p>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
export default {
    name: "listPerson",
    props: {
        api: {
            type: String,
        },
    },
    data() {
        return {
            items: [],
            searchText: "",
            typeDocument: ""
        };
    },
    mounted: function () {
        axios
            .get("http://localhost:3000" + this.api)
            .then((response) => {
                if (response.data) {
                    console.log(response.data);
                    this.items = response.data;
                }
            })
            .catch((error) => {
                console.log(error);
            });
        axios
            .get("http://localhost:3000/api/tipoDocumento/all")
            .then((response) => {
                if (response.data) {
                    console.log(response.data);
                    this.typeDocument = response.data;
                }
            })
            .catch((error) => {
                console.log(error);
            });
    },
    methods: {
        findTypeDoc(id) {
            const array = this.typeDocument
            console.log(array)
            console.log(array.filter(e => e.idDocumento == id)[0].documento)
            return array.filter(e => e.idDocumento == id)[0].documento
        }
    }
};
</script>

<style>
</style>