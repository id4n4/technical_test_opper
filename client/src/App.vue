<template>
    <section>
        <Nav v-if="!$route.meta.hideNavigation"/>
        <router-view />
    </section>
</template>

<script>
// import { isAuthenticated } from "./script/auth";
import Nav from "./components/Navegation.vue";

export default {
    components: {
        Nav,
    },
    data() {
        return {
            
        };
    },
    computed: {
        isLoggedIn() {
            return localStorage.getItem("token") !== null;
        },
    },
    created() {
        window.addEventListener("storage", () => {
            this.$forceUpdate();
        });
    },
};
</script>
