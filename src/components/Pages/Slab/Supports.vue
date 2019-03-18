<template>
    <div>
        <v-layout row>
            <v-flex xs8 offset-xs2>
                <v-select
                        label="Select Support Type"
                        :items="SLAB.SLAB_SUPPORT_CONDITIONS"
                        item-text="name"
                        item-value="index"
                        v-model="supportCondition"
                        outline
                ></v-select>
            </v-flex>
        </v-layout>

        <v-layout row v-if="supportCondition">
            <v-flex xs8 offset-xs2>
                <v-select
                        label="Select Support Type"
                        :items="SLAB.PANEL_TYPES"
                        item-text="name"
                        item-value="index"
                        v-model="edgeConditions"
                        outline
                ></v-select>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs8 offset-xs2>
        <v-btn color="primary" @click="saveSupports()"> Save </v-btn>
            </v-flex>
        </v-layout>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "Supports",
        data () {
            return {
                supportCondition: 0,
                edgeConditions: 0
            }
        },

        computed: {
            ...mapGetters(['slab'])
        },

        methods: {
            saveSupports() {
                // calculate ly/lx
                // get the coefficient
                let edgeMoment = this.SLAB.getEdgeMomentsRestrained(this.edgeConditions, this.slab.dimensions, this.slab.designLoad);
                let midspanMoment = this.SLAB.getMidspanMomentsRestrined(this.edgeConditions, this.slab.dimensions, this.slab.designLoad);

                let areaOfMainSteelEdge = this.SLAB.calculateMainSteelArea(this.slab.dimensions, 10, 20, edgeMoment, this.slab.materialProperties.fCu, this.slab.materialProperties.fY);
                let areaOfSecSteelEdge = this.SLAB.calculateSecondarySteelArea(this.slab.dimensions, 10, 20, edgeMoment, this.slab.materialProperties.fCu, this.slab.materialProperties.fY);

                let areaOfMainSteelMidspan = this.SLAB.calculateMainSteelArea(this.slab.dimensions, 10, 20, midspanMoment, this.slab.materialProperties.fCu, this.slab.materialProperties.fY);
                let areaOfSecSteelMidspan = this.SLAB.calculateSecondarySteelArea(this.slab.dimensions, 10, 20, midspanMoment, this.slab.materialProperties.fCu, this.slab.materialProperties.fY);

                let minArea = this.SLAB.calculateMinimuArea(this.slab.dimensions);
                let momentsAreas = {
                    hoggingMoments: edgeMoment,
                    saggingMoments: midspanMoment,
                    hoggingMainSteel: areaOfMainSteelEdge,
                    hoggingSecondarySteel: areaOfSecSteelEdge,
                    saggingMainSteel: areaOfMainSteelMidspan,
                    saggingSecondarySteel: areaOfSecSteelMidspan,
                    minimumArea: minArea
                };

                this.$store.dispatch('saveDesignResults', {momentsAreas})


            }
        }
    }
</script>

<style scoped>

</style>
