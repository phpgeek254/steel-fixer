<template>
    <div>
        <v-layout row>
            <v-flex>
                <v-select
                        label="Select type of occupancy"
                        :items="OCCUPANCY_TYPE_LOADS.OCCUPANCY_OBJECTS"
                        item-text="name"
                        v-model="liveLoadObject.live_load"
                        item-value="load"
                        outline
                ></v-select>
            </v-flex>
            <v-flex class="ml-3" v-if="element_type === 'column'">
                <v-select
                        label="Select Number of Floors"
                        :items="[2, 3, 4, 5]"
                        v-model="liveLoadObject.number_of_floors"
                        outline
                ></v-select>
            </v-flex>
            <v-flex>
                <v-btn large :disabled="!liveLoadObject.live_load" @click="saveLiveLoad()" color="primary">Save</v-btn>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import {element_types as Element_type} from "../../../../Objects/ElementType";

    export default {
        name: "LiveLoad",
        props: ['element_type'],
        data() {
            return {
                liveLoadObject: {
                    live_load: '',
                    number_of_floors: this.element_type === Element_type.COLUMN ? 2 : 0,
                }

            }
        },
        mounted() {

        },
        methods: {
            saveLiveLoad() {
                this.$store.dispatch('saveLiveLoad', {load: this.liveLoadObject, element_type: this.element_type});
            }
        }
    }
</script>

<style scoped>
</style>
