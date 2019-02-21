<template>
    <div v-show="load_type.length" class="ma-2">
        <v-layout row v-for="(beam, index) in load_type" :key="index" grid-list-md>
            <v-flex class="mr-2">
                <v-text-field
                        :label="'Depth of the '+ type +' (d)'" v-model="beam.thickness"
                              outline disabled></v-text-field>
            </v-flex>
            <v-flex class="mr-2">
                <v-text-field
                        :label="'Width of the '+ type +' (b)'" v-model="beam.width"
                              outline disabled></v-text-field>
            </v-flex>
            <v-flex class="mr-2">
                <v-text-field :label="'length of the '+ type+' (l)'" v-model="beam.length"
                              outline disabled></v-text-field>
            </v-flex>
            <v-flex class="mr-2">
                <v-select
                        :label="'Number Of '+ type +''"
                        :items="[1, 2, 3, 4]"
                        v-model="beam.numberOfMembers"
                        outline
                        disabled>
                </v-select>
            </v-flex>
            <v-flex class="mr-2"> <v-btn flat @click="removeLoad(type, index)" color="error">X</v-btn></v-flex>
            <h4>
                SELF WEIGHT = {{ BEAM.calculateBeamSelfWeight(beam) }} KN <br>
                TOTAL LOAD = {{ BEAM.calculateBeamSelfWeight(beam) * beam.numberOfMembers }} KN
            </h4>
        </v-layout>

    </div>

</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        props: ['load_type', 'type'],
        name: "DisplayLoading",
        computed: {
            ...mapGetters(['beamLoads', 'slabLoads', 'wallLoads'])
        },
        methods: {
            removeLoad (type, index) {
                this.$store.dispatch('removeLoad', {type: type, index: index});
            }
        }

    }
</script>

<style scoped>

</style>
