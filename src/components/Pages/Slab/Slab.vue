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
                    <v-tab> Supports</v-tab>
                    <v-tab> Design</v-tab>
                    <v-tab> Results</v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                    <v-tab-item>
                        <v-card flat>
                            <h2 class="ma-3">Design Parameters</h2>
                            <!--Characteristic Strength of Concrete-->
                            <v-layout row>
                                <v-flex md-4>
                                    <MaterialProperties element_type="slab"></MaterialProperties>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-tab-item>

                    <v-tab-item>
                        <v-card flat>
                            <h2 class="ma-3">Slab Geometry</h2>
                            <!--Characteristic Strength of Concrete-->
                            <v-layout row>
                                <ObjectDimensions element_type="slab"></ObjectDimensions>
                            </v-layout>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card flat>
                            <h2 class="ma-3">Loading</h2>
                            <!--Characteristic Strength of Concrete-->
                            <v-layout row>
                                <LiveLoad element_type="slab"></LiveLoad>
                            </v-layout>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card flat>
                            <h2 class="ma-3">Support Condition</h2>
                            <!--Characteristic Strength of Concrete-->
                            <v-layout row>
                                <v-flex md-4>
                                    <Supports></Supports>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-tab-item>


                    <v-tab-item>
                        <v-card flat>
                            <h2 class="ma-3">Select Steel bars</h2>
                            <SlabSteelSelection></SlabSteelSelection>
                            <v-layout row>

                            </v-layout>
                        </v-card>
                    </v-tab-item>

                    <v-tab-item>
                        <v-card flat>
                            <h2 class="ma-3">Results</h2>
                            <!--Characteristic Strength of Concrete-->
                            <v-layout row>
            <table class="v-table">
                <tr class="pa-2">
                    <th>Item</th>
                    <th>Value</th>
                    <th>Status</th>
                </tr>
                <tr><th colspan="3">Material Properties</th></tr>
                <tr>
                    <th>Fcu</th>
                    <th>{{ slab.materialProperties.fCu}}</th>
                    <th>NULL</th>
                </tr>
                <tr>
                    <th>Fy</th>
                    <th>{{ slab.materialProperties.fY}}</th>
                    <th>NULL</th>
                </tr>
                <tr><th colspan="3">Geometry</th></tr>
                <tr>
                    <th>Length</th>
                    <th>{{ slab.dimensions.length}}</th>
                    <th>NULL</th>
                </tr>
                <tr>
                    <th>Width</th>
                    <th>{{ slab.dimensions.width}}</th>
                    <th>NULL</th>
                </tr>
                <tr>
                    <th>Thickness</th>
                    <th>{{ slab.dimensions.thickness}}</th>
                    <th>NULL</th>
                </tr>
                <tr><th colspan="3">Loading</th></tr>
                <tr>
                    <th>Self weight</th>
                    <th>{{ slab.selfWeight}}</th>
                    <th>NULL</th>
                </tr>
                <tr>
                    <th>Live Load</th>
                    <th>{{ slab.live_load}}</th>
                    <th>NULL</th>
                </tr>
                <tr>
                    <th>Design Load</th>
                    <th>{{ slab.designLoad}}</th>
                    <th>NULL</th>
                </tr>
                <tr>
                    <th>Edge Moments (Hogging)</th>
                    <th>{{ slab.results.hoggingMoments }}</th>
                    <th>NULL</th>
                </tr>
                <tr>
                    <th>Midspan Moments (Sagging)</th>
                    <th>{{ slab.results.saggingMoments }}</th>
                    <th>NULL</th>
                </tr>

                <tr><th colspan="3">Area Of Steel</th></tr>
                <tr>
                    <th>Edge Main Steel</th>
                    <th>{{ slab.results.hoggingMainSteel }}</th>
                    <th>{{ slab.areaOfSteelProvided > slab.results.hoggingMainSteel ? 'OK' : 'Failed' }}</th>
                </tr>
                <tr>
                    <th>Edge Secondary Steel</th>
                    <th>{{ slab.results.hoggingSecondarySteel }}</th>
                    <th>{{ slab.areaOfSteelProvided > slab.results.hoggingSecondarySteel ? 'OK' : 'Failed' }}</th>
                </tr>

                <tr>
                    <th>Midspan Main Steel</th>
                    <th>{{ slab.results.saggingMainSteel }}</th>
                    <th>{{ slab.areaOfSteelProvided > slab.results.saggingMainSteel ? 'OK' : 'Failed' }}</th>
                </tr>
                <tr>
                    <th>Midspan Secondary Steel</th>
                    <th>{{ slab.results.saggingSecondarySteel }}</th>
                    <th>{{ slab.areaOfSteelProvided > slab.results.saggingSecondarySteel ? 'OK' : 'Failed' }}</th>
                </tr>
                <tr>
                    <th>Minimum Area of Steel</th>
                    <th>{{ slab.results.minimumArea }}</th>
                    <th>{{ slab.areaOfSteelProvided > slab.results.minimumArea ? 'OK' : 'Failed' }}</th>
                </tr>
                <tr>
                    <th colspan="3">
                        Select D{{slab.barSize }} @ {{ slab.barSpacing }} centers
                    </th>
                </tr>


            </table>
                            </v-layout>
                        </v-card>
                    </v-tab-item>

                </v-tabs-items>
            </form>
        </v-flex>
    </v-layout>
</template>

<script>
    import MaterialProperties from "../Columns/CreateLoads/MaterialProperties";
    import LiveLoad from "../Columns/CreateLoads/LiveLoad";
    import ObjectDimensions from "../../Utils/ObjectDimensions";
    import Supports from "./Supports";
    import {mapGetters} from 'vuex';
    import SteelBarSelection from "../Columns/CreateLoads/SteelBarSelection";
    import SlabSteelSelection from "./SlabSteelSelection";

    export default {
        name: "Slab",
        components: {SlabSteelSelection, SteelBarSelection, Supports, ObjectDimensions, LiveLoad, MaterialProperties},
        data() {
            return {
                tab: null
            }
        },
        computed: {
            ...mapGetters(['slab'])
        }
    }
</script>

<style scoped>

</style>
