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
                            <h3
                                class="text-lg leading-6 font-medium text-gray-900"
                            >
                                Actualización de datos
                            </h3>
                        </div>
                    </div>
                </div>
                <!-- Formulario -->
                <form class="space-y-4">
                    <div class="px-4">
                        <div>
                            <label
                                for="tipoDocumento"
                                class="block font-medium text-gray-700"
                                >Tipo de documento de identidad:</label
                            >
                            <select
                                id="tipoDocumento"
                                name="tipoDocumento"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            >
                                <option value="us">Estados Unidos</option>
                                <option value="ca" selected>Canadá</option>
                                <option value="mx">México</option>
                            </select>
                        </div>
                        <div>
                            <label
                                for="documento"
                                class="block font-medium text-gray-700"
                                ># Documento</label
                            >
                            <input
                                type="number"
                                name="documento"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            />
                        </div>
                        <div>
                            <label
                                for="name"
                                class="block font-medium text-gray-700"
                                >Nombres</label
                            >
                            <input
                                type="text"
                                name="nombred"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            />
                        </div>
                        <div>
                            <label
                                for="apellidos"
                                class="block font-medium text-gray-700"
                                >Apellidos</label
                            >
                            <input
                                type="text"
                                name="apellidos"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            />
                        </div>
                        <div>
                            <label
                                for="direccion"
                                class="block font-medium text-gray-700"
                                >Direccion</label
                            >
                            <input
                                type="text"
                                name="direccion"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            />
                        </div>
                        <div>
                            <label
                                for="email"
                                class="block font-medium text-gray-700"
                                >Correo electrónico</label
                            >
                            <input
                                type="email"
                                name="email"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            />
                        </div>
                        <div>
                            <label
                                for="phone"
                                class="block font-medium text-gray-700"
                                >Teléfono</label
                            >
                            <input
                                type="number"
                                name="phone"
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            />
                        </div>
                        
                    </div>
                    <!-- Pie del modal -->
                    <div
                        class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
                    >
                        <button
                            type="submit"
                            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                            @click.prevent="closeModal"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: String
        }
    },
    methods: {
        closeModal() {
            this.$emit("closeModal");
        },
    },
};
</script>

<style>
</style>