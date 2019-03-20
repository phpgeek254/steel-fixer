<template>
    <v-layout row>
        <v-flex xs12>
            <form>
                <!-- Tabs for Each step. -->
                <!-- Constants -->
                <v-tabs height="80" dark slot="extension" v-model="tab" color="indigo" grow
                        style="color: #FFF !important;">
                    <v-tabs-slider color="white"></v-tabs-slider>
                    <v-tab key="m_props"> Material Properties</v-tab>
                    <v-tab> Geometry</v-tab>
                    <v-tab> Loading</v-tab>
                    <v-tab> Design</v-tab>
                    <v-tab> Results</v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                    <v-tab-item>
                        <v-card flat>
                            <h1 class="ma-3">Material Properties</h1>
                            <!--Characteristic Strength of Concrete-->
                            <v-layout row>
                                <MaterialProperties :element_type="column"></MaterialProperties>
                            </v-layout>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <ColumnGeometry></ColumnGeometry>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card flat>
                            <v-layout>
                                <v-flex>
                                    <v-card-text>
                                        <h3>Loading</h3>
                                        <v-layout>
                                            <v-flex>
                                                <LiveLoad element_type="column"></LiveLoad>
                                            </v-flex>
                                        </v-layout>
                                        <!-- Slab Loading -->
                                        <v-layout>

                                            <v-flex class="mr-2">
                                                <v-select
                                                        label="Select Slab"
                                                        :items="['beam', 'wall', 'slab']"
                                                        v-model="loadType"
                                                        outline
                                                ></v-select>
                                            </v-flex>
                                            <v-flex>
                                                <v-btn primary @click="EventBus.$emit('open_dialog')" large> + Add Load </v-btn>
                                            </v-flex>
                                        </v-layout>

                                        <!-- Loading from Slabs -->
                                        <div v-if="column.slabLoads">
                                            <v-layout row>
                                                <v-flex>
                                                    <h2> Loading from the Slabs </h2>
                                                    <DisplayLoading :load_type="column.slabLoads" type="slab"></DisplayLoading>
                                                </v-flex>
                                            </v-layout>
                                        </div>
                                        <!-- Loading from beams -->
                                        <div v-if="column.beamLoads">
                                            <v-layout row>
                                                <v-flex>
                                                    <h2> Loading from the Beams </h2>
                                                <DisplayLoading :load_type="column.beamLoads" type="beam"></DisplayLoading>
                                                </v-flex>
                                            </v-layout>
                                        </div>
                                        <!-- Wall Loads -->
                                        <v-layout row v-if="column.wallLoads">
                                            <v-flex>
                                                <h2> Loading from the Wall </h2>
                                                <DisplayLoading :load_type="column.wallLoads" type="wall"></DisplayLoading>
                                            </v-flex>
                                        </v-layout>
                                        <!--Axial Loading-->
                                    </v-card-text>
                                </v-flex>
                                <v-flex></v-flex>
                            </v-layout>
                        </v-card>
                    </v-tab-item>

                    <v-tab-item>
                        <SteelBarSelection></SteelBarSelection>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card flat>
                            <v-card-text>
                                <h1>Results</h1>
                                <DisplayLoadingResults></DisplayLoadingResults>
                                <DisplayGeometry></DisplayGeometry>
                                <DisplayGeometry></DisplayGeometry>
                                <!--<DisplayLoading></DisplayLoading>-->
                                <DisplayDesign></DisplayDesign>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </form>
        </v-flex>
        <CreateLoads :type="loadType"></CreateLoads>
    </v-layout>
</template>

<script>
    import CreateLoads from "./CreateLoads/CreateLoads";
    import {mapGetters} from 'vuex';
    import DisplayLoading from "./Loads/DispalyLoading";
    import MaterialProperties from "./CreateLoads/MaterialProperties";
    import ColumnGeometry from "./CreateLoads/ColumnGeometry";
    import SteelBarSelection from "./CreateLoads/SteelBarSelection";
    import LiveLoad from "./CreateLoads/LiveLoad";
    import DisplayDesign from "./Results/DisplayDesign";
    import DisplayGeometry from "./Results/DisplayGeometry";
    import DisplayLoadingResults from "./Results/DisplayLoadingResults";
    export default {
        name: "Column",
        components: {
            DisplayLoadingResults,
            DisplayGeometry,
            DisplayDesign,
            LiveLoad, SteelBarSelection, ColumnGeometry, MaterialProperties, DisplayLoading, CreateLoads},
        data() {
            return {
                addBeam: null,
                loadType: 'slab',
                tab: null,
            }
        },
        computed: {
            ...mapGetters(['column']),
        },
        mounted() {
            this.EventBus.$on('removeBeamLoad', () => this.beams-=1);
            this.EventBus.$on('proceed_to_next_page', () => {
                const tab = parseInt(this.tab);
                this.tab = (tab < 4 ? tab + 1 : 0)
            });
        },
        methods: {}
    }
</script>

<style scoped>

</style>
