<template>
    <section>
        <nav class="bg-gray-800">
            <div class="mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img
                                class="h-8 w-8"
                                src="../assets/logo.png"
                                alt="Logo"
                            />
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4">
                                <router-link
                                    to="/adminUser"
                                    class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                                >
                                    Usuarios
                                </router-link>
                                <router-link
                                    to="/personas"
                                    class="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                                    >Personas
                                </router-link>
                                <router-link
                                    to="/vehiculo"
                                    class="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                                    >Vehiculo
                                </router-link>
                                <router-link
                                    to="/"
                                    class="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                                    >Cerrar Sesión</router-link
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Menú desplegable para dispositivos móviles -->
            <div class="md:hidden" id="mobile-menu">
                <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a
                        href="/"
                        class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                        >Inicio</a
                    >

                    <a
                        href="/productos"
                        class="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                        >Productos</a
                    >

                    <a
                        href="/contacto"
                        class="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                        >Contacto</a
                    >
                </div>
            </div>
        </nav>

        <div
            class="d-flex justify-content-around navbar navbar-light bg-light"
        ></div>
    </section>
</template>

<script>
export default {};
</script>

<style>
</style>