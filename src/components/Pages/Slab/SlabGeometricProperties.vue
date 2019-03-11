<template>
    <v-card-text>
        <h3>Geometry</h3>
        <!--Width of the column (b)-->
        <v-layout row>
            <v-flex>
                <v-text-field
                        label="Width of the column (b)"
                        v-model="elementObject.length"
                        required
                        outline
                ></v-text-field>
                <!--Column depth (d)-->
                <v-text-field
                        :label= "element_type + ' width (w)'"
                        v-model="elementObject.width"
                        required
                        outline
                ></v-text-field>
                <!--Column Clear Height-->
                <v-text-field
                        :label="(element_type === 'column') ? 'Height': 'Thickness' + ' of ' + element_type "
                        v-model="elementObject.thickness"
                        outline
                        required
                ></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex>
                <v-btn color="primary" @click="saveObjectGeometry()">Save </v-btn>
            </v-flex>
        </v-layout>
    </v-card-text>
</template>

<script>
    export default {
        name: "SlabGeometricProperties",
        props: ['element_type'],
        data() {
            return {
                elementObject: {
                    length: 4000,
                    width: 4000,
                    thickness: 150
                }
            }
        },
        methods: {
            saveObjectGeometry () {},
        }
    }
</script>

<style scoped>

</style>
