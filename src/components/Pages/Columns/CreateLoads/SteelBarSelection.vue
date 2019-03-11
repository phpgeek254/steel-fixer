<template>
    <v-card flat>
        <v-card-text>
            <h3>Design</h3>
            <!--Select Steel Reinforcement Bars-->
            <v-select
                    label="Select Steel Reinforcement Bars"
                    :items="STEEL_BARS.BAR_SIZES"
                    v-model="selectedBars.barSize"
                    outline
            ></v-select>

            <v-select
                    label="Select Steel Reinforcement Bars"
                    :items="[4, 6, 8, 10]"
                    v-model="selectedBars.numberOfBars"
                    outline
            ></v-select>
        </v-card-text>

        <v-btn @click="design()">Calculate</v-btn>
    </v-card>
</template>

<script>
    export default {
        name: "SteelBarSelection",
        data() {
            return {
                tab: null,
                selectedBars: {
                    barSize: 12,
                    numberOfBars: 4
                }
            }
        },
        methods: {
            design() {
                this.$store.dispatch('saveSelectedBars', this.selectedBars);
                this.EventBus.$emit('proceed_to_next_page');
            }
        }
    }
</script>

<style scoped>

</style>
