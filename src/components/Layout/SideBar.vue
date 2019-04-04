<template>
    <v-navigation-drawer
            v-model="drawer"
            fixed
            app
    >
        <img src="https://st.depositphotos.com/1854299/1603/i/950/depositphotos_16030251-stock-photo-reinforced-concrete-structure.jpg"
             alt="logo" height="250">
        <v-list>
            <v-list-tile @click="$router.push({name: 'beams'})">
                <v-list-tile-content>
                    <v-list-tile-title>Beams</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="$router.push({name: 'columns'})">
                <v-list-tile-content>
                    <v-list-tile-title>Columns</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile @click="$router.push({name: 'slabs'})">
                <v-list-tile-content>
                    <v-list-tile-title>Slabs</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "SideBar",
    data: () => ({
        drawer: null
    }),
    mounted() {
        this.EventBus.$on('drawer', () => this.drawer = !this.drawer);
    }
}
</script>

<style scoped>

</style>
