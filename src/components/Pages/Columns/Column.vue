<template>
    <v-layout row>
        <v-flex xs12 lg6>
    <form>
        <v-select
                label="Characteristic Strength of Concrete"
                :items="[16, 20, 25, 30, 35, 40]"
                v-model="fcu"
                required
        ></v-select>
        <v-select
                :items="[250, 500]"
                label="Characteristic Strength of Steel"
                v-model="fy"
                required
        ></v-select>

        <v-text-field
                label="Width of the column (b)"
                v-model="b"
                required
        ></v-text-field>
        <v-text-field
                label="Column depth (d)"
                v-model="d"
                required
        ></v-text-field>

        <v-text-field
                label="Column Clear Height"
                v-model="l"
                required
        ></v-text-field>

        <v-select
                label="X-X axis top condition"
                :items="[1, 2, 3]"
                v-model="xx_top_condition"
        ></v-select>

        <v-select
                label="Y-Y axis top condition"
                :items="[1, 2, 3]"
                v-model="yy_top_condition"
        ></v-select>

        <v-select
                label="X-X axis bottom condition"
                :items="[1, 2, 3]"
                v-model="xx_bottom_condition"
        ></v-select>

        <v-select
                label="Y-Y axis Bottom condition"
                :items="[1, 2, 3]"
                v-model="yy_bottom_condition"
        ></v-select>

        <v-text-field
                label="Axial Loading"
                v-model="loading"
                required
        ></v-text-field>
        <v-btn @click="design">Calculate</v-btn>
    </form>
        </v-flex>
        <v-flex xs12 lg6 p2>
            <h3> Results </h3>
            <ColumnGeometry :width="width" :height="height" :length="length"></ColumnGeometry>
            <ColumnLoading :column_type="loading_type"></ColumnLoading>
        </v-flex>
    </v-layout>
</template>

<script>
    import ColumnGeometry from "./CollumnGeometry";
    import ColumnLoading from "./ColumnLoading";
    export default {
        name: "Column",
        components: {ColumnLoading, ColumnGeometry},
        data () {
            return {
                category_names: [],
                width: 0,
                height: 0,
                length: 0,
                loading_type: null
            }
        },
        mounted () {
            this.initCategoryNames();
        },
        methods: {
            initCategoryNames: function () {
                let categories = this.COLUMN.COLUMN_CATEGORIES;
                categories.forEach((cat) => this.category_names.push(cat.name));
            },

            design() {}
        }
    }
</script>

<style scoped>

</style>
