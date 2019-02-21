<template>
    <v-card flat>
        <v-card-text>
            <h3>Geometry</h3>
            <!--Width of the column (b)-->
            <v-layout row>
                <v-flex>
                    <v-text-field
                            label="Width of the column (b)"
                            v-model="column.b"
                            required
                            outline
                    ></v-text-field>
                    <!--Column depth (d)-->
                    <v-text-field
                            label="Column depth (d)"
                            v-model="column.d"
                            required
                            outline
                    ></v-text-field>
                    <!--Column Clear Height-->
                    <v-text-field
                            label="Column Clear Height"
                            v-model="column.l"
                            outline
                            required
                    ></v-text-field>

                    <!--X-X axis top condition-->
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
                <v-flex>

                </v-flex>
            </v-layout>

        </v-card-text>
        <v-btn color="primary" @click="saveColumnGeometry()">Save and proceed </v-btn>
    </v-card>
</template>

<script>
    export default {
        name: "ColumnGeometry",
        data() {
            return {
                column: {
                    b: 300,
                    d: 400,
                    l: 3000,
                    xx_top_condition: 1,
                    yy_top_condition: 3,
                    xx_bottom_condition: 2,
                    yy_bottom_condition: 2,
                }
            }
        },
        methods: {
            saveColumnGeometry() {
                this.$store.dispatch('saveColumnGeometry', this.column);
                this.EventBus.$emit('proceed_to_next_page');
            }

        }
    }
</script>

<style scoped>

</style>
