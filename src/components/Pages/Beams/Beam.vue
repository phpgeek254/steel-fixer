<template>
        <v-layout row>
            <v-flex xs12 lg6>
                <v-expansion-panel popout>
                    <v-expansion-panel-content>
                        <div slot="header">
                        <h3> Beam Geometry </h3>
                        </div>
                        <v-card>

                        </v-card>
                    </v-expansion-panel-content>

                    <v-expansion-panel-content>
                        <div slot="header">
                            <h3> Loading </h3>
                        </div>
                        <v-card>
                            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-flex>
        </v-layout>
</template>

<script>
import {Span} from "../../../Objects/Spans";

export default {
    name: "Beam",
    data () {
        return {
            spans: [
                Span
            ]
        }
    }
}
</script>

<style scoped>

</style>
