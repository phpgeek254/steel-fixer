<template>
        <v-toolbar color="indigo" dark fixed app>
            <v-toolbar-side-icon @click.stop="EventBus.$emit('drawer')">
            </v-toolbar-side-icon>
            <v-toolbar-title>Structural Analysis and Design.</v-toolbar-title>
        </v-toolbar>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
