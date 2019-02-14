<template>
    <div>
        <v-expansion-panel>
            <v-expansion-panel-content class="pa-2">
                <div slot="header"> Beam Details {{ index }}<v-btn flat @click="EventBus.$emit('removeBeamLoad', index)"> X</v-btn></div>

        <v-layout row>
            <v-flex class="mr-3" md3 sm12>
                <v-text-field label="Depth of the beam (d)" v-model="beam.thickness"
                              outline></v-text-field>
            </v-flex>
            <v-flex md3 sm12 class="mr-2">
                <v-text-field label="Width of the beam (b)" v-model="beam.width"
                              outline></v-text-field>
            </v-flex>
            <v-flex class="mr-2" md3 sm12>
                <v-text-field label="length of the beam (l)" v-model="beam.length"
                              outline></v-text-field>
            </v-flex>
            <v-flex class="mr-2" md3 sm12>
                <v-select
                        label="Number Of Beams"
                        :items="[1, 2, 3, 4]"
                        v-model="beam.numberOfBeams"
                        outline
                ></v-select>
            </v-flex>
        </v-layout>
               <h3> BEAM SELF WEIGHT = {{ displayBeamSelfWeight() }} KN <br>
               TOTAL LOAD OF BEAMS = {{ displayBeamSelfWeight() * beam.numberOfBeams }} KN
               </h3>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </div>
</template>

<script>
    export default {
        name: "BeamLoads",
        props: ['index'],
        data () {
            return {
                beam: {
                    length: 2000,
                    width: 200,
                    thickness: 300,
                    numberOfBeams: 1
                }
            }
        },
        methods: {
            displayBeamSelfWeight () {
                let loading = this.BEAM.calculateBeamSelfWeight(this.beam);
                this.EventBus.$emit('BEAM_LOAD', { index : this.index, loading: loading * this.beam.numberOfBeams});
                return loading;
            }
        }
    }
</script>

<style scoped>

</style>
