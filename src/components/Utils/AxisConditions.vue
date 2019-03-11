<template>
    <v-layout row>
        <v-flex>
        <v-select
                label="X-X axis top condition"
                :items="[1, 2, 3]"
                v-model="column.xx_top_condition"
                outline
        ></v-select>
        <!---Y axis top condition-->
        <v-select
                label="Y-Y axis top condition"
                :items="[1, 2, 3]"
                v-model="column.yy_top_condition"
                outline
        ></v-select>
        <!--X-X axis bottom condition-->
        <v-select
                label="X-X axis bottom condition"
                :items="[1, 2, 3]"
                v-model="column.xx_bottom_condition"
                outline
        ></v-select>
        <!--Y-Y axis Bottom condition-->
        <v-select
                label="Y-Y axis Bottom condition"
                :items="[1, 2, 3]"
                v-model="column.yy_bottom_condition"
                outline
        ></v-select>
        </v-flex>

        <v-flex class="ma-2">
            <img src="images/column_geo.png" alt="column geometry" width="200"> <br>
            <img src="images/Column_r.png" alt="column restraints" width="400">
        </v-flex>


    </v-layout>


</template>

<script>
    export default {
        name: "AxisConditions"
    }
</script>

<style scoped>

</style>
