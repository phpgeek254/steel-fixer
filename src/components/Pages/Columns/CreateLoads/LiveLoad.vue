<template>
    <div>
        <v-layout row>
            <v-flex>
                <v-select
                        label="Select type of occupancy"
                        :items="OCCUPANCY_TYPE_LOADS.OCCUPANCY_TYPES"
                        v-model="live_load"
                        :item-value="OCCUPANCY_TYPE_LOADS.OCCUPANCY_OBJECTS.load"
                        outline
                ></v-select>
            </v-flex>
            <v-flex>
                <v-btn large :disabled="!live_load" @click="saveLiveLoad()" color="primary">Save</v-btn>
            </v-flex>
        </v-layout>

    </div>
</template>

<script>
    export default {
        name: "LiveLoad",
        data() {
            return {
                live_load: '',
                occupancy: null,
            }
        },
        mounted() {

        },
        methods: {
            saveLiveLoad() {
                if (this.live_load) {
                    this.occupancy = this.OCCUPANCY_TYPE_LOADS.OCCUPANCY_OBJECTS.filter(load => {
                        if(this.live_load === load.name) {
                            return load;
                        }
                    })
                }
                let values = this.occupancy;
                console.log('Live load',  values)
            }
        }
    }
</script>

<style scoped>

</style>
