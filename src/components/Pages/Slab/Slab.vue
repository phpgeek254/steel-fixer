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
                        <h2 class="ma-3">Design Parameters</h2>
                        <!--Characteristic Strength of Concrete-->
                        <v-layout row>
                            <MaterialProperties element_type="slab"></MaterialProperties>
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
                        <h2 class="ma-3">Design Parameters</h2>
                        <!--Characteristic Strength of Concrete-->
                        <v-layout row>

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
    export default {
        name: "Slab",
        components: {ObjectDimensions, LiveLoad, MaterialProperties},
        data () {
            return {
                tab: null
            }
        }
    }
</script>

<style scoped>

</style>
