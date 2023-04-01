<template>
  <section>
    <List api="/api/persona/all"/>
  </section>
</template>

<script>
import List from '../components/ListPerson.vue'
export default {
    name: 'personas',
    components:{
        List
    }

}
</script>

<style>

</style>