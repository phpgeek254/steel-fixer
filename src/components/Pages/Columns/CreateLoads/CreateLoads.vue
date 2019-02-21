<template>
    <div>
        <v-layout row justify-center>
            <v-dialog v-model="dialog" persistent max-width="600px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Add A New {{ type }} Load</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container grid-list-md>
                            <v-flex class="mr-3">
                                <v-text-field :label="'Depth of the '+ type +' (d)'" v-model="object.thickness"
                                              outline></v-text-field>
                            </v-flex>
                            <v-flex class="mr-2">
                                <v-text-field :label="'Width of the '+ type +' (b)'" v-model="object.width"
                                              outline></v-text-field>
                            </v-flex>
                            <v-flex class="mr-2">
                                <v-text-field :label="'length of the '+ type +' (l)'" v-model="object.length"
                                              outline></v-text-field>
                            </v-flex>
                            <v-flex class="mr-2">
                                <v-select
                                        :label="'Number Of '+ type +''"
                                        :items="[1, 2, 3, 4]"
                                        v-model="object.numberOfMembers"
                                        outline
                                ></v-select>
                            </v-flex>
                            <h3> BEAM SELF WEIGHT = {{ BEAM.calculateBeamSelfWeight(object) }} KN <br>
                                TOTAL LOAD OF BEAMS = {{ BEAM.calculateBeamSelfWeight(object) * object.numberOfMembers }} KN
                            </h3>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" flat @click="() => { createNewMemberLoad(); dialog = false;}">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-layout>
    </div>
</template>

<script>
    export default {
        name: "CreateLoads",
        props: ['type'],
        data () {
            return {
                dialog: false,
                object: {
                    length: 2000,
                    width: 200,
                    thickness: 300,
                    numberOfMembers: 1
                }
            }
        },
        mounted(){
            this.EventBus.$on('open_dialog', () => this.dialog = true);
        },
        methods: {
            createNewMemberLoad() {
            this.$store.dispatch('createMemberLoad', {member: this.object, type: this.type});
            }
        }
    }
</script>

<style scoped>

</style>
