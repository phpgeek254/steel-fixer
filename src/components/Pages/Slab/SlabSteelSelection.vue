<template>
    <v-card flat>
        <v-card-text>
            <!--Select Steel Reinforcement Bars-->
            <v-select
                    label="Select Steel Reinforcement Bars"
                    :items="STEEL_BARS.SLAB_BAR_SIZES"
                    v-model="selectedBars.barSize"
                    outline
            ></v-select>

            <v-select
                    label="Select Steel Reinforcement Bar spacing"
                    :items="[50, 75, 100, 125, 150, 175, 200, 250, 300, 400, 500]"
                    v-model="selectedBars.spacing"
                    outline
            ></v-select>
        </v-card-text>

        <v-btn @click="design()">Calculate</v-btn>
    </v-card>
</template>

<script>
    export default {
        name: "SlabSteelSelection",
        data() {
            return {
                tab: null,
                selectedBars: {
                    barSize: 10,
                    spacing: 200,
                }
            }
        },
        methods: {
            design() {
                this.$store.dispatch('saveSlabSelectedBars', this.selectedBars);
                this.EventBus.$emit('proceed_to_next_page');
            }
        }
    }
</script>

<style scoped>

</style>
