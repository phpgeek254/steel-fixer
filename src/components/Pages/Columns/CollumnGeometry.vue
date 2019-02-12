<template>
<v-layout row>
    <v-flex>
        <h3>Column Geometry</h3>
        <div>
        </div>
        <div :style="{width: width/5 + 'px', height: length/5 + 'px', background: 'grey'}">
        </div>
    </v-flex>
    <v-flex>
        <h4> Cross Section </h4>
        <div :style="{width: width/5 + 'px', height: height/5 + 'px', background: 'grey'}"></div>
    </v-flex>
</v-layout>
</template>

<script>
    export default {
        name: "ColumnGeometry",
        props: ['width', 'length', 'height'],
        data () {
            return {
                // width: 200,
                // height: 400,
                // length: 3000,
            }
        }
    }
</script>

<style scoped>

</style>
