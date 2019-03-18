<template>
<div>
    <v-select
            label="Characteristic Strength of Concrete"
            :items="CONCRETE.CHARACTERISTIC_STRENGTHS"
            v-model="materials.fCu"
            required
            outline
    ></v-select>

    <!--Characteristic Strength of Steel-->
    <v-select
            :items="[250, 460, 500]"
            label="Characteristic Strength of Steel"
            v-model="materials.fY"
            required
            outline
    ></v-select>
    <v-btn color="primary" @click="saveMaterialProperties()">Save and proceed </v-btn>
</div>
</template>

<script>
    export default {
        name: "MaterialProperties",
        props: ['element_type'],
        data() {
            return {
                materials: {
                    fCu: 30,
                    fY: 500
                }
            }
        },
        methods: {
            saveMaterialProperties () {
                this.$store.dispatch('saveMaterialProperties', {materialProperties: this.materials, element_type: this.element_type});
                this.EventBus.$emit('proceed_to_next_page');
            }
        }
    }
</script>

<style scoped>

</style>
